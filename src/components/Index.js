import React, { useContext } from "react";
import AppContext from "../context/AppContext";

const Index = () => {
  const { site } = useContext(AppContext);
  console.log("SITE", site);
  return (
    <div>
      <h1>Index</h1>
    </div>
  );
};

export default Index;
