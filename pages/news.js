import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import Layout from '../component/Layout';

export default function Home() {
  return (
    <Layout
      composent={
        <Card sx={{ bgcolor: 'background.default' }} style={{ width: '100%' }}>
          <CardHeader
            sx={{ p: '1rem' }}
            title={
              <Typography align="start" bold fontSize={40}>
                Bienvenue, membre !
              </Typography>
            }
          />
          <CardContent style={{ padding: '1rem' }}>
            <Card sx={{ boxShadow: 3 }}>
              <CardHeader
                sx={{ p: '1rem', width: '100vw' }}
                title={
                  <Typography align="start" bold fontSize={20}>
                    Nouvelles du jour
                  </Typography>
                }
              />
              <CardContent style={{ padding: '1rem' }}>
                <ul> Les orgas de Garou : Les Enfants de l'Apocalypse sont actuellement en pause estivale</ul>
                <ul>De nouvelles règles sont en cours de redaction</ul>
                <ul>- 15 % sur vos Rokeas</ul>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      }
    />
  );
}
