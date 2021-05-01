import React, { createContext, useState } from "react";
import data from "../data/data.json";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const value = {
    site: data.site,
    profile: data.profile,
    data: data.data,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
