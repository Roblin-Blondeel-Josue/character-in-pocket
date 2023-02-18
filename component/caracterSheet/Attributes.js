import React from 'react';
import { PropTypes } from 'prop-types';
import { Stack, Button, Card, Typography, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import bonus from '../../data/BonusAtt.json';

export default function Attributes({ stats }) {
  const attributes = stats;
  const [homid, setHomid] = React.useState(false);
  const [glabro, setGlabro] = React.useState(false);
  const [crinos, setCrinos] = React.useState(false);
  function changeCrinos() {
    setCrinos(true);
    setHomid(false);
    setGlabro(false);
  }
  function changeGlabro() {
    setCrinos(false);
    setHomid(false);
    setGlabro(true);
  }
  function changeHomid() {
    setCrinos(false);
    setHomid(true);
    setGlabro(false);
  }

  const finalAttribute = {
    str: crinos ? attributes.str + 4 : glabro ? attributes.str + 2 : attributes.str,
    dex: crinos ? attributes.dex + 1 : glabro ? attributes.dex : attributes.dex,
    sta: crinos ? attributes.sta + 3 : glabro ? attributes.sta + 1 : attributes.sta,
    app: crinos ? (attributes.app === 1 ? 0 : 1) : glabro ? attributes.app - 1 : attributes.app,
    man: crinos ? 0 : glabro ? (attributes.man === 1 ? 0 : attributes.man - 2) : attributes.man,
    degat: crinos ? 'Létaux' : glabro ? 'Létaux' : 'Contendants',
    cha: attributes.cha,
    int: attributes.int,
    per: attributes.per,
    wit: attributes.wit,
  };
  const select = { bgcolor: 'primary.main', color: 'text.secondary' };
  const unSelect = { border: '2px solid #181D31' };
  const pdv = new Map();
  pdv.set(1, 4).set(2, 5).set(3, 7).set(4, 9).set(5, 12).set(6, 15).set(7, 17).set(8, 20).set(9, 25).set(10, 30);
  return (
    <Card sx={{ m: '2vh 0', borderRadius: '5px', boxShadow: 3 }}>
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
            <b>Points de Vie :</b> {pdv.get(finalAttribute.sta)} <br /> <b>Dégats à mains nues : </b>
            {finalAttribute.str} ({finalAttribute.degat})
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
            <Button sx={glabro ? select : unSelect} onClick={() => changeGlabro()}>
              Glabro
            </Button>
            <Button sx={crinos ? select : unSelect} onClick={() => changeCrinos()}>
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
              {bonus[finalAttribute.str - 1].str}
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
              <KeyboardArrowRightIcon fontSize="small" />
              {bonus[finalAttribute.sta - 1].sta}
            </Typography>
            <Typography sx={{ display: 'flex', alignItems: 'center' }}>
              <KeyboardArrowRightIcon fontSize="small" />
              {bonus[finalAttribute.cha - 1].cha}
            </Typography>
            {bonus[finalAttribute.man].man ? (
              <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                <KeyboardArrowRightIcon fontSize="small" />
                {bonus[finalAttribute.man - 1].man}
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
