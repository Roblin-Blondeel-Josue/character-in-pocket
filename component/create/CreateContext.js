import { useState, createContext, useContext } from 'react';

const createSheet = createContext();

// eslint-disable-next-line react/prop-types
export function CreateWrapper({ children }) {
  const [description, setDescription] = useState({});
  const [auspice, setAuspice] = useState({});
  const [auspicePower, setAuspicePower] = useState([]);
  const [attributes, setAttributes] = useState({});
  const [avantages, setAvantages] = useState([]);
  const [talents, setTalents] = useState([]);
  const [skills, setSkills] = useState([]);
  const [saveDesc, setSaveDesc] = useState(false);
  const [saveAttributes, setSaveAttributes] = useState(false);
  const [saveTalents, setSaveTalents] = useState(false);
  const [savePolitics, setSavePolitics] = useState(false);
  const sharedState = {
    savePolitics,
    setSavePolitics,
    saveTalents,
    setSaveTalents,
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
    skills,
    setSkills,
  };

  return <createSheet.Provider value={sharedState}>{children}</createSheet.Provider>;
}

export function useAppContext() {
  return useContext(createSheet);
}
