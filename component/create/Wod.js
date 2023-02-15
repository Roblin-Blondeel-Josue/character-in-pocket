import React from 'react';
import {
  FormControl,
  TextField,
  Stack,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Card,
  Box,
} from '@mui/material';
import { useAppContext } from './CreateContext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Wod() {
  const { setWod, saveWod, setSaveWod } = useAppContext();
  const valueAttributes = [0, 1, 2, 3, 4, 5];
  const [ananasi, setAnanasi] = React.useState(0);
  const [bastet, setBastet] = React.useState(0);
  const [corax, setCorax] = React.useState(0);
  const [gurahl, setGurahl] = React.useState(0);
  const [kitsune, setKitsune] = React.useState(0);
  const [nuwisha, setNuwisha] = React.useState(0);
  const [ratkin, setRatkin] = React.useState(0);
  const [vampire, setVampire] = React.useState(0);
  const [chasseur, setChasseur] = React.useState(0);
  const [fantome, setFantome] = React.useState(0);
  const [fee, setFee] = React.useState(0);

  function sendWod(ananasi, bastet, corax, gurahl, kitsune, nuwisha, ratkin, vampire, chasseur, fantome, fee) {
    setWod([
      { name: 'Ananasi', level: ananasi },
      { name: 'Bastet', level: bastet },
      { name: 'Corax', level: corax },
      { name: 'Gurahl', level: gurahl },
      { name: 'Kitsune', level: kitsune },
      { name: 'Nuwisha', level: nuwisha },
      { name: 'Ratkin', level: ratkin },
      { name: 'Vampire', level: vampire },
      { name: 'Chasseur de monstres', level: chasseur },
      { name: 'Fantôme', level: fantome },
      { name: 'Fée', level: fee },
    ]);
    setSaveWod(true);
  }
  return (
    <Card id="wodCard" sx={{ m: '2vh 5vw', width: '90vw' }}>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.75rem 1.5rem' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Monde des Ténèbres</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '.5rem 1rem', justifyContent: 'center' }}>
          <FormControl fullWidth onSubmit={(e) => e.preventDefault()}>
            <Stack direction="column" spacing={1.5}>
              <Box
                className="armes"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid black',
                }}
              >
                <Typography>Ferae</Typography>
                <Box>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Ananasi : </Typography>
                    <TextField
                      select
                      onChange={(e) => setAnanasi(e.target.value)}
                      SelectProps={{
                        native: true,
                      }}
                    >
                      {valueAttributes.map((value, index) => (
                        <option key={index} value={value}>
                          {value}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Bastet : </Typography>
                    <TextField
                      select
                      onChange={(e) => setBastet(e.target.value)}
                      SelectProps={{
                        native: true,
                      }}
                    >
                      {valueAttributes.map((value, index) => (
                        <option key={index} value={value}>
                          {value}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Corax : </Typography>
                    <TextField
                      select
                      onChange={(e) => setCorax(e.target.value)}
                      SelectProps={{
                        native: true,
                      }}
                    >
                      {valueAttributes.map((value, index) => (
                        <option key={index} value={value}>
                          {value}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Gurahl : </Typography>
                    <TextField
                      select
                      onChange={(e) => setGurahl(e.target.value)}
                      SelectProps={{
                        native: true,
                      }}
                    >
                      {valueAttributes.map((value, index) => (
                        <option key={index} value={value}>
                          {value}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Kitsune : </Typography>
                    <TextField
                      select
                      onChange={(e) => setKitsune(e.target.value)}
                      SelectProps={{
                        native: true,
                      }}
                    >
                      {valueAttributes.map((value, index) => (
                        <option key={index} value={value}>
                          {value}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Nuwisha : </Typography>
                    <TextField
                      select
                      onChange={(e) => setNuwisha(e.target.value)}
                      SelectProps={{
                        native: true,
                      }}
                    >
                      {valueAttributes.map((value, index) => (
                        <option key={index} value={value}>
                          {value}
                        </option>
                      ))}
                    </TextField>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Ratkin : </Typography>
                    <TextField
                      select
                      onChange={(e) => setRatkin(e.target.value)}
                      SelectProps={{
                        native: true,
                      }}
                    >
                      {valueAttributes.map((value, index) => (
                        <option key={index} value={value}>
                          {value}
                        </option>
                      ))}
                    </TextField>
                  </div>
                </Box>
              </Box>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ m: '0 .5rem 0 0' }}>Vampire : </Typography>
                <TextField
                  select
                  onChange={(e) => setVampire(e.target.value)}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {valueAttributes.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </TextField>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ m: '0 .5rem 0 0' }}>Chasseur de monstres : </Typography>
                <TextField
                  select
                  onChange={(e) => setChasseur(e.target.value)}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {valueAttributes.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </TextField>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ m: '0 .5rem 0 0' }}>Fantôme : </Typography>
                <TextField
                  select
                  onChange={(e) => setFantome(e.target.value)}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {valueAttributes.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </TextField>
              </div>{' '}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ m: '0 .5rem 0 0' }}>Fée : </Typography>
                <TextField
                  select
                  onChange={(e) => setFee(e.target.value)}
                  SelectProps={{
                    native: true,
                  }}
                >
                  {valueAttributes.map((value, index) => (
                    <option key={index} value={value}>
                      {value}
                    </option>
                  ))}
                </TextField>
              </div>
            </Stack>
          </FormControl>
          <Button
            sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 1rem .5rem 0' }}
            onClick={() =>
              sendWod(ananasi, bastet, corax, gurahl, kitsune, nuwisha, ratkin, vampire, chasseur, fantome, fee)
            }
          >
            Sauvegardez
          </Button>
          {saveWod ? 'Connaissances Sauvegardées' : ''}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
