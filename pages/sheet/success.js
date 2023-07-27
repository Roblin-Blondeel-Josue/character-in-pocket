import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material';
import howling from '../../public/howling.png';
import Layout from '../../component/Layout';

export default function Success() {
  const router = useRouter();
  return (
    <Layout
      composent={
        <Card sx={{ p: 0, margin: '2vh 5vw', borderRadius: '5px' }}>
          <CardHeader
            sx={{ p: '.5rem' }}
            title={
              <Typography align="center" variant="h4">
                Félicitation
              </Typography>
            }
          />
          <CardContent style={{ padding: '.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image src={howling} alt="Howling Wolf" width={350} />
            <Typography align="center" variant="body1" sx={{ marginTop: '1rem' }}>
              Vous venez de sauvegarder votre fiche de personnage. Vous pouvez dès à présent la trouver en entrant votre
              code sur la page
            </Typography>
            <Button onClick={() => router.replace('/sheet')}>Voir ma fiche</Button>
            <Typography variant="body2">En cas de soucis, contactez Bellum sur le Discord</Typography>
          </CardContent>
        </Card>
      }
    />
  );
}
