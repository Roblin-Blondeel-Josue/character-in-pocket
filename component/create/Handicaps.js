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
import HandicapsList from '../../data/Handicaps.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import getHandicap from './map/Handicaps';

export default function Handicaps() {
  const { setHandicaps, saveHandicaps, setSaveHandicaps } = useAppContext();
  const [firstAvantage, setFirstAvantage] = React.useState({ name: 'Aucun', level: 0, description: null });
  const [secondAvantage, setSecondAvantage] = React.useState({
    name: 'Aucun',
    level: 0,
    description: null,
  });
  const [thirdAvantage, setThirdAvantage] = React.useState({
    name: 'Aucun',
    level: 0,
    description: null,
  });
  function sendHandicaps(avtg1, avtg2, avtg3) {
    setHandicaps([getHandicap(avtg1), getHandicap(avtg2), getHandicap(avtg3)]);
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
                label="Premier Handicap"
                onChange={(e) => setFirstAvantage(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {HandicapsList.map((avantage, index) => (
                  <option key={index} value={avantage.name}>
                    {avantage.name}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Second Handicap"
                onChange={(e) => setSecondAvantage(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {HandicapsList.map((avantage, index) => (
                  <option key={index} value={avantage.name}>
                    {avantage.name}
                  </option>
                ))}
              </TextField>
              {secondAvantage === 'Dérangé' || firstAvantage === 'Dérangé' ? (
                <TextField
                  select
                  label="Trouble"
                  onChange={(e) => setThirdAvantage(e.target.value)}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {HandicapsList.map((avantage, index) => (
                    <option key={index} value={avantage.name}>
                      {avantage.name}
                    </option>
                  ))}
                </TextField>
              ) : (
                <div style={{ display: 'none' }} />
              )}
            </Stack>
          </FormControl>
          <Button
            sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 1rem .5rem 0' }}
            onClick={() => sendHandicaps(firstAvantage, secondAvantage, thirdAvantage)}
          >
            Sauvegardez
          </Button>
          {saveHandicaps ? 'Informations Sauvgardées' : ''}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
