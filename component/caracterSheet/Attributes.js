import React from 'react';
import { PropTypes } from 'prop-types';
import { Stack, Button, Card, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import bonus from '../statsData/BonusAtt.json';

function calculPdV(sta) {
  const stamina = [4, 5, 7, 9, 12, 15, 17, 20, 25, 30];
  const vie = stamina[sta - 1];
  return vie;
}
export default function Attributes({ stats }) {
  const attributes = stats;
  const [typeDeg, setTypeDeg] = React.useState('Contendants');
  const [finalStr, setFinalStr] = React.useState(attributes.str);
  const [finalDex, setFinalDex] = React.useState(attributes.dex);
  const [finalSta, setFinalSta] = React.useState(attributes.sta);
  const [finalApp, setFinalApp] = React.useState(attributes.app);
  const [finalMan, setFinalMan] = React.useState(attributes.man);
  const [homid, setHomid] = React.useState(false);
  const [glabro, setGlabro] = React.useState(false);
  const [crinos, setCrinos] = React.useState(false);
  function changeCrinos(str, dex, sta) {
    setTypeDeg('Létaux');
    setFinalStr(str + 4);
    setFinalDex(dex + 1);
    setFinalSta(sta + 3);
    setFinalApp(1);
    setFinalMan(0);
    setCrinos(true);
    setHomid(false);
    setGlabro(false);
  }
  function changeGlabro(str, sta, app, man) {
    setTypeDeg('Létaux');
    setFinalStr(str + 2);
    setFinalSta(sta + 1);
    setFinalApp(app - 1);
    if (man === 1) {
      setFinalMan(0);
    } else {
      setFinalMan(man - 2);
    }
    setCrinos(false);
    setHomid(false);
    setGlabro(true);
  }
  function changeHomid() {
    setTypeDeg('');
    setFinalStr(attributes.str);
    setFinalDex(attributes.dex);
    setFinalSta(attributes.sta);
    setFinalApp(attributes.app);
    setFinalMan(attributes.man);
    setCrinos(false);
    setHomid(true);
    setGlabro(false);
  }

  const finalAttribute = {
    str: finalStr,
    dex: finalDex,
    sta: finalSta,
    app: finalApp,
    man: finalMan,
    cha: attributes.cha,
    int: attributes.int,
    per: attributes.per,
    wit: attributes.wit,
  };
  const select = { bgcolor: 'primary.main', color: 'text.secondary' };
  const unSelect = { border: '2px solid #181D31' };
  return (
    <Card sx={{ m: '2vh 5vw' }}>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.5rem 1rem 0 1rem' }}
          expandIcon={<ArrowDropDownCircleIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ m: 0 }} variant="h6">
            Attributs
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '0rem 1rem', justifyContent: 'center' }}>
          <Typography variant="body1">
            <b>Points de Vie :</b> {calculPdV(finalAttribute.sta)} <br /> <b>Dégats à mains nues :</b>{' '}
            {finalAttribute.str} {typeDeg}
          </Typography>
          <Stack direction="row" spacing={1.5} sx={{ paddingTop: '.5rem' }}>
            <Stack>
              <Typography>
                <b>Force : </b>
                {finalAttribute.str}
              </Typography>
              <Typography>
                <b>Dexterité : </b>
                {finalAttribute.dex}
              </Typography>
              <Typography>
                <b>Vigueur : </b>
                {finalAttribute.sta}
              </Typography>
            </Stack>
            <Stack>
              <Typography>
                <b>Charisme : </b>
                {finalAttribute.cha}
              </Typography>
              <Typography>
                <b>Manipulation : </b>
                {finalAttribute.man}
              </Typography>
              <Typography>
                <b>Apparence : </b>
                {finalAttribute.app}
              </Typography>
            </Stack>
            <Stack>
              <Typography>
                <b>Intelligence : </b>
                {finalAttribute.int}
              </Typography>
              <Typography>
                <b>Perception :</b>
                {finalAttribute.per}
              </Typography>
              <Typography>
                <b>Astuce :</b>
                {finalAttribute.wit}
              </Typography>
            </Stack>
          </Stack>
          <div style={{ display: 'flex', justifyContent: 'space-around', paddingTop: '1rem' }}>
            <Button sx={homid ? select : unSelect} onClick={() => changeHomid()}>
              Homid
            </Button>
            <Button
              sx={glabro ? select : unSelect}
              onClick={() => changeGlabro(attributes.str, attributes.sta, attributes.app, attributes.man)}
            >
              Glabro
            </Button>
            <Button
              sx={crinos ? select : unSelect}
              onClick={() => changeCrinos(attributes.str, attributes.dex, attributes.sta)}
            >
              Crinos
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.5rem 1rem 0 1rem' }}
          expandIcon={<ArrowDropDownCircleIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{ m: 0 }} variant="h6">
            Bonus d'attributs
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '0rem 1rem', justifyContent: 'center' }}>
          <Stack direction="column" spacing={1} sx={{ paddingTop: '.5rem' }}>
            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
              <KeyboardArrowRightIcon fontSize="small" />
              {bonus[attributes.str - 1].str}
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
              <KeyboardArrowRightIcon fontSize="small" />
              {bonus[attributes.sta - 1].sta}
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
              <KeyboardArrowRightIcon fontSize="small" />
              {bonus[attributes.cha - 1].cha}
            </Typography>
            {bonus[attributes.man].man ? (
              <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                <KeyboardArrowRightIcon fontSize="small" />
                {bonus[attributes.man - 1].man}
              </Typography>
            ) : (
              <div sx={{ display: 'hidden' }} />
            )}
            {crinos ? (
              <Stack direction="column" spacing={1} sx={{ paddingTop: '.5rem' }}>
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                  <KeyboardArrowRightIcon fontSize="small" />
                  Vous vous soignez de deux dégats létaux ou Contendants par tour (Crinos)
                </Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                  <KeyboardArrowRightIcon fontSize="small" />
                  Pour un point de Rage vous gagnez un niveau de Vitesse (Crinos)
                </Typography>
                <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                  <KeyboardArrowRightIcon fontSize="small" />
                  Vous voyez dans les ténèbres les plus opaques comme en plein jour (Crinos)
                </Typography>
              </Stack>
            ) : glabro ? (
              <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                <KeyboardArrowRightIcon fontSize="small" />
                Vous vous soignez de deux dégats létaux ou Contendants par tour (Glabro)
              </Typography>
            ) : (
              ''
            )}
          </Stack>
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
Attributes.propTypes = {
  stats: PropTypes.object,
};
