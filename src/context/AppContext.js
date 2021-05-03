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
    time: "desc",
  });

  useEffect(() => {
    // This is to add the dateString to all the properties objects
    const newItemsWithDateString = items.map((item) => {
      const dateString = format(new Date(item.properties.time), "MMM dd, yyyy, p");
      item.properties.dateString = dateString;

      // Adding a distance property to better sort by place using distance
      let distance = item.properties.place.match(/\d/g);
      distance = distance.join("");
      item.properties.distance = parseInt(distance);

      return item;
    });

    setItems(newItemsWithDateString);
  }, []);

  const sortByTitle = useCallback(() => {
    const { title } = sortState;
    if (title === "initial" || title === "desc") {
      setItems(sortByAscending(items, "distance"));
      setSortState({
        ...sortState,
        title: "asc",
      });
    } else if (title === "asc") {
      setItems(sortByDescending(items, "distance"));
      setSortState({
        ...sortState,
        title: "desc",
      });
    }
  }, [sortState.title, items]);

  const sortByMagnitude = useCallback(() => {
    const { magnitude } = sortState;
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

  const sortByTime = useCallback(() => {
    const { time } = sortState;
    if (time === "asc") {
      console.log("HERE desc");
      setItems(sortByDescending(items, "time"));
      setSortState({
        ...sortState,
        time: "desc",
      });
    } else if (time === "desc") {
      console.log();
      setItems(sortByAscending(items, "time"));
      setSortState({
        ...sortState,
        time: "asc",
      });
    }
  }, [sortState.time, items]);

  const value = {
    site: data.site,
    profile: data.profile,
    pageTitle: data.data.metadata.title,
    items,
    setItems,
    sortByTitle,
    sortByMagnitude,
    sortByTime,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;
