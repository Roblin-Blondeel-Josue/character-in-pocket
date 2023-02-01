import React from 'react';
import Attributes from './caracterSheet/Attributes';
import Avantages from './caracterSheet/Avantages';
import Skills from './caracterSheet/Skills';
import Knowledges from './caracterSheet/Knowledges';
import DescriptionCard from './caracterSheet/DescriptionCard';
import Powers from './caracterSheet/Powers';
import { Skeleton } from '@mui/material';

import getCharacters from './caracterSheet/axios/getCharacter';
export default function Sheet() {
  const [player, setPlayer] = React.useState('');
  React.useEffect(() => {
    getCharacters(1).then((response) => setPlayer(response.result));
  }, []);
  return (
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
          <div style={{ height: '10vh' }} />
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', align: 'center' }}>
          <Skeleton variant="rounded" width="90vw" height="30vh" sx={{ m: '2vh 5vw', borderRadius: '15px' }} />
          <Skeleton variant="rounded" width="90vw" height="10vh" sx={{ m: '2vh 5vw', borderRadius: '15px' }} />
          <Skeleton variant="rounded" width="90vw" height="10vh" sx={{ m: '2vh 5vw', borderRadius: '15px' }} />
          <Skeleton variant="rounded" width="90vw" height="10vh" sx={{ m: '2vh 5vw', borderRadius: '15px' }} />
          <Skeleton variant="rounded" width="90vw" height="10vh" sx={{ m: '2vh 5vw', borderRadius: '15px' }} />
          <div style={{ height: '10vh' }} />
        </div>
      )}
    </div>
  );
}
