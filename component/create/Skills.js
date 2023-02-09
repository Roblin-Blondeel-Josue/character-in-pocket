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

export default function Skills() {
  const { setSkills, saveSkills, setSaveSkills } = useAppContext();
  const valueAttributes = [0, 1, 2, 3, 4, 5, 6];
  const [animaux, setAnimaux] = React.useState(0);
  const [adpoing, setAdpoing] = React.useState(0);
  const [fdPrecision, setFdPrecision] = React.useState(0);
  const [fAuto, setFAuto] = React.useState(0);
  const [fPompe, setFPompe] = React.useState(0);
  const [forge, setForge] = React.useState(0);
  const [bois, setBois] = React.useState(0);
  const [maconnerie, setMaconnerie] = React.useState(0);
  const [joaillerie, setJoaillerie] = React.useState(0);
  const [fabAF, setFabAF] = React.useState(0);
  const [moto, setMoto] = React.useState(0);
  const [camion, setCamion] = React.useState(0);
  const [helico, setHelico] = React.useState(0);
  const [avion, setAvion] = React.useState(0);
  const [demolition, setDemolition] = React.useState(0);
  const [erudition, setErudition] = React.useState(0);
  const [informatique, setInformatique] = React.useState(0);
  const [medecine, setMedecine] = React.useState(0);
  const [dague, setDague] = React.useState(0);
  const [hache, setHache] = React.useState(0);
  const [epee, setEpee] = React.useState(0);
  const [marteau, setMarteau] = React.useState(0);
  const [lance, setLance] = React.useState(0);
  const [impro, setImpro] = React.useState(0);
  const [conte, setConte] = React.useState(0);
  const [chant, setChant] = React.useState(0);
  const [danse, setDanse] = React.useState(0);
  const [musique, setMusique] = React.useState(0);
  const [rituel, setRituel] = React.useState(0);
  const [technologie, setTechnologie] = React.useState(0);
  const [arc, setArc] = React.useState(0);
  const [javelot, setJavelot] = React.useState(0);
  const [arbalete, setArbalete] = React.useState(0);

  function sendSkills(
    animaux,
    adpoing,
    fdPrecision,
    fAuto,
    fPompe,
    forge,
    bois,
    maconnerie,
    joaillerie,
    fabAF,
    moto,
    camion,
    helico,
    avion,
    demolition,
    erudition,
    informatique,
    medecine,
    dague,
    hache,
    epee,
    marteau,
    lance,
    impro,
    conte,
    chant,
    danse,
    musique,
    rituel,
    technologie,
    arc,
    javelot,
    arbalete
  ) {
    setSkills([
      { name: 'Animaux', level: animaux },
      { name: 'Arme de Poing', level: adpoing },
      { name: 'Fusil de Précision', level: fdPrecision },
      { name: 'Fusil Automatique', level: fAuto },
      { name: 'Fusil à Pompe', level: fPompe },
      { name: 'Forge', level: forge },
      { name: 'Travail du bois', level: bois },
      { name: 'Maçonnerie', level: maconnerie },
      { name: 'Joaillerie', level: joaillerie },
      { name: 'Fab. d Arme à feu', level: fabAF },
      { name: 'Moto', level: moto },
      { name: 'Camion', level: camion },
      { name: 'Hélicoptère', level: helico },
      { name: 'Avion', level: avion },
      { name: 'Démolition', level: demolition },
      { name: 'Erudition', level: erudition },
      { name: 'Informatique', level: informatique },
      { name: 'Médecine', level: medecine },
      { name: 'Dague', level: dague },
      { name: 'Hache', level: hache },
      { name: 'Epée', level: epee },
      { name: 'Marteau', level: marteau },
      { name: 'Lance', level: lance },
      { name: 'Arme improvisée', level: impro },
      { name: 'Contes', level: conte },
      { name: 'Chants', level: chant },
      { name: 'Danse', level: danse },
      { name: 'Musique', level: musique },
      { name: 'Rituel', level: rituel },
      { name: 'Technologie', level: technologie },
      { name: 'Tir à l Arc', level: arc },
      { name: 'Javelot', level: javelot },
      { name: 'Arbalète', level: arbalete },
    ]);
    setSaveSkills(true);
  }
  return (
    <Card id="skilsCard" sx={{ m: '2vh 5vw', width: '90vw' }}>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.75rem 1.5rem' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Compétences</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '.5rem 1rem', justifyContent: 'center' }}>
          <FormControl fullWidth onSubmit={(e) => e.preventDefault()}>
            <Stack direction="column" spacing={1.5}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid black',
                }}
              >
                <Typography sx={{ m: '0 .5rem 0 0' }}>Animaux : </Typography>
                <TextField
                  select
                  onChange={(e) => setAnimaux(e.target.value)}
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
              <Box
                className="armes"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid black',
                }}
              >
                <Typography>Armes à feu</Typography>
                <Box>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Arme de Poing : </Typography>
                    <TextField
                      select
                      onChange={(e) => setAdpoing(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Fusil de Précision : </Typography>
                    <TextField
                      select
                      onChange={(e) => setFdPrecision(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Fusil Automatique : </Typography>
                    <TextField
                      select
                      onChange={(e) => setFAuto(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Fusil à Pompe : </Typography>
                    <TextField
                      select
                      onChange={(e) => setFPompe(e.target.value)}
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
              <Box
                className="Artisanat"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid black',
                }}
              >
                <Typography>Artisanat</Typography>
                <Box>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Forge : </Typography>
                    <TextField
                      select
                      onChange={(e) => setForge(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Travail du bois : </Typography>
                    <TextField
                      select
                      onChange={(e) => setBois(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Maçonnerie : </Typography>
                    <TextField
                      select
                      onChange={(e) => setMaconnerie(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Joaillerie : </Typography>
                    <TextField
                      select
                      onChange={(e) => setJoaillerie(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Fab. d'Arme à feu : </Typography>
                    <TextField
                      select
                      onChange={(e) => setFabAF(e.target.value)}
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
                </Box>
              </Box>
              <Box
                className="conduite"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid black',
                }}
              >
                <Typography>Conduite</Typography>
                <Box>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Moto : </Typography>
                    <TextField
                      select
                      onChange={(e) => setMoto(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Voiture/Camion : </Typography>
                    <TextField
                      select
                      onChange={(e) => setCamion(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Hélicoptère : </Typography>
                    <TextField
                      select
                      onChange={(e) => setHelico(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Avion : </Typography>
                    <TextField
                      select
                      onChange={(e) => setAvion(e.target.value)}
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
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid black',
                }}
              >
                <Typography sx={{ m: '0 .5rem 0 0' }}>Démolition : </Typography>
                <TextField
                  select
                  onChange={(e) => setDemolition(e.target.value)}
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
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid black',
                }}
              >
                <Typography sx={{ m: '0 .5rem 0 0' }}>Erudition : </Typography>
                <TextField
                  select
                  onChange={(e) => setErudition(e.target.value)}
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
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid black',
                }}
              >
                <Typography sx={{ m: '0 .5rem 0 0' }}>Informatique : </Typography>
                <TextField
                  select
                  onChange={(e) => setInformatique(e.target.value)}
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
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid black',
                }}
              >
                <Typography sx={{ m: '0 .5rem 0 0' }}>Médecine : </Typography>
                <TextField
                  select
                  onChange={(e) => setMedecine(e.target.value)}
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
              <Box
                className="Armes de mélées"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid black',
                }}
              >
                <Typography>Armes de mélées</Typography>
                <Box>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Dague : </Typography>
                    <TextField
                      select
                      onChange={(e) => setDague(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Hache : </Typography>
                    <TextField
                      select
                      onChange={(e) => setHache(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Epée : </Typography>
                    <TextField
                      select
                      onChange={(e) => setEpee(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Marteau : </Typography>
                    <TextField
                      select
                      onChange={(e) => setMarteau(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Lance : </Typography>
                    <TextField
                      select
                      onChange={(e) => setLance(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Arme improvisée : </Typography>
                    <TextField
                      select
                      onChange={(e) => setImpro(e.target.value)}
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
              <Box
                className="Représentation"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid black',
                }}
              >
                <Typography>Représentation</Typography>
                <Box>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Contes : </Typography>
                    <TextField
                      select
                      onChange={(e) => setConte(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Chants : </Typography>
                    <TextField
                      select
                      onChange={(e) => setChant(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Danse : </Typography>
                    <TextField
                      select
                      onChange={(e) => setDanse(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Musique : </Typography>
                    <TextField
                      select
                      onChange={(e) => setMusique(e.target.value)}
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
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid black',
                }}
              >
                <Typography sx={{ m: '0 .5rem 0 0' }}>Rituel : </Typography>
                <TextField
                  select
                  onChange={(e) => setRituel(e.target.value)}
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
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid black',
                }}
              >
                <Typography sx={{ m: '0 .5rem 0 0' }}>Technologie : </Typography>
                <TextField
                  select
                  onChange={(e) => setTechnologie(e.target.value)}
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
              <Box
                className="ancienne"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid black',
                }}
              >
                <Typography>Armes Anciennes</Typography>
                <Box>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Tir à l Arc : </Typography>
                    <TextField
                      select
                      onChange={(e) => setArc(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Javelot : </Typography>
                    <TextField
                      select
                      onChange={(e) => setJavelot(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Arbalète : </Typography>
                    <TextField
                      select
                      onChange={(e) => setArbalete(e.target.value)}
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
            </Stack>
          </FormControl>
          <Button
            sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 1rem .5rem 0' }}
            onClick={() =>
              sendSkills(
                animaux,
                adpoing,
                fdPrecision,
                fAuto,
                fPompe,
                forge,
                bois,
                maconnerie,
                joaillerie,
                fabAF,
                moto,
                camion,
                helico,
                avion,
                demolition,
                erudition,
                informatique,
                medecine,
                dague,
                hache,
                epee,
                marteau,
                lance,
                impro,
                conte,
                chant,
                danse,
                musique,
                rituel,
                technologie,
                arc,
                javelot,
                arbalete
              )
            }
          >
            Sauvegardez
          </Button>
          {saveSkills ? 'Compétences Sauvegardées' : ''}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
