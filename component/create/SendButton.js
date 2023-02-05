import { Button, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useAppContext } from './CreateContext';

import axios from 'axios';
import React from 'react';

export default function SendButton({
  descriptionToPost,
  auspiceToPost,
  attributesToPost,
  talentsToPost,
  codeToPost,
  skillsToPost,
  legendsToPost,
  politicsToPost,
}) {
  const [error, setError] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  const [refresh, setRefresh] = React.useState(false);
  const { saveDesc, saveAttributes, saveTalents, saveSkills, savePolitics, saveLegends } = useAppContext();
  React.useEffect(() => {
    setTimeout(() => setError(false), '3000');
    setTimeout(() => setMessage(false), '3000');
  }, [refresh]);

  function postSheet(description, auspice, attributes, talents, code, skills, legends, politics) {
    if (
      saveDesc === true &&
      saveAttributes === true &&
      saveTalents === true &&
      saveSkills === true &&
      saveLegends === true &&
      savePolitics === true
    ) {
      let data = JSON.stringify({
        code: code,
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
          bonus: auspice.bonus,
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
        skills: skills,
        politics: politics,
        legends: legends,
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
          setError(true);
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
        onClick={() =>
          postSheet(
            descriptionToPost,
            auspiceToPost,
            attributesToPost,
            talentsToPost,
            codeToPost,
            skillsToPost,
            legendsToPost,
            politicsToPost
          )
        }
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
  skillsToPost: PropTypes.array,
  politicsToPost: PropTypes.array,
  legendsToPost: PropTypes.array,
  codeToPost: PropTypes.string,
};
