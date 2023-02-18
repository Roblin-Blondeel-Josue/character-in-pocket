import { Button, Typography } from '@mui/material';
import { PropTypes } from 'prop-types';
import { useAppContext } from './CreateContext';
import { useRouter } from 'next/router';
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
  wodToPost,
  avantagesToPost,
  donsToPost,
}) {
  const router = useRouter();
  const [error, setError] = React.useState(false);
  const [errorSend, setErrorSend] = React.useState(false);
  const [message, setMessage] = React.useState(false);
  const [refresh, setRefresh] = React.useState(false);
  const {
    saveDesc,
    saveAttributes,
    saveWod,
    saveTalents,
    saveSkills,
    savePolitics,
    saveLegends,
    saveAvantages,
    saveHandicaps,
    saveDons,
  } = useAppContext();
  React.useEffect(() => {
    setTimeout(() => setError(false), '3000');
    setTimeout(() => setErrorSend(false), '3000');
    setTimeout(() => setMessage(false), '3000');
  }, [refresh]);

  function postSheet(description, auspice, attributes, talents, code, skills, legends, politics, wod, avantages, dons) {
    if (
      saveDesc === true &&
      saveAttributes === true &&
      saveTalents === true &&
      saveSkills === true &&
      saveLegends === true &&
      savePolitics === true &&
      saveWod === true &&
      saveAvantages === true &&
      saveHandicaps === true &&
      saveDons === true
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
        avantages: avantages,
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
        wod: wod,
        dons: dons,
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
          setTimeout(() => router.reload(), 3000);
        })
        .catch((error) => {
          console.log(error);
          setErrorSend(true);
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
            politicsToPost,
            wodToPost,
            avantagesToPost,
            donsToPost
          )
        }
      >
        Envoyez la fiche
      </Button>
      <Typography>
        {errorSend ? 'Un soucis est survenu' : error ? 'Il manque des informations' : message ? 'Fiche créee' : ' '}
      </Typography>
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
  wodToPost: PropTypes.array,
  avantagesToPost: PropTypes.array,
  donsToPost: PropTypes.array,
};
