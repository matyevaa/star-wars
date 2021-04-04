import React from 'react';
import logo from './logo.png';
import { Link } from "react-router-dom";


const MainPage = () => {

  return (

    <div>
      <ul class="nav_list">
        <li id="nav_item" class="active"><a href="/star-wars">Star Wars</a></li>
        <li id="nav_item"><a href="/people">People</a></li>
        <li id="nav_item"><a href="/planets">Planets</a></li>
        <li id="nav_item"><a href="/films">Films</a></li>
      </ul>
      <img class="logo" src={logo} />
    </div>

  );

};

export default MainPage;
