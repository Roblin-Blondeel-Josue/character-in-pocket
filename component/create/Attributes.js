import React from 'react';
import {
  Card,
  FormControl,
  TextField,
  Stack,
  Button,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import { useAppContext } from './CreateContext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function AttributesCreate() {
  const { setAttributes, saveAttributes, setSaveAttributes } = useAppContext();
  const valueAttributes = [1, 2, 3, 4, 5];
  const [strength, setStrength] = React.useState(1);
  const [dexterity, setDexterity] = React.useState(1);
  const [stamina, setStamina] = React.useState(1);
  const [apparence, setApparence] = React.useState(1);
  const [manipulation, setManipulation] = React.useState(1);
  const [charisme, setCharisme] = React.useState(1);
  const [intelligence, setIntelligence] = React.useState(1);
  const [perception, setPerception] = React.useState(1);
  const [wit, setWit] = React.useState(1);

  function sendAttributes(
    strength,
    dexterity,
    stamina,
    apparence,
    manipulation,
    charisme,
    intelligence,
    perception,
    wit
  ) {
    setAttributes({
      str: strength,
      dex: dexterity,
      sta: stamina,
      app: apparence,
      man: manipulation,
      cha: charisme,
      int: intelligence,
      per: perception,
      wit: wit,
    });
    setSaveAttributes(true);
  }
  return (
    <Card sx={{ m: '2vh 5vw' }}>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.75rem 1.5rem' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Attributs</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '.5rem', paddingTop: '1rem' }}>
          <FormControl onSubmit={(e) => e.preventDefault()}>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                m: '0 2rem .5rem 2rem',
                borderBottom: '1px solid grey',
              }}
            >
              <Typography variant="h5">Physique</Typography>
              <Stack direction="column" spacing={1.5}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography sx={{ m: '0 .5rem 0 0' }}>Force : </Typography>
                  <TextField
                    select
                    onChange={(e) => setStrength(e.target.value)}
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
                  <Typography sx={{ m: '0 .5rem 0 0' }}>Dexterité : </Typography>
                  <TextField
                    select
                    onChange={(e) => setDexterity(e.target.value)}
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
                  <Typography sx={{ m: '0 .5rem 0 0' }}>Vigueur : </Typography>
                  <TextField
                    select
                    onChange={(e) => setStamina(e.target.value)}
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
            </Stack>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                m: '0 2rem .5rem 2rem',
                borderBottom: '1px solid grey',
              }}
            >
              <Typography variant="h5">Social</Typography>
              <Stack direction="column" spacing={1.5}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography sx={{ m: '0 .5rem 0 0' }}>Apparence : </Typography>
                  <TextField
                    select
                    onChange={(e) => setApparence(e.target.value)}
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
                  <Typography sx={{ m: '0 .5rem 0 0' }}>Manipulation : </Typography>
                  <TextField
                    select
                    onChange={(e) => setManipulation(e.target.value)}
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
                  <Typography sx={{ m: '0 .5rem 0 0' }}>Charisme : </Typography>
                  <TextField
                    select
                    onChange={(e) => setCharisme(e.target.value)}
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
            </Stack>
            <Stack
              direction="row"
              spacing={3}
              sx={{
                alignItems: 'center',
                justifyContent: 'space-between',
                m: '0 2rem .5rem 2rem',
                borderBottom: '1px solid grey',
              }}
            >
              <Typography variant="h5">Mental</Typography>
              <Stack direction="column" spacing={1.5}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Typography sx={{ m: '0 .5rem 0 0' }}>Intelligence : </Typography>
                  <TextField
                    select
                    onChange={(e) => setIntelligence(e.target.value)}
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
                  <Typography sx={{ m: '0 .5rem 0 0' }}>Perception : </Typography>
                  <TextField
                    select
                    onChange={(e) => setPerception(e.target.value)}
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
                  <Typography sx={{ m: '0 .5rem 0 0' }}>Astuce : </Typography>
                  <TextField
                    select
                    onChange={(e) => setWit(e.target.value)}
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
            </Stack>
          </FormControl>
          <Button
            onClick={() =>
              sendAttributes(
                strength,
                dexterity,
                stamina,
                apparence,
                manipulation,
                charisme,
                intelligence,
                perception,
                wit
              )
            }
          >
            Terminé
          </Button>
          {saveAttributes ? 'Informations Sauvgardées' : ''}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
