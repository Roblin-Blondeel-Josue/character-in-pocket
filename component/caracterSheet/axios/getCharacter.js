import axios from 'axios';

export default async function getCharacter(code) {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://garou-api.onrender.com/sheet/character/${code}`,
    headers: {
      'Access-Control-Allow-Origin': 'https://character-in-pocket.vercel.app/',
      'Content-Type': 'application/json',
    },
    data: '',
  };
  const response = await axios(config);
  const list = response.data;
  return list;
}
