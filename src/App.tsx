import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import styles from "./App.module.css";
import PersonPage from "./components/PersonPage";

function App() {
  return (
    <div className={styles.App}>
      <Router>
        <Switch>
          <Route path="/person/:personID">
            <PersonPage></PersonPage>
          </Route>
          <Route path="/">
            <SearchPage></SearchPage>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
