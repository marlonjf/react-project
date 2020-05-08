import React, { Component } from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchField: '',
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
      response.json();
    })
    .then(users => {
      this.setState({ robots: users})
    })

  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  render() {
    const filteresRobots = this.state.robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    })
    return(
      <div className='tc'>
        <h1>Robofriends</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteresRobots} />
      </div>
    );
  }
}

export default App;
