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
import { useAppContext } from '../CreateContext';
import CryList from '../../../data/Cry.json';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import getCry from '../map/Cry';

export default function Cry() {
  const { setCry, saveCry, setSaveCry, auspice } = useAppContext();
  const [firstCry, setFirstCry] = React.useState({});
  const [secondCry, setSecondCry] = React.useState({});
  const [firstCryName, setFirstCryName] = React.useState('Aucun');
  const [secondCryName, setSecondCryName] = React.useState('Aucun');
  const [thirdCry, setThirdCry] = React.useState({});
  const [fourCry, setFourCry] = React.useState({});
  const [thirdCryName, setThirdCryName] = React.useState('Aucun');
  const [fourCryName, setFourCryName] = React.useState('Aucun');
  const [fiveCry, setFiveCry] = React.useState({});
  const [sixCry, setSixCry] = React.useState({});
  const [fiveCryName, setFiveCryName] = React.useState('Aucun');
  const [sixCryName, setSixCryName] = React.useState('Aucun');
  const [ausName, setAusName] = React.useState(false);

  React.useEffect(() => {
    setFirstCry(getCry(firstCryName));
    setSecondCry(getCry(secondCryName));
    setThirdCry(getCry(thirdCryName));
    setFourCry(getCry(fourCryName));
    setFiveCry(getCry(fiveCryName));
    setSixCry(getCry(sixCryName));
    if (auspice != {} && auspice != undefined) {
      setAusName(auspice.name);
    }
  }, [firstCryName, fiveCryName, fourCryName, secondCryName, sixCryName, thirdCryName, auspice]);

  function sendCry(cry1, cry2, cry3, cry4, cry5, cry6) {
    setCry([cry1, cry2, cry3, cry4, cry5, cry6]);
    setSaveCry(true);
  }
  return ausName === 'Gaillard' ? (
    <Card id="cryCard" sx={{ m: '2vh 0', borderRadius: '5px', boxShadow: 3 }}>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.75rem 1.5rem' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Hurlements </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '.5rem 1rem', justifyContent: 'center' }}>
          <FormControl fullWidth onSubmit={(e) => e.preventDefault()}>
            <Stack direction="column" spacing={2.5}>
              <TextField
                select
                label="Premier Hurlement"
                onChange={(e) => setFirstCryName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {CryList.map((cry, index) => (
                  <option key={index} value={cry.name}>
                    {cry.name}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Second Hurlement"
                onChange={(e) => setSecondCryName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {CryList.map((cry, index) => (
                  <option key={index} value={cry.name}>
                    {cry.name}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Troisième Hurlement"
                onChange={(e) => setThirdCryName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {CryList.map((cry, index) => (
                  <option key={index} value={cry.name}>
                    {cry.name}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Quatrième Hurlement"
                onChange={(e) => setFourCryName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {CryList.map((cry, index) => (
                  <option key={index} value={cry.name}>
                    {cry.name}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Cinquième Hurlement"
                onChange={(e) => setFiveCryName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {CryList.map((cry, index) => (
                  <option key={index} value={cry.name}>
                    {cry.name}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Sixième Hurlement"
                onChange={(e) => setSixCryName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {CryList.map((cry, index) => (
                  <option key={index} value={cry.name}>
                    {cry.name}
                  </option>
                ))}
              </TextField>
            </Stack>
          </FormControl>
          <Button
            sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 1rem .5rem 0' }}
            onClick={() => sendCry(firstCry, secondCry, thirdCry, fourCry, fiveCry, sixCry)}
          >
            Sauvegardez
          </Button>
          {saveCry ? 'Hurlements Sauvgardées' : ''}
        </AccordionDetails>
      </Accordion>
    </Card>
  ) : (
    <div style={{ display: 'none' }} />
  );
}
