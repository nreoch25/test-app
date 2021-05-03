export const sortByAscending = (items, prop) => {
  return [...items].sort((a, b) => {
    if (a["properties"][prop] < b["properties"][prop]) {
      return -1;
    } else if (a["properties"][prop] > b["properties"][prop]) {
      return 1;
    } else {
      return 0;
    }
  });
};
export const sortByDescending = (items, prop) => {
  return [...items].sort((a, b) => {
    if (a["properties"][prop] > b["properties"][prop]) {
      return -1;
    } else if (a["properties"][prop] < b["properties"][prop]) {
      return 1;
    } else {
      return 0;
    }
  });
};
