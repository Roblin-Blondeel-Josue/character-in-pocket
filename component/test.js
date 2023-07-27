import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };
  const menuList = [
    { name: 'Accueil', url: '/' },
    { name: 'News', url: '/news' },
    { name: 'Voir ma fiche', url: '/sheet/read' },
    { name: 'Créer une fiche', url: '/sheet/create' },
  ];
  const router = useRouter();
  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Typography bold fontSize={24} sx={{ m: '2rem' }}>
          Chara'Pocket
        </Typography>
        {menuList.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => router.push(text.url)}>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={'right'}>
        <Button onClick={toggleDrawer('right', true)}>Menu</Button>
        <Drawer anchor={'right'} open={state} onClose={toggleDrawer(false)}>
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
