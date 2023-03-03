import Head from 'next/head';
import React from 'react';
import { useRouter } from 'next/router';
import { Button, Card, CardContent, CardHeader, Grow, Slide, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from '../component/Header';
import Image from 'next/image';
import Logo from '../public/Wolf_icon.png';
import axios from 'axios';

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  const [enter, setEnter] = React.useState(false);
  const [ready, setReady] = React.useState(true);
  React.useEffect(() => {
    setEnter(true);
    setTimeout(() => {
      setReady(false);
    }, '3500');
    axios.get('https://garou-api.onrender.com/').then(() => console.log('Server is awaken'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <Head>
        <title>Chara'pocket</title>
        <meta name="description" content="Character sheet in your pocket" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {ready ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              margin: '30vh 0',
            }}
          >
            <Slide direction="right" timeout={400} in={enter} mountOnEnter unmountOnExit>
              <Image src={Logo} alt="Tête de loup" width={matches ? 256 : 512} height={matches ? 256 : 512} />
            </Slide>
            <Grow timeout={1200} in={enter} mountOnEnter unmountOnExit>
              <Typography variant="h4">CHARA'POCKET</Typography>
            </Grow>
          </div>
        ) : (
          <>
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
          </>
        )}

        <div style={{ height: '10vh' }} />
      </main>
    </div>
  );
}
