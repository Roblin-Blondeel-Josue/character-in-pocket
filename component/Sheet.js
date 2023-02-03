import React from 'react';
import Attributes from './caracterSheet/Attributes';
import Avantages from './caracterSheet/Avantages';
import Skills from './caracterSheet/Skills';
import Knowledges from './caracterSheet/Knowledges';
import DescriptionCard from './caracterSheet/DescriptionCard';
import Powers from './caracterSheet/Powers';
import { Button, FormControl, Skeleton, TextField } from '@mui/material';
import { PropTypes } from 'prop-types';
import getCharacters from './caracterSheet/axios/getCharacter';

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
          sx={{ m: '1rem 5vw' }}
          onSubmit={(event) => event.preventDefault()}
          onKeyDown={(e) => sendCodeKey(e.key, typingCode)}
        >
          <TextField
            sx={{ bgcolor: 'background.paper', color: 'primary', borderRadius: '5px' }}
            label="Indiquez votre code"
            helperText={error ? 'Uniquement des chiffres' : ''}
            onChange={(e) => handleCode(e.target.value)}
          />
          <Button onClick={() => setCode(typingCode)}>Envoyez</Button>
        </FormControl>
      )}
    </div>
  );
}
Sheet.propTypes = {
  code: PropTypes.number,
};
