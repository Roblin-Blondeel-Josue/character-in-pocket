import React from 'react';
import { PropTypes } from 'prop-types';
import { Accordion, AccordionDetails, AccordionSummary, Card, Typography } from '@mui/material';
import AccordionModelDescription from './model/AccordionModelDescription';
import LupusPower from '../../data/LupusPower';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

export default function Powers({ rituels, cry, auspice, auspicePower, dons, bonusAuspice }) {
  return (
    <Card sx={{ m: '2vh 0', borderRadius: '5px', boxShadow: 3 }}>
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
      {bonusAuspice.name != null ? (
        <Accordion>
          <AccordionSummary
            sx={{ p: '.5rem 1rem 0 1rem' }}
            expandIcon={<ArrowDropDownCircleIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={{ m: 0 }} variant="h6">
              Seconde Auspice
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ p: '0rem 1rem', paddingTop: 0 }}>
            <Typography sx={{ m: '0 0 1rem 0' }}>{bonusAuspice.description}</Typography>
          </AccordionDetails>
        </Accordion>
      ) : (
        <div style={{ display: 'hidden' }} />
      )}
    </Card>
  );
}
Powers.propTypes = {
  rituels: PropTypes.array,
  cry: PropTypes.array,
  auspice: PropTypes.object,
  auspicePower: PropTypes.array,
  dons: PropTypes.array,
  bonusAuspice: PropTypes.object,
};
