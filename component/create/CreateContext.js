import { useState, createContext, useContext } from 'react';

const createSheet = createContext();

// eslint-disable-next-line react/prop-types
export function CreateWrapper({ children }) {
  const [description, setDescription] = useState({});
  const [saveDesc, setSaveDesc] = useState(false);
  const [attributes, setAttributes] = useState({});
  const [saveAttributes, setSaveAttributes] = useState(false);
  const [code, setCode] = useState('');
  const [auspice, setAuspice] = useState({});
  const [auspicePower, setAuspicePower] = useState([]);
  const [avantages, setAvantages] = useState([]);
  const [handicaps, setHandicaps] = useState([]);
  const [avanhandi, setAvanhandi] = useState([]);
  const [saveAvantages, setSaveAvantages] = useState(false);
  const [saveHandicaps, setSaveHandicaps] = useState(false);
  const [talents, setTalents] = useState([]);
  const [saveTalents, setSaveTalents] = useState(false);
  const [skills, setSkills] = useState([]);
  const [saveSkills, setSaveSkills] = useState(false);
  const [legends, setLegends] = useState([]);
  const [politics, setPolitics] = useState([]);
  const [wod, setWod] = useState([]);
  const [language, setLanguage] = useState([]);
  const [savePolitics, setSavePolitics] = useState(false);
  const [saveLegends, setSaveLegends] = useState(false);
  const [saveWod, setSaveWod] = useState(false);
  const [saveLanguage, setSaveLanguage] = useState(false);
  const [dons, setDons] = useState([]);
  const [saveDons, setSaveDons] = useState(false);
  const [cry, setCry] = useState([]);
  const [saveCry, setSaveCry] = useState(false);
  const [rituels, setRituels] = useState([]);
  const [saveRituels, setSaveRituels] = useState(false);

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
    cry,
    setCry,
    saveCry,
    setSaveCry,
    rituels,
    setRituels,
    saveRituels,
    setSaveRituels,
  };

  return <createSheet.Provider value={sharedState}>{children}</createSheet.Provider>;
}

export function useAppContext() {
  return useContext(createSheet);
}
