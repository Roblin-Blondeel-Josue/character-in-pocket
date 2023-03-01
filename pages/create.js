import React from 'react';
import Head from 'next/head';
import Header from '../component/Header';
import PropTypes from 'prop-types';
import { Tabs, Box, Tab } from '@mui/material';
import { CreateWrapper } from '../component/create/CreateContext';
import AttributesCreate from '../component/create/information/Attributes';
import DescriptionCreate from '../component/create/information/Description';
import Resume from '../component/create/Resume';
import Talents from '../component/create/capacity/Talents';
import Skills from '../component/create/capacity/Skills';
import Politcs from '../component/create/knowledge/Politics';
import Legends from '../component/create/knowledge/Legends';
import Wod from '../component/create/knowledge/Wod';
import Language from '../component/create/knowledge/Language';
import Avantages from '../component/create/avantages/Avantages';
import Handicaps from '../component/create/avantages/Handicaps';
import Dons from '../component/create/powers/Dons';
import Cry from '../component/create/powers/Cry';
import Rituals from '../component/create/powers/Rituels';
import Bonus from '../component/create/Bonus';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ margin: '5vh 5vw 0vh 5vw', minHeight: '60vh', backgroundColor: 'rgb(230, 221, 196, .5)' }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Create() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Head>
        <title>Chara'pocket</title>
        <meta name="description" content="Character sheet in your pocket" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <CreateWrapper>
          <Box sx={{ width: '100%' }}>
            <TabPanel value={value} index={0}>
              <DescriptionCreate />
              <AttributesCreate />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Talents />
              <Skills />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Language />
              <Politcs />
              <Legends />
              <Wod />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Avantages />
              <Handicaps />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Dons />
              <Cry />
              <Rituals />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Bonus />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <Resume />
            </TabPanel>
            <Box
              sx={{
                m: '0 5vw',
                borderBottomLeftRadius: '5px',
                borderBottomRightRadius: '5px',
                bgcolor: 'background.paper',
                borderBottom: 1,
                borderColor: 'divider',
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
                aria-label="scrollable force tabs example"
              >
                <Tab label="Informations" {...a11yProps(0)} />
                <Tab label="Capacités" {...a11yProps(1)} />
                <Tab label="Savoirs" {...a11yProps(2)} />
                <Tab label="Avantages" {...a11yProps(3)} />
                <Tab label="Pouvoirs" {...a11yProps(4)} />
                <Tab label="Bonus" {...a11yProps(5)} />
                <Tab label="Finalisation" {...a11yProps(6)} />
              </Tabs>
            </Box>
          </Box>
        </CreateWrapper>
      </main>
    </div>
  );
}
