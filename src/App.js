import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  useParams,
  useRouteMatch
} from "react-router-dom";

/* Pages */
import MainPage from "./pages";
import PeoplePage from "./pages/people";
import CharPage from "./pages/people"
import PlanetsPage from "./pages/planets";
import FilmsPage from "./pages/films";
import ErrorPage from "./pages/404";


class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/star-wars" component={MainPage} />
          <Route path="/people" component={PeoplePage} />
          <Route path="/planets" component={PlanetsPage} />
          <Route path="/films" component={FilmsPage} />
          <Route exact path="/404" component={ErrorPage} />
          <Route path="*"><Redirect to="/404" /></Route> /* put on the very bottom */
        </Switch>
      </Router>
    );
  }
}


export default App;
