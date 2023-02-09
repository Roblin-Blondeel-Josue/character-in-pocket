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
} from '@mui/material';
import { useAppContext } from './CreateContext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Talents() {
  const { setTalents, saveTalents, setSaveTalents } = useAppContext();
  const valueAttributes = [0, 1, 2, 3, 4, 5, 6];
  const [athletisme, setAthletisme] = React.useState(0);
  const [bagarre, setBagarre] = React.useState(0);
  const [commandement, setCommandement] = React.useState(0);
  const [empathie, setEmpathie] = React.useState(0);
  const [esquive, setEsquive] = React.useState(0);
  const [furtivité, setFurtivité] = React.useState(0);
  const [intimidation, setIntimidation] = React.useState(0);
  const [instinct, setInstinct] = React.useState(0);
  const [investigation, setInvestigation] = React.useState(0);
  const [lancer, setLancer] = React.useState(0);
  const [meditation, setMeditation] = React.useState(0);
  const [subterfuge, setSubterfuge] = React.useState(0);
  const [survie, setSurvie] = React.useState(0);
  const [vigilance, setVigilance] = React.useState(0);
  function sendTalents(
    athletisme,
    bagarre,
    commandement,
    empathie,
    esquive,
    furtivité,
    intimidation,
    instinct,
    investigation,
    lancer,
    meditation,
    subterfuge,
    survie,
    vigilance
  ) {
    setTalents([
      { name: 'Athétisme', level: athletisme },
      { name: 'Bagarre', level: bagarre },
      { name: 'Commandement', level: commandement },
      { name: 'Empathie', level: empathie },
      { name: 'Esquive', level: esquive },
      { name: 'Furtivité', level: furtivité },
      { name: 'Intimidation', level: intimidation },
      { name: 'Instinct', level: instinct },
      { name: 'Investigation', level: investigation },
      { name: 'Lancer d Objet', level: lancer },
      { name: 'Méditation', level: meditation },
      { name: 'Subterfuge', level: subterfuge },
      { name: 'Survie', level: survie },
      { name: 'Vigilance', level: vigilance },
    ]);
    setSaveTalents(true);
  }
  return (
    <Card id="talentsCard" sx={{ m: '2vh 5vw', width: '90vw' }}>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.75rem 1.5rem' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Talents</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '.5rem 1rem', justifyContent: 'center' }}>
          <FormControl fullWidth onSubmit={(e) => e.preventDefault()}>
            <Stack direction="column" spacing={1.5}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={{ m: '0 .5rem 0 0' }}>Athlétisme : </Typography>
                <TextField
                  select
                  onChange={(e) => setAthletisme(e.target.value)}
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
                <Typography sx={{ m: '0 .5rem 0 0' }}>Bagarre : </Typography>
                <TextField
                  select
                  onChange={(e) => setBagarre(e.target.value)}
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
                <Typography sx={{ m: '0 .5rem 0 0' }}>Commandement : </Typography>
                <TextField
                  select
                  onChange={(e) => setCommandement(e.target.value)}
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
                <Typography sx={{ m: '0 .5rem 0 0' }}>Empathie : </Typography>
                <TextField
                  select
                  onChange={(e) => setEmpathie(e.target.value)}
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
                <Typography sx={{ m: '0 .5rem 0 0' }}>Esquive : </Typography>
                <TextField
                  select
                  onChange={(e) => setEsquive(e.target.value)}
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
                <Typography sx={{ m: '0 .5rem 0 0' }}>Furtivité : </Typography>
                <TextField
                  select
                  onChange={(e) => setFurtivité(e.target.value)}
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
                <Typography sx={{ m: '0 .5rem 0 0' }}>Intimidation : </Typography>
                <TextField
                  select
                  onChange={(e) => setIntimidation(e.target.value)}
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
                <Typography sx={{ m: '0 .5rem 0 0' }}>Instinct : </Typography>
                <TextField
                  select
                  onChange={(e) => setInstinct(e.target.value)}
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
                <Typography sx={{ m: '0 .5rem 0 0' }}>Investigation : </Typography>
                <TextField
                  select
                  onChange={(e) => setInvestigation(e.target.value)}
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
                <Typography sx={{ m: '0 .5rem 0 0' }}>Lancer d'Objet : </Typography>
                <TextField
                  select
                  onChange={(e) => setLancer(e.target.value)}
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
                <Typography sx={{ m: '0 .5rem 0 0' }}>Méditation : </Typography>
                <TextField
                  select
                  onChange={(e) => setMeditation(e.target.value)}
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
                <Typography sx={{ m: '0 .5rem 0 0' }}>Subterfuge : </Typography>
                <TextField
                  select
                  onChange={(e) => setSubterfuge(e.target.value)}
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
                <Typography sx={{ m: '0 .5rem 0 0' }}>Survie : </Typography>
                <TextField
                  select
                  onChange={(e) => setSurvie(e.target.value)}
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
                <Typography sx={{ m: '0 .5rem 0 0' }}>Vigilance : </Typography>
                <TextField
                  select
                  onChange={(e) => setVigilance(e.target.value)}
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
              sendTalents(
                athletisme,
                bagarre,
                commandement,
                empathie,
                esquive,
                furtivité,
                intimidation,
                instinct,
                investigation,
                lancer,
                meditation,
                subterfuge,
                survie,
                vigilance
              )
            }
          >
            Sauvegardez
          </Button>
          {saveTalents ? 'Talents Sauvegardés' : ''}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
