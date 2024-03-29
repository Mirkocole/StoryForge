import React, { useState } from 'react';
import { createContext } from 'react';


export const FilterBookContext = createContext(null);
export default function FilterBookContextProvider({children}) {

    const [category,setCategory] = useState(['fantasy','horror','romance','scifi','history']);
    const [countBook,setCountBook] = useState(4);


    const value = {
        countBook,
        setCountBook,
        category,
        setCategory
    }

  return (
    <FilterBookContext.Provider value={value}>{children}</FilterBookContext.Provider>
  )
}
