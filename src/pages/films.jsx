import React from 'react';

const FilmsPage = () => {

  return (

    <div>
      <ul class="nav_list">
        <li id="homepage"><a href="/">Star Wars</a></li>
        <li><a href="/people">People</a></li>
        <li><a href="/planets">Planets</a></li>
        <li class="active"><a href="/films">Films</a></li>
      </ul>

      <div class="sidebar">
        <a href="#">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">5</a>
      </div>
    </div>

  );

};

export default FilmsPage;
