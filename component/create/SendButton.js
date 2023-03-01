import { Alert, Button } from '@mui/material';
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
  languageToPost,
  cryToPost,
  ritualsToPost,
  bonusToPost,
  bonusRageToPost,
}) {
  const router = useRouter();
  const [error, setError] = React.useState(false);
  const [errorSend, setErrorSend] = React.useState(false);
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
    saveLanguage,
    saveRituals,
    saveBonus,
  } = useAppContext();
  React.useEffect(() => {
    setTimeout(() => setError(false), '5000');
    setTimeout(() => setErrorSend(false), '5000');
  }, [refresh]);

  function postSheet(
    description,
    auspice,
    attributes,
    talents,
    code,
    skills,
    legends,
    politics,
    wod,
    avantages,
    dons,
    language,
    cry,
    rituals,
    bonusAuspice,
    bonusRage
  ) {
    if (
      saveDesc === true &&
      saveAttributes === true &&
      saveTalents === true &&
      saveSkills === true &&
      saveLegends === true &&
      savePolitics === true &&
      saveWod === true &&
      saveLanguage === true &&
      saveAvantages === true &&
      saveHandicaps === true &&
      saveDons === true &&
      saveRituals === true &&
      saveBonus === true
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
          rage: auspice.rage + bonusRage,
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
        rituals: rituals,
        cry: cry,
        talents: talents,
        skills: skills,
        politics: politics,
        legends: legends,
        wod: wod,
        dons: dons,
        language: language,
        bonusAuspice: bonusAuspice,
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
          router.replace('/success');
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
        sx={{ bgcolor: 'primary.main', color: 'background.paper', marginBottom: '.5rem' }}
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
            donsToPost,
            languageToPost,
            cryToPost,
            ritualsToPost,
            bonusToPost,
            bonusRageToPost
          )
        }
      >
        Envoyez la fiche
      </Button>
      {errorSend ? (
        <Alert variant="filled" severity="error">
          Un soucis est survenu !{' '}
        </Alert>
      ) : error ? (
        <Alert variant="filled" severity="warning">
          Il manque des informations
        </Alert>
      ) : (
        ' '
      )}
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
  languageToPost: PropTypes.array,
  cryToPost: PropTypes.array,
  ritualsToPost: PropTypes.array,
  bonusToPost: PropTypes.object,
  bonusRageToPost: PropTypes.integer,
};
