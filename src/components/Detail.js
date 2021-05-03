import React, { useContext } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import AppContext from "../context/AppContext";

const Table = styled.table`
  margin: 17px auto;
  text-align: center;
  .align-left {
    text-align: left;
  }
  th {
    padding-right: 30px;
    color: var(--color-darker-grey);
  }
  td {
    color: var(--color-dark-grey);
  }
`;

const TableHead = styled.th`
  text-align: left;
  color: var(--color-darker-grey);
  font-size: 20px;
  padding-bottom: 20px;
`;

const Detail = () => {
  const slug = useParams();
  const { items } = useContext(AppContext);
  const item = items.find((item) => item.id === slug.id);

  return (
    <div>
      <Table>
        <tbody>
          <tr>
            <TableHead colSpan="2">{item.properties.title}</TableHead>
          </tr>
          <tr>
            <th className="align-left">Title</th>
            <td className="align-left">{item.properties.title}</td>
          </tr>
          <tr>
            <th className="align-left">Magnitude</th>
            <td className="align-left">{item.properties.mag}</td>
          </tr>
          <tr>
            <th className="align-left">Time</th>
            <td className="align-left">{item.properties.time}</td>
          </tr>
          <tr>
            <th className="align-left">Status</th>
            <td className="align-left">{item.properties.status}</td>
          </tr>
          <tr>
            <th className="align-left">Tsunami</th>
            <td className="align-left">{item.properties.tsunami}</td>
          </tr>
          <tr>
            <th className="align-left">Type</th>
            <td className="align-left">{item.properties.type}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Detail;
