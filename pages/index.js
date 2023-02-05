import Head from 'next/head';
import React from 'react';
import { Button, Card, CardContent, CardHeader, Typography } from '@mui/material';
import Create from '../component/Create';
import Header from '../component/Header';
import Sheet from '../component/Sheet';

export default function Home() {
  const [selectSheet, setSelectSheet] = React.useState(false);
  const [selectCreate, setSelectCreate] = React.useState(true);
  function handleSheet() {
    setSelectCreate(false);
    setSelectSheet(true);
  }
  function handleCreate() {
    setSelectCreate(true);
    setSelectSheet(false);
  }
  return (
    <div>
      <Head>
        <title>Chara'pocket</title>
        <meta name="description" content="Character sheet in your pocket" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        {selectSheet === true || selectCreate === true ? (
          <div>
            <Button onClick={() => handleCreate()}>Créer une fiche</Button>{' '}
            <Button onClick={() => handleSheet()}>Voir ma fiche</Button>
          </div>
        ) : (
          ''
        )}
        {selectSheet ? (
          <Sheet />
        ) : selectCreate ? (
          <Create />
        ) : (
          <Card sx={{ p: 0, margin: '2vh 5vw' }}>
            <CardHeader
              sx={{ p: '.5rem' }}
              title={<Typography align="center">Veuillez choisir ce que vous désirez faire</Typography>}
            />
            <CardContent style={{ padding: '0 0 .5rem 0', display: 'flex', justifyContent: 'center' }}>
              <Button onClick={() => handleCreate()}>Créer une fiche</Button>{' '}
              <Button onClick={() => handleSheet()}>Voir ma fiche</Button>
            </CardContent>
          </Card>
        )}
        <div style={{ height: '10vh' }} />
      </main>
    </div>
  );
}
