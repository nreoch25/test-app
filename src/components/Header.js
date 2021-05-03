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
  a:link {
    color: var(--color-dark-blue);
    font-weight: bold;
  }
  a:visited {
    color: var(--color-purple);
  }
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
  const {
    site: { logoImage, title },
    profile: { firstName },
  } = useContext(AppContext);
  return (
    <AppHeader>
      <LogoImage>
        <Link to="/">
          <img src={logoImage} alt="logo image" className="logo-image" />
        </Link>
      </LogoImage>
      <Title>{title}</Title>
      <Link to="/profile">Welcome {firstName}</Link>
    </AppHeader>
  );
};

export default Header;
