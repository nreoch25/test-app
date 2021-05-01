import React from "react";
import { Route, Switch } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Detail from "./components/Detail";
import Error from "./components/Error";
import Index from "./components/Index";
import Profile from "./components/Profile";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  body, html {
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    --color-grey: #ededed;
    --color-dark-grey: #777777;
    --color-darker-grey: #444444;
    --color-dark-blue: #0011bb;
    --color-purple: #6600cc;
  }
`;

const App = () => {
  return (
    <main>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/profile" component={Profile} />
        <Route path="/detail" component={Detail} />
        <Route component={Error} />
      </Switch>
    </main>
  );
};

export default App;
