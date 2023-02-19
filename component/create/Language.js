import React, { useState } from 'react';
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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Language() {
  const { setLanguage, saveLanguage, setSaveLanguage } = useAppContext();
  const [firstLanguage, setFirstLanguage] = useState(null);
  const [secondLanguage, setSecondLanguage] = useState(null);
  const [thirdLanguage, setThirdLanguage] = useState(null);
  const [fourLanguage, setFourLanguage] = useState(null);
  const [firstLanguageName, setFirstLanguageName] = useState('Aucune');
  const [secondLanguageName, setSecondLanguageName] = useState('Aucune');
  const [thirdLanguageName, setThirdLanguageName] = useState('Aucune');
  const [fourLanguageName, setFourLanguageName] = useState('Aucune');
  const [errorFirstLanguage, setErrorFirstLanguage] = useState(false);
  const [errorSecondLanguage, setErrorSecondLanguage] = useState(false);
  const [errorThirdLanguage, setErrorThirdLanguage] = useState(false);
  const [errorFourLanguage, setErrorFourLanguage] = useState(false);
  const [errorLanguage, setErrorLanguage] = useState(false);

  function handleFirstLanguage(value) {
    if (/^[a-zA-Zéèàùûêâôëîï-]{1}[a-zA-Zéèàùûêâôëîï-\s]*[a-zA-Zéèàùûêâôëîï]$/.test(value) || value === '') {
      setFirstLanguageName(value);
      setErrorFirstLanguage(false);
    } else {
      setFirstLanguageName('');
      setErrorFirstLanguage(true);
    }
  }

  function handleSecondLanguage(value) {
    if (/^[a-zA-Zéèàùûêâôëîï-]{1}[a-zA-Zéèàùûêâôëîï-\s]*[a-zA-Zéèàùûêâôëîï]$/.test(value) || value === '') {
      setSecondLanguageName(value);
      setErrorSecondLanguage(false);
    } else {
      setSecondLanguageName('');
      setErrorSecondLanguage(true);
    }
  }

  function handleThirdLanguage(value) {
    if (/^[a-zA-Zéèàùûêâôëîï-]{1}[a-zA-Zéèàùûêâôëîï-\s]*[a-zA-Zéèàùûêâôëîï]$/.test(value) || value === '') {
      setThirdLanguageName(value);
      setErrorThirdLanguage(false);
    } else {
      setThirdLanguageName('');
      setErrorThirdLanguage(true);
    }
  }

  function handleFourLanguage(value) {
    if (/^[a-zA-Zéèàùûêâôëîï-]{1}[a-zA-Zéèàùûêâôëîï-\s]*[a-zA-Zéèàùûêâôëîï]$/.test(value) || value === '') {
      setFourLanguageName(value);
      setErrorFourLanguage(false);
    } else {
      setFourLanguageName('');
      setErrorFourLanguage(true);
    }
  }

  function sendLanguage(lang1, level1, lang2, level2, lang3, level3, lang4, level4) {
    if (
      errorFirstLanguage === false &&
      errorSecondLanguage === false &&
      errorThirdLanguage === false &&
      errorFourLanguage === false
    ) {
      setErrorLanguage(false);
      setLanguage([
        {
          name: lang1,
          level: 0,
          description: level1,
        },
        {
          name: lang2,
          level: 0,
          description: level2,
        },
        {
          name: lang3,
          level: 0,
          description: level3,
        },
        {
          name: lang4,
          level: 0,
          description: level4,
        },
      ]);
      setSaveLanguage(true);
    } else {
      setErrorLanguage(true);
      setSaveLanguage(false);
    }
  }
  return (
    <Card id="LanguageCard" sx={{ m: '2vh 0', borderRadius: '5px', boxShadow: 3 }}>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.75rem 1.5rem' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Langues </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '.5rem 1rem', justifyContent: 'center' }}>
          <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
            Vous n'avez pas besoin de précisez votre langue maternelle.
          </Typography>
          <FormControl fullWidth onSubmit={(e) => e.preventDefault()}>
            <Stack direction="column" spacing={2.5}>
              <Stack direction="row" spacing={1.5}>
                <TextField
                  style={{ width: '60vw' }}
                  helperText={errorFirstLanguage ? 'Uniquement des lettres et espaces. Min 2 caractères.' : ''}
                  onChange={(e) => handleFirstLanguage(e.target.value)}
                  label="Première Langue"
                />
                <TextField
                  select
                  label="Niveau"
                  onChange={(e) => setFirstLanguage(e.target.value)}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value={'Iconnues'}>0</option>
                  <option value={'Parler'}>1</option>
                  <option value={'Parler. Lire et écrire'}>2</option>
                </TextField>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <TextField
                  style={{ width: '60vw' }}
                  helperText={errorSecondLanguage ? 'Uniquement des lettres et espaces. Min 2 caractères.' : ''}
                  onChange={(e) => handleSecondLanguage(e.target.value)}
                  label="Seconde Langue"
                />
                <TextField
                  select
                  label="Niveau"
                  onChange={(e) => setSecondLanguage(e.target.value)}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value={'Inconnues'}>0</option>
                  <option value={'Parler'}>1</option>
                  <option value={'Parler. Lire et écrire'}>2</option>
                </TextField>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <TextField
                  style={{ width: '60vw' }}
                  helperText={errorThirdLanguage ? 'Uniquement des lettres et espaces. Min 2 caractères.' : ''}
                  onChange={(e) => handleThirdLanguage(e.target.value)}
                  label="Première Langue"
                />
                <TextField
                  select
                  label="Niveau"
                  onChange={(e) => setThirdLanguage(e.target.value)}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value={'Iconnues'}>0</option>
                  <option value={'Parler'}>1</option>
                  <option value={'Parler. Lire et écrire'}>2</option>
                </TextField>
              </Stack>
              <Stack direction="row" spacing={1.5}>
                <TextField
                  style={{ width: '60vw' }}
                  helperText={errorFourLanguage ? 'Uniquement des lettres et espaces. Min 2 caractères.' : ''}
                  onChange={(e) => handleFourLanguage(e.target.value)}
                  label="Première Langue"
                />
                <TextField
                  select
                  label="Niveau"
                  onChange={(e) => setFourLanguage(e.target.value)}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value={'Iconnues'}>0</option>
                  <option value={'Parler'}>1</option>
                  <option value={'Parler. Lire et écrire'}>2</option>
                </TextField>
              </Stack>
            </Stack>
          </FormControl>
          <Button
            sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 1rem .5rem 0' }}
            onClick={() =>
              sendLanguage(
                firstLanguageName,
                firstLanguage,
                secondLanguageName,
                secondLanguage,
                thirdLanguageName,
                thirdLanguage,
                fourLanguageName,
                fourLanguage
              )
            }
          >
            Sauvegardez
          </Button>
          {saveLanguage ? 'Langues Sauvgardées' : ''}
          {errorLanguage ? 'Une erreur est survenue' : ''}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
