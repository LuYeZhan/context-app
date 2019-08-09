import React from 'react';
import './App.css';
import Home from './components/Home'
import InformationProvider from './contexts/information-context'

function App() {
  return (
    <InformationProvider>
    <div className="App">
      <Home />
    </div>
    </InformationProvider>
  );
}

export default App;
