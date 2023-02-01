import React from 'react';
import { PropTypes } from 'prop-types';
import { Card } from '@mui/material';
import AccordionModelLevel from './model/AccordionModelLevel';

export default function Skills({ talents, skills }) {
  return (
    <Card sx={{ m: '2vh 5vw' }}>
      <AccordionModelLevel array={talents} title="Talents" />
      <AccordionModelLevel array={skills} title="Compétences" />
    </Card>
  );
}
Skills.propTypes = {
  talents: PropTypes.array,
  skills: PropTypes.array,
};
