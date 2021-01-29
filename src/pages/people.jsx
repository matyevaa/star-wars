import React, { useEffect, useState } from 'react';
import people from '../data/people.json';
import {
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


function CharPage() {
  const { charPage } = useParams();
  return (
    <div>
      <ul class="char_item">
        <li id="name">{people[charPage].name}</li>
        <li class="char_li"><span>Height:</span> {people[charPage].height}</li>
        <li class="char_li"><span>Mass:</span> {people[charPage].mass}</li>
        <li class="char_li"><span>Hair Color:</span> {people[charPage].hair_color}</li>
        <li class="char_li"><span>Skin Color:</span> {people[charPage].skin_color}</li>
        <li class="char_li"><span>Eye Color:</span> {people[charPage].eye_color}</li>
        <li class="char_li"><span>Birth Year:</span> {people[charPage].birth_year}</li>
        <li class="char_li"><span>Gender:</span> {people[charPage].gender}</li>
        <li class="char_li"><span>Homeworld:</span> <Link to={people[charPage].homeworld} instead>{people[charPage].homeworld}</Link></li>
        <li id="last" class="char_li"><span>Films:</span>
          <ul class="movies">
            {people[charPage].films.map((value,index) => { return <li key={index}><Link to={value} instead>{value}</Link></li>})}
          </ul>
        </li>
    </ul>
  </div>
  );
}


function PeoplePage() {

    const match = useRouteMatch();
    const {url, path} = match;

    return (

      <div>
        <ul class="nav_list">
          <li id="nav_item"><a href="/">Star Wars</a></li>
          <li id="nav_item" class="active"><a href="/people">People</a></li>
          <li id="nav_item"><a href="/planets">Planets</a></li>
          <li id="nav_item"><a href="/films">Films</a></li>
        </ul>

        <div class="sidebar">
          <ul>
            {Object.keys(people).map(key => {
              return <li id="sidebar_item"><Link to={`${url}/${key}`}>{people[key].name}</Link></li>
            })}
          </ul>
        </div>

        <div class="content">
        <Route path={`${path}/:charPage`} component={CharPage} />
        </div>
      </div>

      );
}

export default PeoplePage;
