import React, { useState } from 'react';

import './App.css';
import Header from './components/header';
import PoetryScreen from './components/poetry_screen';
import LightModeButton from './components/light_mode_button';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      { /* Modificar tamaño de la letra */}
      <PoetryScreen />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
