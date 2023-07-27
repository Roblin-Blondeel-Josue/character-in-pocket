import { Paper } from '@mui/material';
import PropTypes from 'prop-types';
import SideMenu from './SideMenu';
import Head from 'next/head';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Layout({ composent }) {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  return (
    <>
      <Head>
        <title>Chara'pocket</title>
        <meta name="description" content="Character sheet in your pocket" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {matches ? (
          <>
            <SideMenu />
            <Paper sx={{ p: 0, margin: '5vh 2vw', borderRadius: '5px', display: 'flex', flexDirection: 'column' }}>
              {composent}
            </Paper>
          </>
        ) : (
          <Paper sx={{ p: 0, margin: '5vh 2vw', borderRadius: '5px', display: 'flex' }}>
            <SideMenu />
            {composent}
          </Paper>
        )}
      </main>
    </>
  );
}
Layout.propTypes = {
  composent: PropTypes.element,
};
