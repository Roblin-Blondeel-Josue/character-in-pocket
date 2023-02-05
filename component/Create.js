import React from 'react';
import { CreateWrapper } from './create/CreateContext';
import AttributesCreate from './create/Attributes';
import DescriptionCreate from './create/Description';
import Resume from './create/Resume';
import Talents from './create/Talents';
import Skills from './create/Skills';

export default function Create() {
  return (
    <CreateWrapper>
      <DescriptionCreate />
      <AttributesCreate />
      <Talents />
      <Skills />
      <Resume />
    </CreateWrapper>
  );
}
