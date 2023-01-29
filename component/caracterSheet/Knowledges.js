import React from 'react';
import { PropTypes } from 'prop-types';
import { Stack, Card, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

export default function Attributes({ legends, politics, wod }) {
  return (
    <Card sx={{ m: '2vh 5vw' }}>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.5rem 1rem 0 1rem' }}
          expandIcon={<ArrowDropDownCircleIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ m: 0 }} variant="h6">
            Connaissances : Politiques
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '0rem 1rem', paddingTop: 0 }}>
          <Stack spacing={0.5} direction="row" sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            {politics.map((item) =>
              item.level != null ? (
                <Typography key={politics.indexOf(item)}>
                  <b>{item.name}:</b> {item.level} |
                </Typography>
              ) : (
                <div key={politics.indexOf(item)} style={{ display: 'hidden' }} />
              )
            )}
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.5rem 1rem 0 1rem' }}
          expandIcon={<ArrowDropDownCircleIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ m: 0 }} variant="h6">
            Connaissances : Légendes
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '0rem 1rem .5rem 1rem' }}>
          <Stack spacing={0.5} direction="row" sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            {legends.map((item) =>
              item.level != null ? (
                <Typography key={legends.indexOf(item)}>
                  <b>{item.name}:</b> {item.level} |
                </Typography>
              ) : (
                <div key={legends.indexOf(item)} style={{ display: 'hidden' }} />
              )
            )}
          </Stack>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.5rem 1rem 0 1rem' }}
          expandIcon={<ArrowDropDownCircleIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ m: 0 }} variant="h6">
            Connaissances : Mondes des Ténebres
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '0rem 1rem .5rem 1rem' }}>
          <Stack spacing={0.5} direction="row" sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            {wod.map((item) =>
              item.level != null ? (
                <Typography key={wod.indexOf(item)}>
                  <b>{item.name}:</b> {item.level} |
                </Typography>
              ) : (
                <div key={wod.indexOf(item)} style={{ display: 'hidden' }} />
              )
            )}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
Attributes.propTypes = {
  legends: PropTypes.array,
  politics: PropTypes.array,
  wod: PropTypes.array,
};
