import React from 'react';
import { PropTypes } from 'prop-types';
import { Card } from '@mui/material';
import AccordionModelDescription from './model/AccordionModelDescription';
import LupusPower from '../../data/LupusPower';

export default function Powers({ rituels, cry, auspice, auspicePower, dons }) {
  return (
    <Card sx={{ m: '2vh 5vw' }}>
      {rituels !== null && rituels[0].level !== 0 ? (
        <AccordionModelDescription array={rituels} title="Rituels" />
      ) : (
        <div style={{ display: 'hidden' }} />
      )}
      {auspice.name === 'Gaillard' ? (
        <AccordionModelDescription array={cry} title="Hurlements" />
      ) : (
        <div style={{ display: 'hidden' }} />
      )}
      {auspice.moon === 'Demi-Lune de Lune ascendante' ? (
        <AccordionModelDescription array={auspicePower} title={`Pouvoir : ${auspice.name}`} />
      ) : (
        <div style={{ display: 'hidden' }} />
      )}
      {auspice.moon === 'Nouvelle Lune partielle' ? (
        <AccordionModelDescription array={LupusPower} title={`Pouvoir : ${auspice.name}`} />
      ) : (
        <div style={{ display: 'hidden' }} />
      )}
      <AccordionModelDescription array={dons} title="Dons" />
    </Card>
  );
}
Powers.propTypes = {
  rituels: PropTypes.array,
  cry: PropTypes.array,
  auspice: PropTypes.object,
  auspicePower: PropTypes.array,
  dons: PropTypes.array,
};
