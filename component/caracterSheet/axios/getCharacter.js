import axios from 'axios';

export default async function getCharacter(code) {
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url: `https://garou-api.onrender.com/sheet/character/${code}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: '',
  };
  const response = await axios(config);
  const list = response.data;
  return list;
}
