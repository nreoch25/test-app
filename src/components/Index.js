import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppContext from "../context/AppContext";

const PageTitle = styled.h3`
  color: var(--color-darker-grey);
  text-align: center;
`;

const Table = styled.table`
  margin: 10px auto;
  text-align: center;
  .align-left {
    text-align: left;
  }
  th {
    color: var(--color-darker-grey);
  }
  td {
    color: var(--color-darker-grey);
  }
  a:link {
    color: var(--color-dark-blue);
    font-weight: bold;
  }
  a:visited {
    color: var(--color-purple);
  }
  .pointer {
    cursor: pointer;
  }
`;

const Index = () => {
  const { items, pageTitle, sortByTitle, sortByMagnitude, sortByTime } = useContext(AppContext);
  console.log("data", items);
  return (
    <div>
      <PageTitle>{pageTitle}</PageTitle>
      <Table>
        <thead>
          <tr>
            <th onClick={sortByTitle} className="pointer">
              Title
            </th>
            <th onClick={sortByMagnitude} className="pointer">
              Magnitude
            </th>
            <th onClick={sortByTime} className="pointer">
              Time
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td className="align-left">
                  <Link to={`/detail/${item.id}`}>{item.properties.place}</Link>
                </td>

                <td>{item.properties.mag}</td>
                <td>{item.properties.dateString}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Index;
