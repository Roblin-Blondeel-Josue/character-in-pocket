import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Box, Tab } from '@mui/material';
import { CreateWrapper } from './create/CreateContext';
import AttributesCreate from './create/Attributes';
import DescriptionCreate from './create/Description';
import Resume from './create/Resume';
import Talents from './create/Talents';
import Skills from './create/Skills';
import Politcs from './create/Politics';
import Legends from './create/Legends';
import Wod from './create/Wod';
import Avantages from './create/Avantages';
import Handicaps from './create/Handicaps';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      style={{ m: '5vh 5vw', minHeight: '60vh' }}
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
          <Politcs />
          <Legends />
          <Wod />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Avantages />
          <Handicaps />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Resume />
        </TabPanel>
        <Box
          sx={{
            m: '0 5vw',
            borderRadius: '15px',
            bgcolor: 'background.paper',
            p: '0 1rem',
            borderBottom: 1,
            borderColor: 'divider',
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="basic tabs example"
          >
            <Tab label="Informations" {...a11yProps(0)} />
            <Tab label="Capacités" {...a11yProps(1)} />
            <Tab label="Savoirs" {...a11yProps(2)} />
            <Tab label="Avantages" {...a11yProps(3)} />
            <Tab label="Finalisation" {...a11yProps(4)} />
          </Tabs>
        </Box>
      </Box>
    </CreateWrapper>
  );
}
