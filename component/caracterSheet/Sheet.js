import React from 'react';
import { Card, CardHeader, CardContent, Typography } from '@mui/material';
import FakeData from '../statsData/FakeSheet.json';
import Attributes from './Attributes';
import Avantages from './Avantages';
import Skills from './Skills';
import Knowledges from './Knowledges';

export default function Sheet() {
  const player = FakeData[0];
  return (
    <div>
      <Card sx={{ m: '2vh 5vw' }}>
        <CardHeader sx={{ p: '.75rem' }} title="Informations Génerales" />
        <CardContent sx={{ p: '.75rem', paddingTop: '0' }}>
          <Typography variant="body1">
            <b>Joueur :</b> {player.player} | <b>Personnage :</b> {player.character} <br />
            <b> Tribu :</b> {player.tribe} ({player.alliance})<br />
            <b> Clan :</b> {player.clan} <br />
            <b> Meute :</b> {player.pack}
            <br />
            <b> Auspice :</b> {player.auspice.name} ({player.auspice.moon}) <br />
            <b>Gnose Max :</b> {player.gnose} | <b>Volonté :</b> {player.willpower} | <b>Rage Max :</b>{' '}
            {player.auspice.rage}
          </Typography>
        </CardContent>
      </Card>
      <Attributes stats={player.attributes} />
      <Avantages bonus={player.avantages} />
      <Skills talents={player.talents} skills={player.skills} />
      <Knowledges politics={player.politics} legends={player.legends} wod={player.wod} />
      <div style={{ height: '10vh' }} />
    </div>
  );
}
