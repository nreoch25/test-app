import React, { useContext, Fragment } from "react";
import styled from "styled-components";
import AppContext from "../context/AppContext";

const Table = styled.table`
  .align-left {
    text-align: left;
  }
  th {
    width: 100px;
    color: var(--color-darker-grey);
  }
  td {
    width: 250px;
    color: var(--color-dark-grey);
  }
`;

const ProfileLayout = styled.div`
  display: flex;
  text-align: center;
  margin: 0 auto;
  justify-content: center;
  .mr-8 {
    margin-right: 8px;
  }
  .w-130 {
    width: 130px;
  }
`;

const ProfileHead = styled.h3`
  text-align: center;
  color: var(--color-darker-grey);
  font-size: 20px;
`;

const Profile = () => {
  const { profile } = useContext(AppContext);
  return (
    <Fragment>
      <ProfileHead>Profile</ProfileHead>
      <ProfileLayout>
        <div className="mr-8">
          <img className="w-130" src={profile.avatarImage} alt="" />
        </div>
        <Table>
          <tbody>
            <tr>
              <th className="align-left">First name</th>
              <td className="align-left">{profile.firstName}</td>
            </tr>
            <tr>
              <th className="align-left">Last name</th>
              <td className="align-left">{profile.lastName}</td>
            </tr>
            <tr>
              <th className="align-left">Phone</th>
              <td className="align-left">{profile.phone}</td>
            </tr>
            <tr>
              <th className="align-left">Email</th>
              <td className="align-left">{profile.email}</td>
            </tr>
            <tr>
              <th className="align-left" valign="top">
                Bio
              </th>
              <td className="align-left">{profile.bio}</td>
            </tr>
          </tbody>
        </Table>
      </ProfileLayout>
    </Fragment>
  );
};

export default Profile;
