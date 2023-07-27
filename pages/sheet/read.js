import React from 'react';
import { Button, Card, CardContent, CardHeader, FormControl, TextField, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useReadContext } from '../../component/caracterSheet/SheetContext';
import SheetCard from '../../component/caracterSheet/SheetCard';
import axios from 'axios';
import Layout from '../../component/Layout';

export default function Sheet() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const [code, setCode] = React.useState(0);
  const [typingCode, setTypingCode] = React.useState(0);
  const [error, setError] = React.useState(false);
  const { setPlayer } = useReadContext();
  function handleCode(value) {
    if (/[0-9]{1,3}$/.test(value) || value === '') {
      setError(false);
      setTypingCode(value);
    } else {
      setTypingCode(0);
      setError(true);
    }
  }
  function receiveSheet(code) {
    if (code > 0 && code != '') {
      if (typeof window !== 'undefined') {
        const playerData = window.localStorage.getItem(`${code}`);
        if (playerData !== null) {
          setPlayer(JSON.parse(playerData));
          setCode(code);
        } else {
          // La clé n'existe pas dans le local storage
          let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `https://garou-api.onrender.com/sheet/character/${code}`,
            headers: {
              'Content-Type': 'application/json',
            },
          };
          axios(config).then((response) => {
            setPlayer(response.data.result);
            console.log('Fiche reçu');
            const playerData = JSON.stringify(response.data.result);
            if (typeof window !== 'undefined') {
              window.localStorage.setItem(`${code}`, playerData);
            }
          });
        }
      }
    }
  }
  return (
    <Layout
      composent={
        code > 0 ? (
          <SheetCard />
        ) : (
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
              <FormControl
                sx={matches ? { m: '1rem 5vw', display: 'flex' } : { m: '10vh 40vw', width: '20vw' }}
                onSubmit={(event) => event.preventDefault()}
              >
                <TextField
                  sx={{ bgcolor: 'background.paper', color: 'primary', borderRadius: '5px', paddingRight: '1rem' }}
                  label="Indiquez votre code"
                  helperText={error ? 'Uniquement des chiffres' : ''}
                  onChange={(e) => handleCode(e.target.value)}
                />
                <Button
                  sx={{ bgcolor: 'secondary.main', color: 'background.paper', marginTop: '.5rem' }}
                  onClick={() => receiveSheet(typingCode)}
                >
                  Envoyez
                </Button>
              </FormControl>
            </CardContent>
          </Card>
        )
      }
    />
  );
}
Sheet.propTypes = {
  code: PropTypes.number,
};
