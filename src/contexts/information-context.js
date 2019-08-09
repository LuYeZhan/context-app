import React, { Component } from 'react'

// Aqui creamos el contexto
const InformationContext = React.createContext();

class InformationProvider extends Component {
  state = {

    information: 'Some information',

  }
  render() {
    return (        
      // en el value es donde le pasamos los estados 
      <InformationContext.Provider value={this.state}>
        {/* nosotros vamos a englobar a App.js con nuestro provider
        por eso, hacemos this.props.children, children = todo lo que va dentro del componente, ejemplo <p> text </p>, todo lo que esta dentro de la p son los children */}
        {this.props.children}
      </InformationContext.Provider>
    )
  }
}

export default InformationProvider;