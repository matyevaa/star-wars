import React, { useEffect, useState } from 'react';
import films from '../data/films.json';
import {
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";


function FilmPage() {
  const { filmPage } = useParams();
  return (
    <div class="film_div">
      <ul class="film_item">
        <li id="name">{films[filmPage].title}</li>
        <li class="film_li"><span>Episode id:</span> {films[filmPage].episode_id}</li>
        <li class="film_li"><span>Opening Crawl:</span> {films[filmPage].opening_crawl}</li>
        <li class="film_li"><span>Director:</span> {films[filmPage].director}</li>
        <li class="film_li"><span>Producer:</span> {films[filmPage].producer}</li>
        <li class="film_li"><span>Release date:</span> {films[filmPage].release_date}</li>
        <li class="film_li"><span>Characters:</span>
          <ul class="movies">
            {films[filmPage].characters.map((value,index) => { return <li key={index}><Link to={value} instead>{value}</Link></li>})}
          </ul>
        </li>
        <li id="last" class="char_li"><span>Planets:</span>
          <ul class="movies">
            {films[filmPage].planets.map((value,index) => { return <li key={index}><Link to={value} instead>{value}</Link></li>})}
          </ul>
        </li>
    </ul>
  </div>
  );
}


function FilmsPage() {

  const match = useRouteMatch();
  const {url, path} = match;

  return (

    <div>
      <ul class="nav_list">
        <li id="nav_item"><a href="/">Star Wars</a></li>
        <li id="nav_item"><a href="/people">People</a></li>
        <li id="nav_item"><a href="/planets">Planets</a></li>
        <li id="nav_item" class="active"><a href="/films">Films</a></li>
      </ul>

      <div class="sidebar">
        <ul>
          {Object.keys(films).map(key => {
            return <li id="sidebar_item"><Link to={`${url}/${key}`}>{films[key].title}</Link></li>
          })}
        </ul>
      </div>

      <div class="content">
        <Route path={`${path}/:filmPage`} component={FilmPage} />
      </div>

    </div>

  );

}

export default FilmsPage;
