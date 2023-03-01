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
import RitualList from '../../../data/rituals.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import getRitual from '../map/Rituals';

export default function Rituals() {
  const { setRituals, saveRituals, setSaveRituals } = useAppContext();
  const valueLevel = [1, 2, 3, 4, 5];
  const [firstRitual, setFirstRitual] = React.useState({});
  const [firstRitualName, setFirstRitualName] = React.useState('Aucun');
  const [firstRitualTribeName, setFirstRitualTribeName] = React.useState('Aucun');
  const [firstRitualTribeDesc, setFirstRitualTribeDesc] = React.useState(null);
  const [firstRitualTribeLevel, setFirstRitualTribeLevel] = React.useState(0);
  const [errorFirstRitualTribe, setErrorFirstRitualTribe] = React.useState(false);
  const [errorFirstRitualDesc, setErrorFirstRitualDesc] = React.useState(false);

  const [secondRitual, setSecondRitual] = React.useState({});
  const [secondRitualName, setSecondRitualName] = React.useState('Aucun');
  const [secondRitualTribeName, setSecondRitualTribeName] = React.useState('Aucun');
  const [secondRitualTribeDesc, setSecondRitualTribeDesc] = React.useState(null);
  const [secondRitualTribeLevel, setSecondRitualTribeLevel] = React.useState(0);
  const [errorSecondRitualTribe, setErrorSecondRitualTribe] = React.useState(false);
  const [errorSecondRitualDesc, setErrorSecondRitualDesc] = React.useState(false);

  const [thirdRitual, setThirdRitual] = React.useState({});
  const [thirdRitualName, setThirdRitualName] = React.useState('Aucun');
  const [thirdRitualTribeName, setThirdRitualTribeName] = React.useState('Aucun');
  const [thirdRitualTribeDesc, setThirdRitualTribeDesc] = React.useState(null);
  const [thirdRitualTribeLevel, setThirdRitualTribeLevel] = React.useState(0);
  const [errorThirdRitualTribe, setErrorThirdRitualTribe] = React.useState(false);
  const [errorThirdRitualDesc, setErrorThirdRitualDesc] = React.useState(false);

  const [fourRitual, setFourRitual] = React.useState({});
  const [fourRitualName, setFourRitualName] = React.useState('Aucun');
  const [fourRitualTribeName, setFourRitualTribeName] = React.useState('Aucun');
  const [fourRitualTribeDesc, setFourRitualTribeDesc] = React.useState(null);
  const [fourRitualTribeLevel, setFourRitualTribeLevel] = React.useState(0);
  const [errorFourRitualTribe, setErrorFourRitualTribe] = React.useState(false);
  const [errorFourRitualDesc, setErrorFourRitualDesc] = React.useState(false);

  function handleFirstRitualTribe(value) {
    if (
      /^[a-zA-Z0-9éèàùûêâôëî]{1}[a-zA-Z0-9éèàùûêâôëîï\-;:.,\s()]*[a-zA-Z0-9éèàùûêâôëîï\-;:.,()\s]$/.test(value) ||
      value === ''
    ) {
      setFirstRitualTribeName(value);
      setErrorFirstRitualTribe(false);
    } else {
      setFirstRitualTribeName('');
      setErrorFirstRitualTribe(true);
    }
  }
  function handleFirstRitualDesc(value) {
    if (
      /^[a-zA-Z0-9éèàùûêâôëî]{1}[a-zA-Z0-9éèàùûêâôëîï\-;:.,\s()]*[a-zA-Z0-9éèàùûêâôëîï\-;:.,()\s]$/.test(value) ||
      value === ''
    ) {
      setFirstRitualTribeDesc(value);
      setErrorFirstRitualDesc(false);
    } else {
      setFirstRitualTribeDesc('');
      setErrorFirstRitualDesc(true);
    }
  }
  function handleSecondRitualTribe(value) {
    if (
      /^[a-zA-Z0-9éèàùûêâôëîï\-;:.,\s()]{1}[a-zA-Z0-9éèàùûêâôëîï\-;:.,\s()]*[a-zA-Z0-9éèàùûêâôëîï\-;:.,()\s]$$/.test(
        value
      ) ||
      value === ''
    ) {
      setSecondRitualTribeName(value);
      setErrorSecondRitualTribe(false);
    } else {
      setSecondRitualTribeName('');
      setErrorSecondRitualTribe(true);
    }
  }
  function handleSecondRitualDesc(value) {
    if (
      /^[a-zA-Z0-9éèàùûêâôëî]{1}[a-zA-Z0-9éèàùûêâôëîï\-;:.,\s()]*[a-zA-Z0-9éèàùûêâôëîï\-;:.,()\s]$/.test(value) ||
      value === ''
    ) {
      setSecondRitualTribeDesc(value);
      setErrorSecondRitualDesc(false);
    } else {
      setSecondRitualTribeDesc('');
      setErrorSecondRitualDesc(true);
    }
  }
  function handleThirdRitualTribe(value) {
    if (
      /^[a-zA-Z0-9éèàùûêâôëî]{1}[a-zA-Z0-9éèàùûêâôëîï\-;:.,\s()]*[a-zA-Z0-9éèàùûêâôëîï\-;:.,()\s]$/.test(value) ||
      value === ''
    ) {
      setThirdRitualTribeName(value);
      setErrorThirdRitualTribe(false);
    } else {
      setThirdRitualTribeName('');
      setErrorThirdRitualTribe(true);
    }
  }
  function handleThirdRitualDesc(value) {
    if (
      /^[a-zA-Z0-9éèàùûêâôëî]{1}[a-zA-Z0-9éèàùûêâôëîï\-;:.,\s()]*[a-zA-Z0-9éèàùûêâôëîï\-;:.,()\s]$/.test(value) ||
      value === ''
    ) {
      setThirdRitualTribeDesc(value);
      setErrorThirdRitualDesc(false);
    } else {
      setThirdRitualTribeDesc('');
      setErrorThirdRitualDesc(true);
    }
  }
  function handleFourRitualTribe(value) {
    if (
      /^[a-zA-Z0-9éèàùûêâôëîï\-;:.,\s()]{1}[a-zA-Z0-9éèàùûêâôëîï\-;:.,\s()]*[a-zA-Z0-9éèàùûêâôëîï\-;:.,()\s]$$/.test(
        value
      ) ||
      value === ''
    ) {
      setFourRitualTribeName(value);
      setErrorFourRitualTribe(false);
    } else {
      setFourRitualTribeName('');
      setErrorFourRitualTribe(true);
    }
  }
  function handleFourRitualDesc(value) {
    if (
      /^[a-zA-Z0-9éèàùûêâôëî]{1}[a-zA-Z0-9éèàùûêâôëîï\-;:.,\s()]*[a-zA-Z0-9éèàùûêâôëîï\-;:.,()\s]$/.test(value) ||
      value === ''
    ) {
      setFourRitualTribeDesc(value);
      setErrorFourRitualDesc(false);
    } else {
      setFourRitualTribeDesc('');
      setErrorFourRitualDesc(true);
    }
  }

  function handleFirstTribe(name, description, level) {
    setFirstRitual({ name: name, level: level, description: description });
  }
  function handleSecondTribe(name, description, level) {
    setSecondRitual({ name: name, level: level, description: description });
  }
  function handleThirdTribe(name, description, level) {
    setThirdRitual({ name: name, level: level, description: description });
  }
  function handleFourTribe(name, description, level) {
    setFourRitual({ name: name, level: level, description: description });
  }

  React.useEffect(() => {
    if (firstRitualName !== 'Rituel de Tribu') {
      setFirstRitual(getRitual(firstRitualName));
    }
    if (secondRitualName !== 'Rituel de Tribu') {
      setSecondRitual(getRitual(secondRitualName));
    }
    if (thirdRitualName !== 'Rituel de Tribu') {
      setThirdRitual(getRitual(thirdRitualName));
    }
    if (fourRitualName !== 'Rituel de Tribu') {
      setFourRitual(getRitual(fourRitualName));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstRitualName, secondRitualName, thirdRitualName, fourRitualName]);

  function sendRituals(Ritual1, Ritual2, Ritual3, Ritual4) {
    setRituals([Ritual1, Ritual2, Ritual3, Ritual4]);
    setSaveRituals(true);
  }
  return (
    <Card id="RitualCard" sx={{ m: '2vh 0', borderRadius: '5px', boxShadow: 3 }}>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.75rem 1.5rem' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Rituels </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '.5rem 1rem', justifyContent: 'center' }}>
          <FormControl fullWidth onSubmit={(e) => e.preventDefault()}>
            <Stack direction="column" spacing={2.5}>
              <TextField
                select
                label="Premier Rituel"
                onChange={(e) => setFirstRitualName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {RitualList.map((ritual, index) => (
                  <option key={index} value={ritual.name}>
                    {ritual.name}
                  </option>
                ))}
              </TextField>
              {firstRitualName === 'Rituel de Tribu' ? (
                <Stack direction="column" spacing={2.5}>
                  <TextField
                    helperText={errorFirstRitualTribe ? 'Uniquement des lettres et espaces. Min 2 caractères.' : ''}
                    onChange={(e) => handleFirstRitualTribe(e.target.value)}
                    label="Rituel de Tribu"
                  />
                  <TextField
                    multiline
                    maxRows={4}
                    helperText={
                      errorFirstRitualDesc
                        ? 'Uniquement des lettres, chiffres, doubles points, tirets, virgule et espaces. Min 10 mots.'
                        : 'Coût du Rituel : Description'
                    }
                    onChange={(e) => handleFirstRitualDesc(e.target.value)}
                    label="Description"
                  />
                  <TextField
                    select
                    label="Niveau"
                    onChange={(e) => setFirstRitualTribeLevel(e.target.value)}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {valueLevel.map((value, index) => (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    ))}
                  </TextField>
                  <Button
                    sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 1rem .5rem 0' }}
                    onClick={() => handleFirstTribe(firstRitualTribeName, firstRitualTribeDesc, firstRitualTribeLevel)}
                  >
                    Validez le Don de Tribu
                  </Button>
                </Stack>
              ) : (
                <div style={{ display: 'none' }} />
              )}
              <TextField
                select
                label="Second Rituel"
                onChange={(e) => setSecondRitualName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {RitualList.map((ritual, index) => (
                  <option key={index} value={ritual.name}>
                    {ritual.name}
                  </option>
                ))}
              </TextField>
              {secondRitualName === 'Rituel de Tribu' ? (
                <Stack direction="column" spacing={2.5}>
                  <TextField
                    helperText={errorSecondRitualTribe ? 'Uniquement des lettres et espaces. Min 2 caractères.' : ''}
                    onChange={(e) => handleSecondRitualTribe(e.target.value)}
                    label="Rituel de Tribu"
                  />
                  <TextField
                    multiline
                    maxRows={4}
                    helperText={
                      errorSecondRitualDesc
                        ? 'Uniquement des lettres, chiffres, doubles points, tirets, virgule et espaces. Min 10 mots.'
                        : 'Coût du Rituel : Description'
                    }
                    onChange={(e) => handleSecondRitualDesc(e.target.value)}
                    label="Description"
                  />
                  <TextField
                    select
                    label="Niveau"
                    onChange={(e) => setSecondRitualTribeLevel(e.target.value)}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {valueLevel.map((value, index) => (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    ))}
                  </TextField>
                  <Button
                    sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 1rem .5rem 0' }}
                    onClick={() =>
                      handleSecondTribe(secondRitualTribeName, secondRitualTribeDesc, secondRitualTribeLevel)
                    }
                  >
                    Validez le Don de Tribu
                  </Button>
                </Stack>
              ) : (
                <div style={{ display: 'none' }} />
              )}
              {/*Rituel 3 et 4 */}
              <TextField
                select
                label="Troisième Rituel"
                onChange={(e) => setThirdRitualName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {RitualList.map((ritual, index) => (
                  <option key={index} value={ritual.name}>
                    {ritual.name}
                  </option>
                ))}
              </TextField>{' '}
              {thirdRitualName === 'Rituel de Tribu' ? (
                <Stack direction="column" spacing={2.5}>
                  <TextField
                    helperText={errorThirdRitualTribe ? 'Uniquement des lettres et espaces. Min 2 caractères.' : ''}
                    onChange={(e) => handleThirdRitualTribe(e.target.value)}
                    label="Rituel de Tribu"
                  />
                  <TextField
                    multiline
                    maxRows={4}
                    helperText={
                      errorThirdRitualDesc
                        ? 'Uniquement des lettres, chiffres, doubles points, tirets, virgule et espaces. Min 10 mots.'
                        : 'Coût du Rituel : Description'
                    }
                    onChange={(e) => handleThirdRitualDesc(e.target.value)}
                    label="Description"
                  />
                  <TextField
                    select
                    label="Niveau"
                    onChange={(e) => setThirdRitualTribeLevel(e.target.value)}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {valueLevel.map((value, index) => (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    ))}
                  </TextField>
                  <Button
                    sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 1rem .5rem 0' }}
                    onClick={() => handleThirdTribe(thirdRitualTribeName, thirdRitualTribeDesc, thirdRitualTribeLevel)}
                  >
                    Validez le Don de Tribu
                  </Button>
                </Stack>
              ) : (
                <div style={{ display: 'none' }} />
              )}
              <TextField
                select
                label="Quatrième Rituel"
                onChange={(e) => setFourRitualName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {RitualList.map((ritual, index) => (
                  <option key={index} value={ritual.name}>
                    {ritual.name}
                  </option>
                ))}
              </TextField>
              {fourRitualName === 'Rituel de Tribu' ? (
                <Stack direction="column" spacing={2.5}>
                  <TextField
                    helperText={errorFourRitualTribe ? 'Uniquement des lettres et espaces. Min 2 caractères.' : ''}
                    onChange={(e) => handleFourRitualTribe(e.target.value)}
                    label="Rituel de Tribu"
                  />
                  <TextField
                    multiline
                    maxRows={4}
                    helperText={
                      errorFourRitualDesc
                        ? 'Uniquement des lettres, chiffres, doubles points, tirets, virgule et espaces. Min 10 mots.'
                        : 'Coût du Rituel : Description'
                    }
                    onChange={(e) => handleFourRitualDesc(e.target.value)}
                    label="Description"
                  />
                  <TextField
                    select
                    label="Niveau"
                    onChange={(e) => setFourRitualTribeLevel(e.target.value)}
                    SelectProps={{
                      native: true,
                    }}
                  >
                    {valueLevel.map((value, index) => (
                      <option key={index} value={value}>
                        {value}
                      </option>
                    ))}
                  </TextField>
                  <Button
                    sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 1rem .5rem 0' }}
                    onClick={() => handleFourTribe(fourRitualTribeName, fourRitualTribeDesc, fourRitualTribeLevel)}
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
            onClick={() => sendRituals(firstRitual, secondRitual, thirdRitual, fourRitual)}
          >
            Sauvegardez
          </Button>
          {saveRituals ? 'Rituels Sauvegardées' : ''}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
