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
import Auspices from '../../data/Auspices.json';
import getAuspice from './map/Auspices';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Bonus() {
  const { setBonusAuspice, setBonusRage, saveBonus, setSaveBonus } = useAppContext();
  const valueAttributes = [0, 1, 2, 3, 4, 5];
  const [auspice, setAuspice] = React.useState('');
  const [auspiceMoon, setAuspiceMoon] = React.useState('');

  React.useEffect(() => {
    if (auspiceMoon != '') {
      setAuspice(getAuspice(auspiceMoon));
    }
  }, [auspiceMoon]);
  function sendBonus(auspice) {
    if (auspiceMoon != '') {
      setBonusAuspice({ name: `${auspice.name} (${auspice.moon})`, level: 0, description: auspice.bonus });
    }
    setSaveBonus(true);
  }
  return (
    <Card id="descriptionCard" sx={{ m: '2vh 0', borderRadius: '5px', boxShadow: 3 }}>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.75rem 1.5rem' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Bonus</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '.5rem 1rem', justifyContent: 'center' }}>
          <FormControl fullWidth onSubmit={(e) => e.preventDefault()}>
            <Stack direction="column" spacing={2.5}>
              <TextField
                select
                label="Double Auspice "
                onChange={(e) => setAuspiceMoon(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                helperText={'Sélectionnez votre 2nd Auspice'}
              >
                {Auspices.map((auspice, index) => (
                  <option key={index} value={auspice.moon}>
                    {auspice.name} ({auspice.moon})
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Rage supplémentaire"
                onChange={(e) => setBonusRage(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {valueAttributes.map((value, index) => (
                  <option key={index} value={value}>
                    {value}
                  </option>
                ))}
              </TextField>
            </Stack>
          </FormControl>
          <Button
            sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 1rem .5rem 0' }}
            onClick={() => sendBonus(auspice)}
          >
            Sauvegardez
          </Button>
          {saveBonus ? 'Informations Sauvegardées' : ''}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
