import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AppContext from "../context/AppContext";

const AppHeader = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background-color: var(--color-grey);
  padding-left: 15px;
  padding-right: 15px;
`;

const LogoImage = styled.div`
  .logo-image {
    width: 50px;
  }
`;

const Title = styled.h1`
  flex: 1;
  text-align: center;
  color: var(--color-dark-grey);
`;

const Header = () => {
  const { site, profile } = useContext(AppContext);
  console.log("PROFILE", profile);
  return (
    <AppHeader>
      <LogoImage>
        <Link to="/">
          <img src={site.logoImage} alt="logo image" className="logo-image" />
        </Link>
      </LogoImage>
      <Title style={{ flex: 1, justifyContent: "center" }}>{site.title}</Title>
      <Link to="/profile">Welcome {profile.firstName}</Link>
    </AppHeader>
  );
};

export default Header;
