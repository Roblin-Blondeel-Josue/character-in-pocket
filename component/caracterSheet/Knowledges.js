import React from 'react';
import { PropTypes } from 'prop-types';
import { Card } from '@mui/material';
import AccordionModelLevel from './model/AccordionModelLevel';
import AccordionModelDescription from './model/AccordionModelDescription';

export default function Attributes({ languages, legends, politics, wod }) {
  return (
    <Card sx={{ m: '2vh 0', borderRadius: '5px', boxShadow: 3 }}>
      <AccordionModelDescription array={languages} title="Langues" />
      <AccordionModelLevel array={politics} title="Connaissances : Politiques" />
      <AccordionModelLevel array={legends} title="Connaissances : Contes et Légendes" />
      <AccordionModelLevel array={wod} title="Connaissances : Monde des Ténèbres" />
    </Card>
  );
}
Attributes.propTypes = {
  languages: PropTypes.array,
  legends: PropTypes.array,
  politics: PropTypes.array,
  wod: PropTypes.array,
};
