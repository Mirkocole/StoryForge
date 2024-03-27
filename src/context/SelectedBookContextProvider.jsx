import React, { createContext, useState } from 'react';

export const SelectedBookContext = createContext(null);

export default function SelectedBookContextProvider({children}) {

    const [selected,setSelected] = useState('');

    const value = {
        selected,
        setSelected
    }

  return (
    <SelectedBookContext.Provider value={value}>{children}</SelectedBookContext.Provider>
  )
}
