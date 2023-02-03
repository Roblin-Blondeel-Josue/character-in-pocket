import axios from 'axios';

export default async function getCharacter(code) {
  const response = await axios.get(`https://garou-api.onrender.com/sheet/character/${code}`);
  const list = response.data;
  return list;
}
