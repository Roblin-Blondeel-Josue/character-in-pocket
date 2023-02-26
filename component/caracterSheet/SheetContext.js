import { useState, createContext, useContext } from 'react';

const readSheet = createContext();

// eslint-disable-next-line react/prop-types
export function ReadWrapper({ children }) {
  const [player, setPlayer] = useState({});
  const sharedState = { player, setPlayer };

  return <readSheet.Provider value={sharedState}>{children}</readSheet.Provider>;
}

export function useReadContext() {
  return useContext(readSheet);
}
