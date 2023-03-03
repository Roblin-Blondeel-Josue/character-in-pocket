import axios from 'axios';
import React from 'react';

export default function GetCharacter(code) {
  const [sheetData, setSheetData] = React.useState([]);
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://garou-api.onrender.com/sheet/character/${code}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: '',
  };
  axios(config).then((response) => {
    setSheetData(response.data);
    console.log('Fiche reçu');
  });
  return sheetData;
}
