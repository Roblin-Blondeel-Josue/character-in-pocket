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
import InsanityList from '../../data/Insanity.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import getHandicap from './map/Handicaps';
import getInsanity from './map/Insanity';

export default function Handicaps() {
  const { setHandicaps, saveHandicaps, setSaveHandicaps } = useAppContext();
  const [firstAvantage, setFirstAvantage] = React.useState({});
  const [secondAvantage, setSecondAvantage] = React.useState({});
  const [thirdAvantage, setThirdAvantage] = React.useState({});
  const [firstAvantageName, setFirstAvantageName] = React.useState('Aucun');
  const [secondAvantageName, setSecondAvantageName] = React.useState('Aucun');
  const [thirdAvantageName, setThirdAvantageName] = React.useState('Aucun');

  React.useEffect(() => {
    setFirstAvantage(getHandicap(firstAvantageName));
    setSecondAvantage(getHandicap(secondAvantageName));
    setThirdAvantage(getInsanity(thirdAvantageName));
  }, [firstAvantageName, secondAvantageName, thirdAvantageName]);

  function sendHandicaps(avtg1, avtg2, avtg3) {
    setHandicaps([avtg1, avtg2, avtg3]);
    setSaveHandicaps(true);
  }
  return (
    <Card id="handicapsCard" sx={{ m: '2vh 0', borderRadius: '5px', boxShadow: 3 }}>
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
                onChange={(e) => setFirstAvantageName(e.target.value)}
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
                onChange={(e) => setSecondAvantageName(e.target.value)}
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
              {secondAvantageName === 'Dérangé' || firstAvantageName === 'Dérangé' ? (
                <TextField
                  select
                  label="Dérangement"
                  onChange={(e) => setThirdAvantageName(e.target.value)}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {InsanityList.map((trouble, index) => (
                    <option key={index} value={trouble}>
                      {trouble}
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
