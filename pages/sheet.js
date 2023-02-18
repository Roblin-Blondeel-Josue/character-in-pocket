import React from 'react';
import Head from 'next/head';
import Header from '../component/Header';
import Attributes from '../component/caracterSheet/Attributes';
import Avantages from '../component/caracterSheet/Avantages';
import Skills from '../component/caracterSheet/Skills';
import Knowledges from '../component/caracterSheet/Knowledges';
import DescriptionCard from '../component/caracterSheet/DescriptionCard';
import Powers from '../component/caracterSheet/Powers';
import { Button, FormControl, Skeleton, TextField } from '@mui/material';
import { PropTypes } from 'prop-types';
import getCharacters from '../component/caracterSheet/axios/getCharacter';

export default function Sheet() {
  const [code, setCode] = React.useState(0);
  const [typingCode, setTypingCode] = React.useState(0);
  const [error, setError] = React.useState(false);
  function handleCode(value) {
    if (/[0-9]{1,3}$/.test(value) || value === '') {
      setError(false);
      setTypingCode(value);
    } else {
      setTypingCode(0);
      setError(true);
    }
  }
  function sendCodeKey(key, value) {
    if (key == 'Enter' && value !== '') {
      setCode(value);
    }
  }
  const [player, setPlayer] = React.useState('');
  React.useEffect(() => {
    getCharacters(code).then((response) => setPlayer(response.result));
  }, [code]);
  return (
    <div>
      <Head>
        <title>Chara'pocket</title>
        <meta name="description" content="Character sheet in your pocket" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        {code > 0 ? (
          <div>
            {player ? (
              <div>
                <DescriptionCard player={player} />
                <Attributes stats={player.attributes} />
                <Avantages bonus={player.avantages} />
                <Skills talents={player.talents} skills={player.skills} />
                <Knowledges politics={player.politics} legends={player.legends} wod={player.wod} />
                <Powers
                  rituels={null}
                  cry={null}
                  auspice={player.auspice}
                  auspicePower={player.auspicePower}
                  dons={player.dons}
                />
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', align: 'center' }}>
                <Skeleton variant="rounded" width="90vw" height="30vh" sx={{ m: '2vh 5vw', borderRadius: '15px' }} />
                <Skeleton variant="rounded" width="90vw" height="10vh" sx={{ m: '2vh 5vw', borderRadius: '15px' }} />
                <Skeleton variant="rounded" width="90vw" height="10vh" sx={{ m: '2vh 5vw', borderRadius: '15px' }} />
                <Skeleton variant="rounded" width="90vw" height="10vh" sx={{ m: '2vh 5vw', borderRadius: '15px' }} />
                <Skeleton variant="rounded" width="90vw" height="10vh" sx={{ m: '2vh 5vw', borderRadius: '15px' }} />
              </div>
            )}
          </div>
        ) : (
          <FormControl
            sx={{ m: '1rem 5vw', display: 'flex' }}
            onSubmit={(event) => event.preventDefault()}
            onKeyDown={(e) => sendCodeKey(e.key, typingCode)}
          >
            <TextField
              sx={{ bgcolor: 'background.paper', color: 'primary', borderRadius: '5px', paddingRight: '1rem' }}
              label="Indiquez votre code"
              helperText={error ? 'Uniquement des chiffres' : ''}
              onChange={(e) => handleCode(e.target.value)}
            />
            <Button
              sx={{ bgcolor: 'secondary.main', color: 'background.paper', marginTop: '.5rem' }}
              onClick={() => setCode(typingCode)}
            >
              Envoyez
            </Button>
          </FormControl>
        )}
        <div style={{ height: '10vh' }} />
      </main>
    </div>
  );
}
Sheet.propTypes = {
  code: PropTypes.number,
};
