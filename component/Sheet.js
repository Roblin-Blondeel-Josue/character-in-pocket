import React from 'react';
import FakeData from '../data/FakeSheet.json';
import Attributes from './caracterSheet/Attributes';
import Avantages from './caracterSheet/Avantages';
import Skills from './caracterSheet/Skills';
import Knowledges from './caracterSheet/Knowledges';
import DescriptionCard from './caracterSheet/DescriptionCard';
import Powers from './caracterSheet/Powers';

export default function Sheet() {
  const player = FakeData[0];
  return (
    <div>
      <DescriptionCard player={player} />
      <Attributes stats={player.attributes} />
      <Avantages bonus={player.avantages} />
      <Skills talents={player.talents} skills={player.skills} />
      <Knowledges politics={player.politics} legends={player.legends} wod={player.wod} />
      <Powers rituels={player.rituels} cry={null} auspice={player.auspice.name} auspicePower={player.auspicePower} />
      <div style={{ height: '10vh' }} />
    </div>
  );
}
