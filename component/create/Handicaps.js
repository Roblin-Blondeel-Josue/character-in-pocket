import React from 'react';
import {
  Card,
  FormControl,
  TextField,
  Stack,
  Button,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import { useAppContext } from './CreateContext';
import AvantagesList from '../../data/Avantages.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Handicaps() {
  const { setHandicaps, saveHandicaps, setSaveHandicaps } = useAppContext();
  const [firstAvantage, setFirstAvantage] = React.useState('Aucun');
  const [secondAvantage, setSecondAvantage] = React.useState('Aucun');

  function sendHandicaps(avtg1, avtg2) {
    setHandicaps([
      { name: avtg1.name, level: 0, description: avtg1.description },
      { name: avtg2.name, level: 0, description: avtg2.description },
    ]);
    setSaveHandicaps(true);
  }
  return (
    <Card id="handicapsCard" sx={{ m: '2vh 5vw' }}>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.75rem 1.5rem' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Handicaps </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '.5rem 1rem', justifyContent: 'center' }}>
          <FormControl fullWidth onSubmit={(e) => e.preventDefault()}>
            <Stack direction="column" spacing={2.5}>
              <TextField
                select
                label="Premier Avantage"
                onChange={(e) => setFirstAvantage(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {AvantagesList.map((avantage, index) => (
                  <option key={index} value={avantage.name}>
                    {avantage.name}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Second Avantage"
                onChange={(e) => setSecondAvantage(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {AvantagesList.map((avantage, index) => (
                  <option key={index} value={avantage.name}>
                    {avantage.name}
                  </option>
                ))}
              </TextField>
            </Stack>
          </FormControl>
          <Button
            sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 1rem .5rem 0' }}
            onClick={() => sendHandicaps(firstAvantage, secondAvantage)}
          >
            Sauvegardez
          </Button>
          {saveHandicaps ? 'Informations Sauvgardées' : ''}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
