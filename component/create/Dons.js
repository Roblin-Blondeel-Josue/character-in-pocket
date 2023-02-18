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
import DonsList from '../../data/Dons.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import getDons from './map/Dons';

export default function Dons() {
  const { setDons, saveDons, setSaveDons } = useAppContext();
  const [firstDons, setFirstDons] = React.useState({});
  const [secondDons, setSecondDons] = React.useState({});
  const [firstDonsName, setFirstDonsName] = React.useState('Aucun');
  const [secondDonsName, setSecondDonsName] = React.useState('Aucun');

  React.useEffect(() => {
    setFirstDons(getDons(firstDonsName));
    setSecondDons(getDons(secondDonsName));
  }, [firstDonsName, secondDonsName]);

  function sendDons(don1, don2) {
    setDons([don1, don2]);
    setSaveDons(true);
  }
  return (
    <Card id="donsCard" sx={{ m: '2vh 0', borderRadius: '5px', boxShadow: 3 }}>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.75rem 1.5rem' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Dons </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '.5rem 1rem', justifyContent: 'center' }}>
          <FormControl fullWidth onSubmit={(e) => e.preventDefault()}>
            <Stack direction="column" spacing={2.5}>
              <TextField
                select
                label="Premier Dons"
                onChange={(e) => setFirstDonsName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {DonsList.map((Dons, index) => (
                  <option key={index} value={Dons.name}>
                    {Dons.name}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Second Dons"
                onChange={(e) => setSecondDonsName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {DonsList.map((Dons, index) => (
                  <option key={index} value={Dons.name}>
                    {Dons.name}
                  </option>
                ))}
              </TextField>
            </Stack>
          </FormControl>
          <Button
            sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 1rem .5rem 0' }}
            onClick={() => sendDons(firstDons, secondDons)}
          >
            Sauvegardez
          </Button>
          {saveDons ? 'Dons Sauvgardées' : ''}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
