import React from "react";
import { Route, Switch } from "react-router-dom";
import Detail from "./components/Detail";
import Error from "./components/Error";
import Index from "./components/Index";
import Profile from "./components/Profile";

const App = () => {
  return (
    <main>
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
