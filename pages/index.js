import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material';
import Header from '../component/Header';

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>Chara'pocket</title>
        <meta name="description" content="Character sheet in your pocket" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Card sx={{ p: 0, margin: '2vh 5vw', borderRadius: '5px' }}>
          <CardHeader
            sx={{ p: '.5rem' }}
            title={<Typography align="center">Veuillez choisir ce que vous désirez faire</Typography>}
          />
          <CardContent style={{ padding: '0 0 .5rem 0', display: 'flex', justifyContent: 'center' }}>
            <Button onClick={() => router.push('/create')}>Créer une fiche</Button>{' '}
            <Button onClick={() => router.push('/sheet')}>Voir ma fiche</Button>
          </CardContent>
        </Card>
        <div style={{ height: '10vh' }} />
      </main>
    </div>
  );
}
