import { useState, createContext, useContext } from 'react';

const createSheet = createContext();

// eslint-disable-next-line react/prop-types
export function CreateWrapper({ children }) {
  const [description, setDescription] = useState({});
  const [code, setCode] = useState('');
  const [auspice, setAuspice] = useState({});
  const [auspicePower, setAuspicePower] = useState([]);
  const [attributes, setAttributes] = useState({});
  const [avantages, setAvantages] = useState([]);
  const [talents, setTalents] = useState([]);
  const [skills, setSkills] = useState([]);
  const [legends, setLegends] = useState([]);
  const [politics, setPolitics] = useState([]);
  const [wod, setWod] = useState([]);
  const [saveDesc, setSaveDesc] = useState(false);
  const [saveAttributes, setSaveAttributes] = useState(false);
  const [saveTalents, setSaveTalents] = useState(false);
  const [saveSkills, setSaveSkills] = useState(false);
  const [savePolitics, setSavePolitics] = useState(false);
  const [saveLegends, setSaveLegends] = useState(false);
  const [saveWod, setSaveWod] = useState(false);
  const sharedState = {
    legends,
    setLegends,
    politics,
    setPolitics,
    wod,
    setWod,
    saveLegends,
    setSaveLegends,
    saveWod,
    setSaveWod,
    savePolitics,
    setSavePolitics,
    saveTalents,
    setSaveTalents,
    saveSkills,
    setSaveSkills,
    saveAttributes,
    setSaveAttributes,
    saveDesc,
    setSaveDesc,
    description,
    setDescription,
    auspice,
    setAuspice,
    auspicePower,
    setAuspicePower,
    attributes,
    setAttributes,
    avantages,
    setAvantages,
    talents,
    setTalents,
    code,
    setCode,
    skills,
    setSkills,
  };

  return <createSheet.Provider value={sharedState}>{children}</createSheet.Provider>;
}

export function useAppContext() {
  return useContext(createSheet);
}
