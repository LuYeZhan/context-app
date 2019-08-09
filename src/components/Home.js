import React, { Component } from 'react';
import CardsList from './CardsList';


class Home extends Component {
  state = {
    information: 'some information'
  
  }

  render() {
    const {information} = this.state
    return (
      <div>
        <p> Home component: {this.state.information} </p>
        <CardsList information= {information} />
      </div>
    )
  }
}

export default Home;