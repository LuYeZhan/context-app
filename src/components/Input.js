import React from 'react';
import {InformationContext} from '../contexts/information-context';

function Input() {
  return (

    <InformationContext.Consumer>
      {value => (

        <div>
          <p>Input Component: {value.state.information}</p>
          <input type='text' name='newInformation' onChange={
            (event) => {
              value.changeInformation(event.target.value);
            }
          } />
        </div>

      )}
    </InformationContext.Consumer>

  )
}

export default Input
