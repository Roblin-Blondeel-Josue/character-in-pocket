import React from 'react';
import { PropTypes } from 'prop-types';
import { Stack, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

export default function AccordionModelLevel({ array, title }) {
  return (
    <Accordion>
      <AccordionSummary
        sx={{ p: '.5rem 1rem 0 1rem' }}
        expandIcon={<ArrowDropDownCircleIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography sx={{ m: 0 }} variant="h6">
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ p: '0rem 1rem', paddingTop: 0 }}>
        <Stack
          spacing={0.5}
          direction="column"
          sx={{ justifyContent: 'center', flexWrap: 'wrap', marginBottom: '.5rem' }}
        >
          {array.map((item, index) =>
            item.name != null ? (
              <Typography key={index}>
                <b>
                  {item.name} {item.level !== 0 ? `(Niveau: ${item.level})` : ''}
                </b>
                <br />
                {item.description}
              </Typography>
            ) : (
              <div key={index} style={{ display: 'hidden' }} />
            )
          )}
        </Stack>
      </AccordionDetails>
    </Accordion>
  );
}
AccordionModelLevel.propTypes = {
  array: PropTypes.array,
  title: PropTypes.string,
  type: PropTypes.string,
};
