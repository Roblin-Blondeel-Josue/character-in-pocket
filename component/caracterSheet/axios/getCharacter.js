import axios from 'axios';

export default async function getCharacter(code) {
  const response = await axios.get(`http://localhost:5000/sheet/character/${code}`);
  const list = response.data;
  return list;
}
