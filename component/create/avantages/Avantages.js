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
import AvantagesList from '../../../data/Avantages.json';
import getAvantages from '../map/Avantages';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Avantages() {
  const { setAvantages, saveAvantages, setSaveAvantages } = useAppContext();
  const [firstAvantageName, setFirstAvantageName] = React.useState('Aucun');
  const [secondAvantageName, setSecondAvantageName] = React.useState('Aucun');
  const [thirdAvantageName, setThirdAvantageName] = React.useState('Aucun');
  const [fourAvantageName, setFourAvantageName] = React.useState('Aucun');
  const [fiveAvantageName, setFiveAvantageName] = React.useState('Aucun');
  const [firstAvantage, setFirstAvantage] = React.useState({});
  const [secondAvantage, setSecondAvantage] = React.useState({});
  const [thirdAvantage, setThirdAvantage] = React.useState({});
  const [fourAvantage, setFourAvantage] = React.useState({});
  const [fiveAvantage, setFiveAvantage] = React.useState({});

  React.useEffect(() => {
    setFirstAvantage(getAvantages(firstAvantageName));
    setSecondAvantage(getAvantages(secondAvantageName));
    setThirdAvantage(getAvantages(thirdAvantageName));
    setFourAvantage(getAvantages(fourAvantageName));
    setFiveAvantage(getAvantages(fiveAvantageName));
  }, [firstAvantageName, secondAvantageName, thirdAvantageName, fourAvantageName, fiveAvantageName]);

  function sendAvantages(avtg1, avtg2, avtg3, avtg4, avtg5) {
    setAvantages([avtg1, avtg2, avtg3, avtg4, avtg5]);
    setSaveAvantages(true);
  }
  return (
    <Card id="avantagesCard" sx={{ m: '2vh 0', borderRadius: '5px', boxShadow: 3 }}>
      <Accordion>
        <AccordionSummary
          sx={{ p: '.75rem 1.5rem' }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h4">Avantages </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ p: '.5rem 1rem', justifyContent: 'center' }}>
          <FormControl fullWidth onSubmit={(e) => e.preventDefault()}>
            <Stack direction="column" spacing={2.5}>
              <TextField
                select
                label="Premier Avantage"
                onChange={(e) => setFirstAvantageName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {AvantagesList.map((avantage, index) => (
                  <option key={index} value={avantage.name}>
                    {avantage.name}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Second Avantage"
                onChange={(e) => setSecondAvantageName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {AvantagesList.map((avantage, index) => (
                  <option key={index} value={avantage.name}>
                    {avantage.name}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Troisième Avantage"
                onChange={(e) => setThirdAvantageName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {AvantagesList.map((avantage, index) => (
                  <option key={index} value={avantage.name}>
                    {avantage.name}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Quatrième Avantage"
                onChange={(e) => setFourAvantageName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {AvantagesList.map((avantage, index) => (
                  <option key={index} value={avantage.name}>
                    {avantage.name}
                  </option>
                ))}
              </TextField>
              <TextField
                select
                label="Cinquième Avantage"
                onChange={(e) => setFiveAvantageName(e.target.value)}
                SelectProps={{
                  native: true,
                }}
              >
                {AvantagesList.map((avantage, index) => (
                  <option key={index} value={avantage.name}>
                    {avantage.name}
                  </option>
                ))}
              </TextField>
            </Stack>
          </FormControl>
          <Button
            sx={{ bgcolor: 'secondary.main', color: 'background.paper', margin: '.5rem 1rem .5rem 0' }}
            onClick={() => sendAvantages(firstAvantage, secondAvantage, thirdAvantage, fourAvantage, fiveAvantage)}
          >
            Sauvegardez
          </Button>
          {saveAvantages ? 'Informations Sauvegardées' : ''}
        </AccordionDetails>
      </Accordion>
    </Card>
  );
}
