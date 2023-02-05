import { Button, Card, CardContent, CardHeader, FormControl, TextField, Typography } from '@mui/material';
import React from 'react';
import { useAppContext } from './CreateContext';
import SendButton from './SendButton';

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
  } = useAppContext();
  const [errorCode, setErrorCode] = React.useState(false);
  const [typingCode, setTypingCode] = React.useState(0);

  function handleCode(value) {
    if (/[0-9]{1,3}$/.test(value) || value === '') {
      setErrorCode(false);
      setTypingCode(value);
    } else {
      setTypingCode(0);
      setErrorCode(true);
    }
  }
  function sendCodeKey(key, value) {
    if (key == 'Enter' && value !== '') {
      setCode(value);
    }
  }
  return (
    <Card sx={{ m: '2vh 5vw' }}>
      <CardHeader sx={{ p: '.75rem' }} title="Progression" />
      <CardContent sx={{ p: '.75rem', paddingTop: '1rem' }}>
        <Typography sx={{ marginBottom: '.5rem' }}>
          <b>Informations Générales</b>: {saveDesc ? 'Fait' : 'A faire'}
          <br />
          <b>Attributs</b>: {saveAttributes ? 'Fait' : 'A faire'}
          <br />
          <b>Talents</b>: {saveTalents ? 'Fait' : 'A faire'}
          <br />
          <b>Compétences</b>: {saveSkills ? 'Fait' : 'A faire'}
          <br />
        </Typography>
        <div style={{ margin: '1rem 0', display: 'flex', direction: 'row', alignItems: 'center' }}>
          <FormControl onSubmit={(event) => event.preventDefault()} onKeyDown={(e) => sendCodeKey(e.key, typingCode)}>
            <TextField
              sx={{ bgcolor: 'background.paper', color: 'primary', borderRadius: '5px', paddingRight: '1rem' }}
              label="Choisissez votre code"
              helperText={errorCode ? 'Uniquement des chiffres.Entre 4 et 8 chiffres' : ''}
              onChange={(e) => handleCode(e.target.value)}
            />
          </FormControl>
          <Button
            sx={{ bgcolor: 'secondary.main', color: 'background.paper', marginTop: '.5rem', w: '20px' }}
            onClick={() => setCode(typingCode)}
          >
            Validé
          </Button>
        </div>
        <SendButton
          descriptionToPost={description}
          auspiceToPost={auspice}
          attributesToPost={attributes}
          talentsToPost={talents}
          codeToPost={code}
          skillsToPost={skills}
        />
      </CardContent>
    </Card>
  );
}
