import React from 'react';
import { useRouter } from 'next/router';
import { Box, Button, Typography } from '@mui/material';

export default function Header() {
  const router = useRouter();
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
      <Button onClick={() => router.reload()}>
        <Typography sx={{ color: 'primary.contrastText' }} variant="h1">
          Chara'Pocket
        </Typography>
      </Button>
    </Box>
  );
}
