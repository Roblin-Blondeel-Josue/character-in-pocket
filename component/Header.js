import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        height: '15vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Typography sx={{ color: 'text.secondary' }} variant="h1">
        Chara'pocket
      </Typography>
    </Box>
  );
}
