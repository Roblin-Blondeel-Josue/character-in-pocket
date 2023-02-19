import { Button, Card, CardContent, CardHeader, FormControl, Stack, TextField, Typography } from '@mui/material';
import React from 'react';
import { useAppContext } from './CreateContext';
import SendButton from './SendButton';
import Brightness1Icon from '@mui/icons-material/Brightness1';

export default function Resume() {
  const {
    description,
    auspice,
    attributes,
    talents,
    saveDesc,
    saveAttributes,
    saveTalents,
    code,
    setCode,
    saveSkills,
    skills,
    legends,
    saveLegends,
    politics,
    savePolitics,
    wod,
    saveWod,
    saveAvantages,
    saveHandicaps,
    avantages,
    handicaps,
    avanhandi,
    setAvanhandi,
    dons,
    saveDons,
    language,
    saveLanguage,
  } = useAppContext();
  const [errorCode, setErrorCode] = React.useState(false);
  const [typingCode, setTypingCode] = React.useState(0);
  const [messageCode, setMessageCode] = React.useState(false);
  React.useEffect(() => {
    setAvanhandi(avantages.concat(handicaps));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avantages, handicaps]);
  const validate = { color: 'success.main', margin: '0 1rem' };
  const unvalidate = { color: 'error.main', margin: '0 1rem' };
  function handleCode(value) {
    if ((/[0-9]{4,8}$/.test(value) || value === '') && value != undefined) {
      setErrorCode(false);
      setTypingCode(value);
    } else {
      setTypingCode(0);
      setErrorCode(true);
    }
  }
  function sendCode(value) {
    if (value != undefined && value != '' && errorCode === false) {
      setCode(value);
      setMessageCode(true);
    }
  }
  function sendCodeKey(key, value) {
    if (value != undefined && key == 'Enter' && value != '' && errorCode === false) {
      setCode(value);
      setMessageCode(true);
    }
  }
  return (
    <Card sx={{ m: '2vh 0 0 0', borderRadius: '5px' }}>
      <CardHeader sx={{ p: '.75rem' }} title="Progression" />
      <CardContent sx={{ p: '.75rem', paddingTop: '.5rem' }}>
        <Typography variant="h6">Informations Générales</Typography>
        <Stack direction="row" style={{ color: '#000' }}>
          <Typography sx={{ marginBottom: '.5rem', display: 'flex', alignItems: 'center' }}>
            Description
            <Brightness1Icon sx={saveDesc ? validate : unvalidate} />
          </Typography>
          <Typography sx={{ marginBottom: '.5rem', display: 'flex', alignItems: 'center' }}>
            Attributs
            <Brightness1Icon sx={saveAttributes ? validate : unvalidate} />
          </Typography>
        </Stack>
        <Typography variant="h6">Capacités</Typography>
        <Stack direction="row">
          <Typography sx={{ marginBottom: '.5rem', display: 'flex', alignItems: 'center' }}>
            Talents
            <Brightness1Icon sx={saveTalents ? validate : unvalidate} />
          </Typography>
          <Typography sx={{ marginBottom: '.5rem', display: 'flex', alignItems: 'center' }}>
            Compétences
            <Brightness1Icon sx={saveSkills ? validate : unvalidate} />
          </Typography>
        </Stack>
        <Typography variant="h6">Savoirs</Typography>
        <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
          <Typography sx={{ marginBottom: '.5rem', display: 'flex', alignItems: 'center' }}>
            Contes & Légendes
            <Brightness1Icon sx={saveLegends ? validate : unvalidate} />
          </Typography>
          <Typography sx={{ marginBottom: '.5rem', display: 'flex', alignItems: 'center' }}>
            Politiques
            <Brightness1Icon sx={savePolitics ? validate : unvalidate} />
          </Typography>
          <Typography sx={{ marginBottom: '.5rem', display: 'flex', alignItems: 'center' }}>
            Monde des Ténèbres
            <Brightness1Icon sx={saveWod ? validate : unvalidate} />
          </Typography>
          <Typography sx={{ marginBottom: '.5rem', display: 'flex', alignItems: 'center' }}>
            Langues
            <Brightness1Icon sx={saveLanguage ? validate : unvalidate} />
          </Typography>
        </Stack>
        <Typography variant="h6">Avantages et Handicaps</Typography>
        <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
          <Typography sx={{ marginBottom: '.5rem', display: 'flex', alignItems: 'center' }}>
            Avantages
            <Brightness1Icon sx={saveAvantages ? validate : unvalidate} />
          </Typography>
          <Typography sx={{ marginBottom: '.5rem', display: 'flex', alignItems: 'center' }}>
            Handicaps
            <Brightness1Icon sx={saveHandicaps ? validate : unvalidate} />
          </Typography>
        </Stack>
        <Typography variant="h6">Pouvoirs</Typography>
        <Stack direction="row" sx={{ flexWrap: 'wrap' }}>
          <Typography sx={{ marginBottom: '.5rem', display: 'flex', alignItems: 'center' }}>
            Dons
            <Brightness1Icon sx={saveDons ? validate : unvalidate} />
          </Typography>
        </Stack>
        {messageCode === false ? (
          <div
            style={{
              margin: '1rem 0',
              display: 'flex',
              direction: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <FormControl onSubmit={(event) => event.preventDefault()} onKeyDown={(e) => sendCodeKey(e.key, typingCode)}>
              <TextField
                sx={{ bgcolor: 'background.paper', color: 'primary', borderRadius: '5px', paddingRight: '1rem' }}
                label="Choisissez votre code"
                helperText={errorCode ? 'Uniquement des chiffres.Entre 4 et 8 chiffres' : ''}
                onChange={(e) => handleCode(e.target.value)}
              />
            </FormControl>
            <Button
              sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 2rem', w: '20px' }}
              onClick={() => sendCode(typingCode)}
            >
              Valider
            </Button>
          </div>
        ) : (
          'Code Sauvegardé'
        )}
        <SendButton
          descriptionToPost={description}
          auspiceToPost={auspice}
          attributesToPost={attributes}
          talentsToPost={talents}
          codeToPost={code}
          skillsToPost={skills}
          legendsToPost={legends}
          politicsToPost={politics}
          wodToPost={wod}
          avantagesToPost={avanhandi}
          donsToPost={dons}
          languageToPost={language}
        />
      </CardContent>
    </Card>
  );
}
