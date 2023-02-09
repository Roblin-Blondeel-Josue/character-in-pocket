import React from 'react';
import { CreateWrapper } from './create/CreateContext';
import AttributesCreate from './create/Attributes';
import DescriptionCreate from './create/Description';
import Resume from './create/Resume';
import Talents from './create/Talents';
import Skills from './create/Skills';
import Politcs from './create/Politics';
import Legends from './create/Legends';
import Wod from './create/Wod';
import Avantages from './create/Avantages';
import Handicaps from './create/Handicaps';

export default function Create() {
  return (
    <CreateWrapper>
      <DescriptionCreate />
      <AttributesCreate />
      <Talents />
      <Skills />
      <Legends />
      <Politcs />
      <Wod />
      <Avantages />
      <Handicaps />
      <Resume />
    </CreateWrapper>
  );
}
