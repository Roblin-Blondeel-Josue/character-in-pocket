import Head from 'next/head';
import React from 'react';
import { Card, CardContent, CardHeader, Grow, Slide, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from 'next/image';
import Logo from '../public/Wolf_icon.png';
import axios from 'axios';
import Layout from '../component/Layout';

export default function Home() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [enter, setEnter] = React.useState(false);
  const [ready, setReady] = React.useState(false);
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
                  <CardContent style={{ padding: '1rem' }}>bob</CardContent>
                </Card>
              }
            />
          </>
        )}

        <div style={{ height: '10vh' }} />
      </main>
    </div>
  );
}
