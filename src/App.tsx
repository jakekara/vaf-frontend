import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchPage from "./components/SearchPage";
import styles from "./App.module.css";
import PersonPage from "./components/PersonPage";
import TopBar from "./components/TopBar";

function App() {
  return (
    <React.Fragment>
      <div className={styles.App}>
        <Router>
          <TopBar />
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
    </React.Fragment>
  );
}

export default App;
