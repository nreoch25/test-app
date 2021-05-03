import React, { useContext } from "react";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppContext from "../context/AppContext";

const PageTitle = styled.h3`
  color: var(--color-darker-grey);
  text-align: center;
`;

const Table = styled.table`
  width: 50%;
  margin: 10px auto;
  text-align: center;
  .align-left {
    text-align: left;
  }
`;

const Index = () => {
  const { site, items, pageTitle } = useContext(AppContext);
  console.log("data", items);
  return (
    <div>
      <PageTitle>{pageTitle}</PageTitle>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Magnitude</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => {
            var date = format(new Date(item.properties.time), "MMM dd, yyyy, p");
            return (
              <tr key={item.id}>
                <td className="align-left">
                  <Link to={`/detail/${item.id}`}>{item.properties.place}</Link>
                </td>

                <td>{item.properties.mag}</td>
                <td>{date}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Index;
