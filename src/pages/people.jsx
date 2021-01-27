import React from 'react';


const PeoplePage = (data) => {

  return (

    <div>
      <ul class="nav_list">
        <li id="homepage"><a href="/">Star Wars</a></li>
        <li class="active"><a href="/people">People</a></li>
        <li><a href="/planets">Planets</a></li>
        <li><a href="/films">Films</a></li>
      </ul>

      <div class="sidebar">
      </div>

    </div>

  );
};


class People extends React.Component {

  constructor(props) {
    super();
    this.state = {
      data: '',
    }
  }

  componentDidMount() {
    fetch('./data/people.json')
      .then(function(resp) {
        return resp.json();
      })
      .then(function(data) {
        console.log(data);
      });
  }


  render() {
    return <PeoplePage data={this.data} />;
  }

}

export default People;
