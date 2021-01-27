import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

/* Pages */
import MainPage from "./pages";
import People from "./pages/people";
import PlanetsPage from "./pages/planets";
import FilmsPage from "./pages/films";
import ErrorPage from "./pages/404";


class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/people" component={People} />
          <Route exact path="/planets" component={PlanetsPage} />
          <Route exact path="/films" component={FilmsPage} />
          <Route exact path="/404" component={ErrorPage} />
          <Redirect to="/404" /> /* put on the very bottom */
        </Switch>
      </Router>
    );
  }
}


export default App;
