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
  const [handicaps, setHandicaps] = useState([]);
  const [avanhandi, setAvanhandi] = useState([]);
  const [talents, setTalents] = useState([]);
  const [skills, setSkills] = useState([]);
  const [legends, setLegends] = useState([]);
  const [politics, setPolitics] = useState([]);
  const [wod, setWod] = useState([]);
  const [language, setLanguage] = useState([]);
  const [dons, setDons] = useState([]);
  const [saveDesc, setSaveDesc] = useState(false);
  const [saveAttributes, setSaveAttributes] = useState(false);
  const [saveTalents, setSaveTalents] = useState(false);
  const [saveSkills, setSaveSkills] = useState(false);
  const [savePolitics, setSavePolitics] = useState(false);
  const [saveLegends, setSaveLegends] = useState(false);
  const [saveWod, setSaveWod] = useState(false);
  const [saveLanguage, setSaveLanguage] = useState(false);
  const [saveAvantages, setSaveAvantages] = useState(false);
  const [saveHandicaps, setSaveHandicaps] = useState(false);
  const [saveDons, setSaveDons] = useState(false);
  const sharedState = {
    saveAvantages,
    setSaveAvantages,
    saveHandicaps,
    setSaveHandicaps,
    legends,
    setLegends,
    politics,
    setPolitics,
    wod,
    setWod,
    language,
    setLanguage,
    saveLegends,
    setSaveLegends,
    saveWod,
    setSaveWod,
    savePolitics,
    setSavePolitics,
    saveLanguage,
    setSaveLanguage,
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
    handicaps,
    setHandicaps,
    avantages,
    setAvantages,
    avanhandi,
    setAvanhandi,
    talents,
    setTalents,
    code,
    setCode,
    skills,
    setSkills,
    dons,
    setDons,
    saveDons,
    setSaveDons,
  };

  return <createSheet.Provider value={sharedState}>{children}</createSheet.Provider>;
}

export function useAppContext() {
  return useContext(createSheet);
}
