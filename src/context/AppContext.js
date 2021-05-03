import React, { createContext, useState } from "react";
import data from "../data/data.json";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState(data.data.features);
  // console.log("DATA", data.data.metadata.title);
  const value = {
    site: data.site,
    profile: data.profile,
    pageTitle: data.data.metadata.title,
    items,
    setItems,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
