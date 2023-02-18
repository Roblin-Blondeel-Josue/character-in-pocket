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
import Tribes from '../../data/Tribes.json';
import Auspices from '../../data/Auspices.json';
import getClans from './map/Clans';
import Archetypes from '../../data/Archetypes.json';
import getAuspice from './map/Auspices';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function DescriptionCreate() {
  const { setAuspice, setDescription, saveDesc, setSaveDesc } = useAppContext();
  const alliances = [
    '',
    'Nouvel Impergium',
    'Nouvelle Aube',
    'Conféderation',
    'Chevaliers Verts',
    "Héritiers de L'Hydre",
  ];
  const [player, setPlayer] = React.useState('');
  const [character, setCharacter] = React.useState('');
  const [auspiceMoon, setAuspiceMoon] = React.useState('');
  const [tribe, setTribe] = React.useState('Louveteau');
  const [clan, setClan] = React.useState('Aucun');
  const [pack, setPack] = React.useState('Aucun');
  const [alliance, setAlliance] = React.useState('Aucune');
  const [nature, setNature] = React.useState('Aucune');
  const [attitude, setAttitude] = React.useState('Aucune');
  const [gnose, setGnose] = React.useState(2);
  const [willpower, setWillpower] = React.useState(2);
  const [clansList, setClansList] = React.useState([]);
  React.useEffect(() => {
    setClansList(getClans(tribe));
    setAuspice(getAuspice(auspiceMoon));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tribe, auspiceMoon]);

  function sendDescription(player, character, tribe, clan, pack, alliance, nature, gnose, willpower) {
    if (
      errorCharacter === false &&
      errorPlayer === false &&
      errorGnose === false &&
      errorWillpower === false &&
      errorPack === false
    ) {
      setDescription({
        player: player,
        character: character,
        tribe: tribe,
        clan: clan,
        pack: pack,
        alliance: alliance,
        nature: nature,
        attitude: attitude,
        gnose: gnose,
        willpower: willpower,
      });
      setSaveDesc(true);
    }
  }
  //Errors
  const [errorPlayer, setErrorPlayer] = React.useState(false);
  const [errorCharacter, setErrorCharacter] = React.useState(false);
  const [errorPack, setErrorPack] = React.useState(false);
  const [errorGnose, setErrorGnose] = React.useState(false);
  const [errorWillpower, setErrorWillpower] = React.useState(false);
  //Function change
  function handlePlayer(value) {
    if (/^[a-zA-Z0-9éèàùûêâôëîï-]{1}[a-zA-Z0-9éèàùûêâôëîï-\s]*[a-zA-Z0-9éèàùûêâôëîï]$/.test(value) || value === '') {
      setPlayer(value);
      setErrorPlayer(false);
    } else {
      setPlayer('');
      setErrorPlayer(true);
    }
  }
  function handleCharacter(value) {
    if (/^[a-zA-Zéèàùûêâôëîï-]{1}[a-zA-Zéèàùûêâôëîï-\s]*[a-zA-Zéèàùûêâôëîï]$/.test(value) || value === '') {
      setCharacter(value);
      setErrorCharacter(false);
    } else {
      setCharacter('');
      setErrorCharacter(true);
    }
  }
  function handlePack(value) {
    if (/^[a-zA-Zéèàùûêâôëîï-]{1}[a-zA-Zéèàùûêâôëîï-\s]*[a-zA-Zéèàùûêâôëîï]$/.test(value) || value === '') {
      setPack(value);
      setErrorPack(false);
    } else {
      setPack('');
      setErrorPack(true);
    }
  }
  function handleGnose(value) {
    if (/^[1-9]{1,2}$/.test(value) || value === '') {
      setGnose(value);
      setErrorGnose(false);
    } else {
      setGnose('');
      setErrorGnose(true);
    }
  }
  function handleWillpower(value) {
    if (/^[1-9]{1,2}$/.test(value) || value === '') {
      setWillpower(value);
      setErrorWillpower(false);
    } else {
      setWillpower('');
      setErrorWillpower(true);
    }
  }
  return (
    <Card id="descriptionCard" sx={{ m: '2vh 0', borderRadius: '5px', boxShadow: 3 }}>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.75rem 1.5rem' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Informations Générales</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '.5rem 1rem', justifyContent: 'center' }}>
          <FormControl fullWidth onSubmit={(e) => e.preventDefault()}>
            <Stack direction="column" spacing={2.5}>
              <TextField
                required
                helperText={errorPlayer ? 'Uniquement des lettres, chiffre, espaces et tiret. Min 2 caractères.' : ''}
                onChange={(e) => handlePlayer(e.target.value)}
                label="Votre nom/pseudo"
              />
              <TextField
                required
                helperText={errorCharacter ? 'Uniquement des lettres, espaces et tiret. Min 2 caractères.' : ''}
                onChange={(e) => handleCharacter(e.target.value)}
                label="Votre personnage"
              />
              <TextField
                helperText={errorPack ? 'Uniquement des lettres, espaces et tiret. Min 2 caractères.' : ''}
                onChange={(e) => handlePack(e.target.value)}
                label="Votre Meute"
              />
              <TextField
                select
                label="Tribu"
                onChange={(e) => setTribe(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                helperText="Sélectionnez votre Tribu"
              >
                {Tribes.map((tribe, index) => (
                  <option key={index} value={tribe.name}>
                    {tribe.name}
                  </option>
                ))}
              </TextField>
              {clansList ? (
                <TextField
                  select
                  label="Camp"
                  onChange={(e) => setClan(e.target.value)}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Sélectionnez votre Camp"
                >
                  {clansList.map((clan, index) => (
                    <option key={index} value={clan.name}>
                      {clan.name}
                    </option>
                  ))}
                </TextField>
              ) : (
                <div style={{ display: 'hidden' }} />
              )}
              <TextField
                select
                label="Alliance"
                onChange={(e) => setAlliance(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                helperText={'Sélectionnez votre Alliance'}
              >
                {alliances.map((alliance, index) => (
                  <option key={index} value={alliance}>
                    {alliance}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Auspice"
                onChange={(e) => setAuspiceMoon(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                helperText={'Sélectionnez votre Auspice'}
              >
                {Auspices.map((auspice, index) => (
                  <option key={index} value={auspice.moon}>
                    {auspice.name} ({auspice.moon})
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Nature"
                onChange={(e) => setNature(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                helperText={'Sélectionnez votre Nature'}
              >
                {Archetypes.map((archetype, index) => (
                  <option key={index} value={archetype}>
                    {archetype}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Attitude"
                onChange={(e) => setAttitude(e.target.value)}
                SelectProps={{
                  native: true,
                }}
                helperText={'Sélectionnez votre Attitude'}
              >
                {Archetypes.map((archetype, index) => (
                  <option key={index} value={archetype}>
                    {archetype}
                  </option>
                ))}
              </TextField>
              <TextField
                required
                helperText={errorGnose ? 'Uniquement Chiffre' : ''}
                onChange={(e) => handleGnose(e.target.value)}
                label="Gnose"
              />
              <TextField
                required
                helperText={errorWillpower ? 'Uniquement Chiffre' : ''}
                onChange={(e) => handleWillpower(e.target.value)}
                label="Volonté"
              />
            </Stack>
          </FormControl>
          <Button
            sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 1rem .5rem 0' }}
            onClick={() => sendDescription(player, character, tribe, clan, pack, alliance, nature, gnose, willpower)}
          >
            Sauvegardez
          </Button>
          {saveDesc ? 'Informations Sauvgardées' : ''}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
