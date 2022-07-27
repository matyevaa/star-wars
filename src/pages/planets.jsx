import React from 'react';
import planets from '../data/planets.json';
import {
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


function PlanetPage() {
  const { planetPage } = useParams();
  return (
    <div class="film_div">
      <ul class="film_item">
        <li id="name">{planets[planetPage].name}</li>
        <li class="film_li"><span>Rotation Period:</span> {planets[planetPage].rotation_period}</li>
        <li class="film_li"><span>Orbital Period:</span> {planets[planetPage].orbital_period}</li>
        <li class="film_li"><span>Diameter:</span> {planets[planetPage].diameter}</li>
        <li class="film_li"><span>Climate:</span> {planets[planetPage].climate}</li>
        <li class="film_li"><span>Gravity:</span> {planets[planetPage].gravity}</li>
          <li class="film_li"><span>Terrain:</span> {planets[planetPage].terrain}</li>
          <li class="film_li"><span>Surface Water:</span> {planets[planetPage].surface_water}</li>
          <li class="film_li"><span>Population:</span> {planets[planetPage].population}</li>
        <li class="film_li"><span>Residents:</span>
          <ul class="movies">
            {planets[planetPage].residents.map((value,index) => { return <li key={index}><Link to={`/star-wars${value}`} instead>{value}</Link></li>})}
          </ul>
        </li>
        <li id="last" class="char_li"><span>Films:</span>
          <ul class="movies">
            {planets[planetPage].films.map((value,index) => { return <li key={index}><Link to={`/star-wars${value}`} instead>{value}</Link></li>})}
          </ul>
        </li>
    </ul>
  </div>
  );
}


function PlanetsPage() {

  const match = useRouteMatch();
  const {url, path} = match;

  return (

    <div>
      <ul class="nav_list">
        <li id="nav_item"><a href="/star-wars">Star Wars</a></li>
        <li id="nav_item"><a href="/star-wars/people">People</a></li>
        <li id="nav_item" class="active"><a href="/star-wars/planets">Planets</a></li>
        <li id="nav_item"><a href="/star-wars/films">Films</a></li>
      </ul>

      <div class="sidebar">
        <ul>
          {Object.keys(planets).map(key => {
            return <li id="sidebar_item"><Link to={`${url}/${key}`}>{planets[key].name}</Link></li>
          })}
        </ul>
      </div>

      <div class="content">
        <Route path={`${path}/:planetPage`} component={PlanetPage} />
      </div>

    </div>

  );

}


export default PlanetsPage;
