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

export default function Legends() {
  const { setLegends, saveLegends, setSaveLegends } = useAppContext();
  const valueAttributes = [0, 1, 2, 3, 4, 5, 6];
  const [alpes, setAlpes] = React.useState(0);
  const [ardennes, setArdennes] = React.useState(0);
  const [bassin, setBassin] = React.useState(0);
  const [bourgogne, setBourgogne] = React.useState(0);
  const [bretagne, setBretagne] = React.useState(0);
  const [ile, setIle] = React.useState(0);
  const [massif, setMassif] = React.useState(0);
  const [nord, setNord] = React.useState(0);
  const [normandie, setNormandie] = React.useState(0);
  const [pays, setPays] = React.useState(0);
  const [picardie, setPicardie] = React.useState(0);
  const [vosges, setVosges] = React.useState(0);
  const [crocs, setCrocs] = React.useState(0);
  const [enfant, setEnfant] = React.useState(0);
  const [fianna, setFianna] = React.useState(0);
  const [fils, setFils] = React.useState(0);
  const [furies, setFuries] = React.useState(0);
  const [gardien, setGardien] = React.useState(0);
  const [marcheur, setMarcheur] = React.useState(0);
  const [rongeur, setRongeur] = React.useState(0);
  const [seigneur, setSeigneur] = React.useState(0);
  const [kaos, setKaos] = React.useState(0);
  const [tisseuse, setTisseuse] = React.useState(0);
  const [ver, setVer] = React.useState(0);
  const [objet, setObjet] = React.useState(0);

  function sendLegends(
    alpes,
    ardennes,
    bassin,
    bourgogne,
    bretagne,
    ile,
    massif,
    nord,
    normandie,
    pays,
    picardie,
    vosges,
    crocs,
    enfant,
    fianna,
    fils,
    furies,
    gardien,
    marcheur,
    rongeur,
    seigneur,
    kaos,
    tisseuse,
    ver,
    objet
  ) {
    setLegends([
      { name: 'Alpes', level: alpes },
      { name: 'Ardennes', level: ardennes },
      { name: 'Bassin Méditerranéen', level: bassin },
      { name: 'Bourgogne', level: bourgogne },
      { name: 'Bretagne', level: bretagne },
      { name: 'Île de France', level: ile },
      { name: 'Massif Central', level: massif },
      { name: 'Nord', level: nord },
      { name: 'Normandie', level: normandie },
      { name: 'Pays de la Loire', level: pays },
      { name: 'Picardie', level: picardie },
      { name: 'Vosges et Forêt Noire', level: vosges },
      { name: 'Crocs d Argent', level: crocs },
      { name: 'Enfants de Gaia', level: enfant },
      { name: 'Fiannas', level: fianna },
      { name: 'Fils de Fenrir', level: fils },
      { name: 'Furies Noires', level: furies },
      { name: 'Gardiens d Anubis', level: gardien },
      { name: 'Marcheurs sur Verre', level: marcheur },
      { name: 'Rongeurs d Os', level: rongeur },
      { name: 'Seigneurs de l Ombre', level: seigneur },
      { name: 'Kaos', level: kaos },
      { name: 'Tisseuse', level: tisseuse },
      { name: 'Ver', level: ver },
      { name: 'Objets Mystiques', level: objet },
    ]);
    setSaveLegends(true);
  }
  return (
    <Card id="#legendsCard" sx={{ m: '2vh 0', borderRadius: '5px', boxShadow: 3 }}>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.75rem 1.5rem' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Contes & Légendes</Typography>
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
                <Typography>Territoires</Typography>
                <Box>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Alpes : </Typography>
                    <TextField
                      select
                      onChange={(e) => setAlpes(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Ardennes : </Typography>
                    <TextField
                      select
                      onChange={(e) => setArdennes(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Bassin Méditerranéen : </Typography>
                    <TextField
                      select
                      onChange={(e) => setBassin(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Bourgogne : </Typography>
                    <TextField
                      select
                      onChange={(e) => setBourgogne(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Bretagne : </Typography>
                    <TextField
                      select
                      onChange={(e) => setBretagne(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Île de France : </Typography>
                    <TextField
                      select
                      onChange={(e) => setIle(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Massif Central : </Typography>
                    <TextField
                      select
                      onChange={(e) => setMassif(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Nord : </Typography>
                    <TextField
                      select
                      onChange={(e) => setNord(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Normandie : </Typography>
                    <TextField
                      select
                      onChange={(e) => setNormandie(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Pays de la Loire : </Typography>
                    <TextField
                      select
                      onChange={(e) => setPays(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Picardie : </Typography>
                    <TextField
                      select
                      onChange={(e) => setPicardie(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Vosges et Forêt Noire : </Typography>
                    <TextField
                      select
                      onChange={(e) => setVosges(e.target.value)}
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
                className="tribu"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid black',
                }}
              >
                <Typography>Tribu</Typography>
                <Box>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Crocs d Argent : </Typography>
                    <TextField
                      select
                      onChange={(e) => setCrocs(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Enfants de Gaia : </Typography>
                    <TextField
                      select
                      onChange={(e) => setEnfant(e.target.value)}
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
                    }}
                  >
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Fiannas : </Typography>
                    <TextField
                      select
                      onChange={(e) => setFianna(e.target.value)}
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
                    }}
                  >
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Fils de Fenrir : </Typography>
                    <TextField
                      select
                      onChange={(e) => setFils(e.target.value)}
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
                    }}
                  >
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Furies Noires : </Typography>
                    <TextField
                      select
                      onChange={(e) => setFuries(e.target.value)}
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
                    }}
                  >
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Gardiens d Anubis : </Typography>
                    <TextField
                      select
                      onChange={(e) => setGardien(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Marcheurs sur Verre : </Typography>
                    <TextField
                      select
                      onChange={(e) => setMarcheur(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Rongeurs d Os : </Typography>
                    <TextField
                      select
                      onChange={(e) => setRongeur(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Seigneurs de l Ombre : </Typography>
                    <TextField
                      select
                      onChange={(e) => setSeigneur(e.target.value)}
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
                className="alliance"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid black',
                }}
              >
                <Typography>Trinité</Typography>
                <Box>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Kaos : </Typography>
                    <TextField
                      select
                      onChange={(e) => setKaos(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Tisseuse : </Typography>
                    <TextField
                      select
                      onChange={(e) => setTisseuse(e.target.value)}
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
                    <Typography sx={{ m: '0 .5rem 0 0' }}>Ver : </Typography>
                    <TextField
                      select
                      onChange={(e) => setVer(e.target.value)}
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
                <Typography sx={{ m: '0 .5rem 0 0' }}>Objets Mystiques : </Typography>
                <TextField
                  select
                  onChange={(e) => setObjet(e.target.value)}
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
            sx={{ bgcolor: 'secondary.main', color: 'background.paper', marginTop: '.5rem' }}
            onClick={() =>
              sendLegends(
                alpes,
                ardennes,
                bassin,
                bourgogne,
                bretagne,
                ile,
                massif,
                nord,
                normandie,
                pays,
                picardie,
                vosges,
                crocs,
                enfant,
                fianna,
                fils,
                furies,
                gardien,
                marcheur,
                rongeur,
                seigneur,
                kaos,
                tisseuse,
                ver,
                objet
              )
            }
          >
            Sauvegardez
          </Button>
          {saveLegends ? 'Savoirs Sauvegardés' : ''}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
