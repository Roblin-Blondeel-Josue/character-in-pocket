import React from 'react';
import { PropTypes } from 'prop-types';
import { Card } from '@mui/material';
import AccordionModelDescription from './model/AccordionModelDescription';

export default function Avantages({ bonus }) {
  return (
    <Card sx={{ m: '2vh 0', borderRadius: '5px', boxShadow: 3 }}>
      <AccordionModelDescription array={bonus} title="Avantages et Désavantages" />
    </Card>
  );
}
Avantages.propTypes = {
  bonus: PropTypes.array,
};
