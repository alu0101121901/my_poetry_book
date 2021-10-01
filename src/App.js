import React, { useState } from 'react';

import './App.css';
import Header from './components/header';
import PoetryScreen from './components/poetry_screen'

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <PoetryScreen />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
