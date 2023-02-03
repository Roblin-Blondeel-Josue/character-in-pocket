import { Button, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useAppContext } from './CreateContext';

import axios from 'axios';
import React from 'react';

export default function SendButton({ descriptionToPost, auspiceToPost, attributesToPost, talentsToPost }) {
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  const [refresh, setRefresh] = React.useState(false);
  const { saveDesc, saveAttributes, saveTalents } = useAppContext();
  React.useEffect(() => {
    setTimeout(() => setError(false), '3000');
    setTimeout(() => setMessage(false), '3000');
  }, [refresh]);

  function postSheet(description, auspice, attributes, talents) {
    if (saveDesc === true && saveAttributes === true && saveTalents === true) {
      let data = JSON.stringify({
        code: 2,
        player: description.player,
        character: description.character,
        tribe: description.tribe,
        clan: description.clan,
        pack: description.pack,
        alliance: description.alliance,
        nature: description.nature,
        attitude: description.attitude,
        gnose: description.gnose,
        willpower: description.willpower,
        auspice: {
          name: auspice.name,
          moon: auspice.moon,
          bonus: auspice.rage,
          rage: auspice.rage,
        },
        attributes: attributes,
        auspicePower: [
          {
            name: null,
            level: 0,
            description: null,
          },
          {
            name: null,
            level: 0,
            description: null,
          },
        ],
        rituels: [
          {
            name: null,
            level: 0,
            description: null,
          },
          {
            name: null,
            level: 0,
            description: null,
          },
          {
            name: null,
            level: 0,
            description: null,
          },
          {
            name: null,
            level: 0,
            description: null,
          },
          {
            name: null,
            level: 0,
            description: null,
          },
          {
            name: null,
            level: 0,
            description: null,
          },
          {
            name: null,
            level: 0,
            description: null,
          },
        ],
        cry: [
          {
            name: null,
            level: 0,
            description: null,
          },
          {
            name: null,
            level: 0,
            description: null,
          },
          {
            name: null,
            level: 0,
            description: null,
          },
          {
            name: null,
            level: 0,
            description: null,
          },
          {
            name: null,
            level: 0,
            description: null,
          },
          {
            name: null,
            level: 0,
            description: null,
          },
        ],
        talents: talents,
        skills: [
          { name: 'Animaux', level: 0 },
          { name: 'Arme de Poing', level: 0 },
          { name: 'Fusil de précision', level: 0 },
          { name: 'Fusil automatique', level: 0 },
          { name: 'Fusil à pompe', level: 0 },
          { name: 'Forge', level: 0 },
          { name: 'Bois', level: 0 },
          { name: 'Maçonnerie', level: 0 },
          { name: 'Joaillerie', level: 0 },
          { name: 'Fab. arme à feu', level: 0 },
          { name: 'Moto', level: 0 },
          { name: 'Voiture/Camion', level: 0 },
          { name: 'Bateau', level: 0 },
          { name: 'Hélicoptère', level: 0 },
          { name: 'Avion', level: 0 },
          { name: 'Démolition', level: 0 },
          { name: 'Erudition', level: 0 },
          { name: 'Informatique', level: 0 },
          { name: 'Médecine', level: 0 },
          { name: 'Dague', level: 3 },
          { name: 'Epée', level: 0 },
          { name: 'Hache', level: 0 },
          { name: 'Marteau', level: 0 },
          { name: 'Lance', level: 0 },
          { name: 'Arme improvisée', level: 0 },
          { name: 'Contes', level: 0 },
          { name: 'Chant', level: 0 },
          { name: 'Danse', level: 0 },
          { name: 'Musique', level: 0 },
          { name: 'Rituel', level: 0 },
          { name: 'Technologie', level: 0 },
          { name: "Tir à l'arc", level: 0 },
          { name: 'Javelot', level: 0 },
          { name: 'Arbalète', level: 0 },
        ],
        politics: [
          { name: 'Alpes', level: 0 },
          { name: 'Ardennes', level: 0 },
          { name: 'Bassin Méditerranéen', level: 0 },
          { name: 'Bourgogne', level: 0 },
          { name: 'Bretagnes', level: 0 },
          { name: 'Ile-de-France', level: 0 },
          { name: 'Massif Central', level: 0 },
          { name: 'Nord', level: 0 },
          { name: 'Normandie', level: 0 },
          { name: 'Pays de la Loire', level: 0 },
          { name: 'Picardie', level: 0 },
          { name: 'Vosges et Forêt Noire', level: 0 },
          { name: "Crocs d'Argent", level: 0 },
          { name: 'Enfants de Gaea', level: 0 },
          { name: 'Fianna', level: 0 },
          { name: 'Fils de Fenrir', level: 0 },
          { name: 'Furies Noires', level: 0 },
          { name: "Gardiens d'Anubis", level: 0 },
          { name: 'Marcheurs sur Verre', level: 0 },
          { name: "Rongeurs d'Os", level: 0 },
          { name: "Seigneurs de l'Ombre", level: 0 },
          { name: 'Nouvelle Imperium', level: 0 },
          { name: 'Conféderation', level: 0 },
          { name: 'Nouvelle Aube', level: 0 },
          { name: 'Chevaliers Verts', level: 0 },
        ],
        legends: [
          { name: 'Alpes', level: 0 },
          { name: 'Ardennes', level: 0 },
          { name: 'Bassin Méditerranéen', level: 0 },
          { name: 'Bourgogne', level: 0 },
          { name: 'Bretagnes', level: 0 },
          { name: 'Ile-de-France', level: 0 },
          { name: 'Massif Central', level: 0 },
          { name: 'Nord', level: 0 },
          { name: 'Normandie', level: 0 },
          { name: 'Pays de la Loire', level: 0 },
          { name: 'Picardie', level: 0 },
          { name: 'Vosges et Forêt Noire', level: 0 },
          { name: "Crocs d'Argent", level: 0 },
          { name: 'Enfants de Gaea', level: 0 },
          { name: 'Fianna', level: 0 },
          { name: 'Fils de Fenrir', level: 0 },
          { name: 'Furies Noires', level: 0 },
          { name: "Gardiens d'Anubis", level: 0 },
          { name: 'Marcheurs sur Verre', level: 0 },
          { name: "Rongeurs d'Os", level: 0 },
          { name: "Seigneurs de l'Ombre", level: 0 },
          { name: 'Tisseuse', level: 0 },
          { name: 'Kaos', level: 0 },
          { name: 'Ver', level: 0 },
          { name: 'Objets Mystiques', level: 0 },
        ],
        wod: [
          { name: 'Ananasi', level: 0 },
          { name: 'Bastet', level: 0 },
          { name: 'Corax', level: 0 },
          { name: 'Gurahl', level: 0 },
          { name: 'Kitsune', level: 0 },
          { name: 'Nuwisha', level: 0 },
          { name: 'Ratkin', level: 0 },
          { name: 'Vampires', level: 0 },
          { name: 'Chasseurs', level: 0 },
          { name: 'Mages', level: 0 },
          { name: 'Fantômes', level: 0 },
          { name: 'Fée', level: 0 },
        ],
        dons: [
          {
            name: null,
            level: 0,
            description: null,
          },
          {
            name: null,
            level: 0,
            description: null,
          },
        ],
        influences: [],
      });
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://garou-api.onrender.com/sheet/create',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': 'https://character-in-pocket.vercel.app/',
        },
        data: data,
      };
      axios(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setMessage(true);
          setRefresh(!refresh);
        })
        .catch((error) => {
          console.log(error);
          setError(false);
          setRefresh(!refresh);
        });
    } else {
      setError(true);
      setRefresh(!refresh);
    }
  }

  return (
    <div>
      <Button
        sx={{ bgcolor: 'primary.main', color: 'background.paper' }}
        onClick={() => postSheet(descriptionToPost, auspiceToPost, attributesToPost, talentsToPost)}
      >
        Envoyez la fiche
      </Button>
      <Typography>{error ? 'Un soucis est survenu' : message ? 'Fiche créee' : ' '}</Typography>
    </div>
  );
}
SendButton.propTypes = {
  descriptionToPost: PropTypes.object,
  auspiceToPost: PropTypes.object,
  attributesToPost: PropTypes.object,
  talentsToPost: PropTypes.array,
};
