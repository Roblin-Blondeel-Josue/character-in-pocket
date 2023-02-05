import React from 'react';
import { PropTypes } from 'prop-types';
import { Typography, Card, CardHeader, CardContent } from '@mui/material';

export default function DescriptionCard({ player }) {
  return (
    <Card sx={{ m: '2vh 5vw' }}>
      <CardHeader sx={{ p: '.75rem' }} title="Informations Génerales" />
      <CardContent sx={{ p: '.75rem', paddingTop: '0' }}>
        <Typography variant="body1">
          <b>Joueur :</b> {player.player} | <b>Personnage :</b> {player.character} <br />
          <b>Tribu :</b> {player.tribe} ({player.alliance})<br />
          <b>Camps :</b> {player.clan} <br />
          <b>Nature :</b> {player.nature} | <b>Attitude :</b> {player.attitude} <br />
          <b>Meute :</b> {player.pack}
          <br />
          <b>Auspice :</b> {player.auspice.name} ({player.auspice.moon}) <br />
          <b>Bonus :</b> {player.auspice.bonus}
          <br />
          <b>Gnose Max :</b> {player.gnose} | <b>Volonté :</b> {player.willpower} | <b>Rage Max :</b>{' '}
          {player.auspice.rage}
        </Typography>
      </CardContent>
    </Card>
  );
}
DescriptionCard.propTypes = {
  player: PropTypes.object,
};
