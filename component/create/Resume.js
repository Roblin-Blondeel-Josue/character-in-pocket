import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';
import { useAppContext } from './CreateContext';
import SendButton from './SendButton';

export default function Resume() {
  const { description, auspice, attributes, talents, saveDesc, saveAttributes, saveTalents } = useAppContext();
  return (
    <Card sx={{ m: '2vh 5vw' }}>
      <CardHeader sx={{ p: '.75rem' }} title="Progression" />
      <CardContent sx={{ p: '.75rem', paddingTop: '1rem' }}>
        <Typography sx={{ marginBottom: '.5rem' }}>
          <b>Informations Générales</b>: {saveDesc ? 'Fait' : 'A faire'}
          <br />
          <b>Attributs</b>: {saveDesc ? 'Fait' : 'A faire'}
          <br />
          <b>Talents</b>: {saveDesc ? 'Fait' : 'A faire'}
          <br />
        </Typography>
        <SendButton
          descriptionToPost={description}
          auspiceToPost={auspice}
          attributesToPost={attributes}
          talentsToPost={talents}
        />
      </CardContent>
    </Card>
  );
}
