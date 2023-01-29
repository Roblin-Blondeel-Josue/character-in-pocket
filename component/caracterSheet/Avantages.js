import React from 'react';
import { PropTypes } from 'prop-types';
import { Stack, Card, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

export default function Avantages({ bonus }) {
  const avantages = bonus;
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
            Avantages et Désavantages
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '1rem', paddingTop: 0, justifyContent: 'center' }}>
          <Stack direction="column" spacing={1.5} sx={{ paddingTop: '.5rem' }}>
            {avantages
              ? avantages.map((item) => (
                  <Typography key={avantages.indexOf(item)}>
                    <b>{item.name}</b> <br /> {item.description}
                  </Typography>
                ))
              : 'Wait'}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
Avantages.propTypes = {
  bonus: PropTypes.array,
};
