import React, { createContext, useState, useEffect, useCallback } from "react";
import { format } from "date-fns";
import { sortByAscending, sortByDescending } from "../utils/sort";
import data from "../data/data.json";

const AppContext = createContext({});

export const AppProvider = ({ children }) => {
  const [items, setItems] = useState(data.data.features);
  const [sortState, setSortState] = useState({
    title: "initial",
    magnitude: "initial",
  });

  useEffect(() => {
    // This is to add the dateString to all the properties objects
    const newItemsWithDateString = items.map((item) => {
      const dateString = format(new Date(item.properties.time), "MMM dd, yyyy, p");
      item.properties.dateString = dateString;
      return item;
    });

    setItems(newItemsWithDateString);
  }, []);

  const sortByTitle = useCallback(() => {
    const { title } = sortState;
    console.log("TITLE", title);
    if (title === "initial" || title === "desc") {
      setItems(sortByAscending(items, "place"));
      setSortState({
        ...sortState,
        title: "asc",
      });
    } else if (title === "asc") {
      setItems(sortByDescending(items, "place"));
      setSortState({
        ...sortState,
        title: "desc",
      });
    }
  }, [sortState.title, items]);

  const sortByMagnitude = useCallback(() => {
    const { magnitude } = sortState;
    console.log("magnitude", magnitude);
    if (magnitude === "initial" || magnitude === "desc") {
      setItems(sortByAscending(items, "mag"));
      setSortState({
        ...sortState,
        magnitude: "asc",
      });
    } else if (magnitude === "asc") {
      setItems(sortByDescending(items, "mag"));
      setSortState({
        ...sortState,
        magnitude: "desc",
      });
    }
  }, [sortState.magnitude, items]);
  // const sortByDate = () => {};

  const value = {
    site: data.site,
    profile: data.profile,
    pageTitle: data.data.metadata.title,
    items,
    setItems,
    sortByTitle,
    sortByMagnitude,
    // sortByDate,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
