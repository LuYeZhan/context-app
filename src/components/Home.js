import React from 'react';
import CardsList from './CardsList';
import {InformationContext} from '../contexts/information-context'


const Home = () => {

  return (
    <InformationContext.Consumer>
      {value => (

        <div>
          <p> Home component: {value.state.information} </p>
          <CardsList />
        </div>

      )}
    </InformationContext.Consumer>
      
  );
  }


export default Home;