import { Button, List, ListItem, ListItemButton, ListItemText, Typography, useMediaQuery } from '@mui/material';
import { useRouter } from 'next/router';
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

export default function SideMenu() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  const menuList = [
    { name: 'Accueil', url: '/' },
    { name: 'News', url: '/news' },
    { name: 'Voir ma fiche', url: '/sheet/read' },
    { name: 'Créer une fiche', url: '/sheet/create' },
  ];
  const router = useRouter();
  const [state, setState] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

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
    <>
      {matches ? (
        <React.Fragment key={'right'}>
          <Button
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              zIndex: 20,
              borderRadius: 50,
              backgroundColor: '#e6ddc4',
              padding: '0.5rem 1rem',
            }}
            onClick={toggleDrawer('right', true)}
          >
            <MenuIcon />
          </Button>
          <Drawer anchor={'right'} open={state} onClose={toggleDrawer(false)}>
            {list('right')}
          </Drawer>
        </React.Fragment>
      ) : (
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
      )}
    </>
  );
}
