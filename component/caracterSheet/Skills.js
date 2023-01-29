import React from 'react';
import { PropTypes } from 'prop-types';
import { Card, Typography, Accordion, AccordionSummary, AccordionDetails, Stack } from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

export default function Skills({ talents, skills }) {
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
            Talents
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '0rem 1rem' }}>
          <Stack spacing={0.5} direction="row" sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
            {talents.map((item) =>
              item.level != null ? (
                <Typography key={talents.indexOf(item)}>
                  <b>{item.name}:</b> {item.level} |
                </Typography>
              ) : (
                <div key={talents.indexOf(item)} style={{ display: 'hidden' }} />
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
            Compétences
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '0rem 1rem .5rem 1rem' }}>
          <Stack spacing={0.5} direction="row" sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
            {skills.map((item) =>
              item.level != null ? (
                <Typography key={skills.indexOf(item)}>
                  <b>{item.name}:</b> {item.level} |
                </Typography>
              ) : (
                <div key={skills.indexOf(item)} style={{ display: 'hidden' }} />
              )
            )}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
Skills.propTypes = {
  talents: PropTypes.array,
  skills: PropTypes.array,
};
