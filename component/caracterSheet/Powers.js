import React from 'react';
import { PropTypes } from 'prop-types';
import { Card } from '@mui/material';
import AccordionModelDescription from './model/AccordionModelDescription';

export default function Powers({ rituels, cry, auspice, auspicePower }) {
  return (
    <Card sx={{ m: '2vh 5vw' }}>
      {rituels[0].level !== 0 ? (
        <AccordionModelDescription array={rituels} title="Rituels" />
      ) : (
        <div style={{ display: 'hidden' }} />
      )}
      <AccordionModelDescription array={auspicePower} title={`Pouvoir : ${auspice}`} />
    </Card>
  );
}
Powers.propTypes = {
  rituels: PropTypes.array,
  cry: PropTypes.array,
  auspice: PropTypes.string,
  auspicePower: PropTypes.array,
};
