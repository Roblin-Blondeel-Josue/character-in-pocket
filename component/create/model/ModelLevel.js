import { TextField, Typography } from '@mui/material';
import React from 'react';

export default function ModelLevel(titre, toSet) {
  const valueAttributes = [1, 2, 3, 4, 5, 6];
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ m: '0 .5rem 0 0' }}>{titre} : </Typography>
      <TextField
        select
        onChange={(e) => `${toSet}`(e.target.value)}
        SelectProps={{
          native: true,
        }}
      >
        {valueAttributes.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </TextField>
    </div>
  );
}
