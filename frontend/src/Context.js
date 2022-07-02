import * as React from 'react';
import { useState, createContext } from 'react';

export const Context = createContext({});

export const ContextProvider = ({ children }) => {
  const [activeTab, setActiveTab] = useState('');

  return (
    <Context.Provider
      value={{
        activeTab,
        setActiveTab
      }}
    >
      {children}
    </Context.Provider>
  );
};
