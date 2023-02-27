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
import { useAppContext } from '../CreateContext';
import DonsList from '../../../data/Dons.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import getDons from '../map/Dons';

export default function Dons() {
  const { setDons, saveDons, setSaveDons } = useAppContext();
  const [firstDons, setFirstDons] = React.useState({});
  const [secondDons, setSecondDons] = React.useState({});
  const [firstDonsName, setFirstDonsName] = React.useState('Aucun');
  const [secondDonsName, setSecondDonsName] = React.useState('Aucun');
  const [firstDonsTribeName, setFirstDonsTribeName] = React.useState('Aucun');
  const [firstDonsTribeDesc, setFirstDonsTribeDesc] = React.useState(null);
  const [secondDonsTribeName, setSecondDonsTribeName] = React.useState('Aucun');
  const [secondDonsTribeDesc, setSecondDonsTribeDesc] = React.useState(null);
  const [errorFirstDonTribe, setErrorFirstDonTribe] = React.useState(false);
  const [errorFirstDonDesc, setErrorFirstDonDesc] = React.useState(false);
  const [errorSecondDonTribe, setErrorSecondDonTribe] = React.useState(false);
  const [errorSecondDonDesc, setErrorSecondDonDesc] = React.useState(false);
  function handleFirstDonTribe(value) {
    if (
      /^[a-zA-Z0-9éèàùûêâôëî]{1}[a-zA-Z0-9éèàùûêâôëîï\-;:.,\s()]*[a-zA-Z0-9éèàùûêâôëîï\-;:.,()\s]$/.test(value) ||
      value === ''
    ) {
      setFirstDonsTribeName(value);
      setErrorFirstDonTribe(false);
    } else {
      setFirstDonsTribeName('');
      setErrorFirstDonTribe(true);
    }
  }
  function handleFirstDonDesc(value) {
    if (
      /^[a-zA-Z0-9éèàùûêâôëî]{1}[a-zA-Z0-9éèàùûêâôëîï\-;:.,\s()]*[a-zA-Z0-9éèàùûêâôëîï\-;:.,()\s]$/.test(value) ||
      value === ''
    ) {
      setFirstDonsTribeDesc(value);
      setErrorFirstDonDesc(false);
    } else {
      setFirstDonsTribeDesc('');
      setErrorFirstDonDesc(true);
    }
  }
  function handleSecondDonTribe(value) {
    if (
      /^[a-zA-Z0-9éèàùûêâôëîï\-;:.,\s()]{1}[a-zA-Z0-9éèàùûêâôëîï\-;:.,\s()]*[a-zA-Z0-9éèàùûêâôëîï\-;:.,()\s]$$/.test(
        value
      ) ||
      value === ''
    ) {
      setSecondDonsTribeName(value);
      setErrorSecondDonTribe(false);
    } else {
      setSecondDonsTribeName('');
      setErrorSecondDonTribe(true);
    }
  }
  function handleSecondDonDesc(value) {
    if (
      /^[a-zA-Z0-9éèàùûêâôëî]{1}[a-zA-Z0-9éèàùûêâôëîï\-;:.,\s()]*[a-zA-Z0-9éèàùûêâôëîï\-;:.,()\s]$/.test(value) ||
      value === ''
    ) {
      setSecondDonsTribeDesc(value);
      setErrorSecondDonDesc(false);
    } else {
      setSecondDonsTribeDesc('');
      setErrorSecondDonDesc(true);
    }
  }
  React.useEffect(() => {
    if (firstDonsName !== 'Don de Tribu') {
      setFirstDons(getDons(firstDonsName));
    }
    if (secondDonsName !== 'Don de Tribu') {
      setSecondDons(getDons(secondDonsName));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstDonsName, secondDonsName]);

  function handleFirstTribe(name, description) {
    setFirstDons({ name: name, level: 0, description: description });
  }
  function handleSecondTribe(name, description) {
    setSecondDons({ name: name, level: 0, description: description });
  }
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
                label="Premier Don"
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
                label="Second Don"
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
              {firstDonsName === 'Don de Tribu' ? (
                <Stack direction="column" spacing={2.5}>
                  <TextField
                    helperText={errorFirstDonTribe ? 'Uniquement des lettres et espaces. Min 2 caractères.' : ''}
                    onChange={(e) => handleFirstDonTribe(e.target.value)}
                    label="Don de Tribu"
                  />
                  <TextField
                    multiline
                    maxRows={4}
                    helperText={
                      errorFirstDonDesc
                        ? 'Uniquement des lettres, chiffres, doubles points, tirets, virgule et espaces. Min 10 mots.'
                        : 'Coût du Don : Description'
                    }
                    onChange={(e) => handleFirstDonDesc(e.target.value)}
                    label="Description"
                  />
                  <Button
                    sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 1rem .5rem 0' }}
                    onClick={() => handleFirstTribe(firstDonsTribeName, firstDonsTribeDesc)}
                  >
                    Validez le Don de Tribu
                  </Button>
                </Stack>
              ) : (
                <div style={{ display: 'none' }} />
              )}
              {secondDonsName === 'Don de Tribu' ? (
                <Stack direction="column" spacing={2.5}>
                  <TextField
                    helperText={errorSecondDonTribe ? 'Uniquement des lettres et espaces. Min 2 caractères.' : ''}
                    onChange={(e) => handleSecondDonTribe(e.target.value)}
                    label="Don de Tribu"
                  />
                  <TextField
                    multiline
                    maxRows={4}
                    helperText={
                      errorSecondDonDesc
                        ? 'Uniquement des lettres, chiffres, doubles points, tirets, virgule et espaces. Min 10 mots.'
                        : 'Coût du Don : Description'
                    }
                    onChange={(e) => handleSecondDonDesc(e.target.value)}
                    label="Description"
                  />
                  <Button
                    sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 1rem .5rem 0' }}
                    onClick={() => handleSecondTribe(secondDonsTribeName, secondDonsTribeDesc)}
                  >
                    Validez le Don de Tribu
                  </Button>
                </Stack>
              ) : (
                <div style={{ display: 'none' }} />
              )}
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
