import React from 'react';
import logo from './logo.png';
import { Link } from "react-router-dom";


const MainPage = () => {

  return (

    <div>
      <ul class="nav_list">
        <li class="active" id="homepage"><a href="/">Star Wars</a></li>
        <li><a href="/people">People</a></li>
        <li><a href="/planets">Planets</a></li>
        <li><a href="/films">Films</a></li>
      </ul>
      <img class="logo" src={logo} />
    </div>

  );

};

export default MainPage;
