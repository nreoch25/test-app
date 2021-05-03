import React, { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext";

const PageTitle = styled.h3`
  color: var(--color-darker-grey);
  text-align: center;
`;

const Detail = () => {
  const slug = useParams();
  const { items } = useContext(AppContext);
  const item = items.find((item) => item.id === slug.id);
  console.log("ITEM", item);

  console.log("slug", slug);
  return (
    <div>
      <PageTitle>{item.properties.title}</PageTitle>
    </div>
  );
};

export default Detail;
