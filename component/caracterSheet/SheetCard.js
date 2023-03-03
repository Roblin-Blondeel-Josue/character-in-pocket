import React from 'react';
import Attributes from './Attributes';
import Avantages from './Avantages';
import Skills from './Skills';
import Knowledges from './Knowledges';
import DescriptionCard from './DescriptionCard';
import Powers from './Powers';
import { useReadContext } from './SheetContext';
import { Skeleton } from '@mui/material';

export default function SheetCard() {
  const { player } = useReadContext();
  return (
    <div style={{ margin: '5vh 5vw' }}>
      {player ? (
        <>
          <DescriptionCard player={player} />
          <Attributes stats={player.attributes} />
          <Avantages bonus={player.avantages} />
          <Skills talents={player.talents} skills={player.skills} />
          <Knowledges
            politics={player.politics}
            legends={player.legends}
            wod={player.wod}
            languages={player.language}
          />
          <Powers
            rituels={null}
            cry={null}
            auspice={player.auspice}
            auspicePower={player.auspicePower}
            dons={player.dons}
            bonusAuspice={player.bonusAuspice}
          />
        </>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', align: 'center' }}>
          <Skeleton variant="rounded" width="90vw" height="30vh" sx={{ borderRadius: '15px' }} />
          <Skeleton variant="rounded" width="90vw" height="10vh" sx={{ borderRadius: '15px' }} />
          <Skeleton variant="rounded" width="90vw" height="10vh" sx={{ borderRadius: '15px' }} />
          <Skeleton variant="rounded" width="90vw" height="10vh" sx={{ borderRadius: '15px' }} />
          <Skeleton variant="rounded" width="90vw" height="10vh" sx={{ borderRadius: '15px' }} />
        </div>
      )}
    </div>
  );
}
