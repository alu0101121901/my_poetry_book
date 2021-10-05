import React from 'react'

import './App.css'
import Header from './components/header'
import PoetryScreen from './components/poetry_screen'
import Footer from './components/footer'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <PoetryScreen />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
