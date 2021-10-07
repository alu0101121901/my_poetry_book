import React, { useEffect, useState } from 'react'

import './App.css'
import Header from './components/header'
import PoetryScreen from './components/poetry_screen'
import Footer from './components/footer'

const App = () => {
  const [scrolling, setScrolling] = useState(false)
  const [scrollTop, setScrollTop] = useState(0)

  useEffect(() => {
    const onScroll = (e) => {
      setScrolling(
        e.target.documentElement.scrollTop >=
          e.target.documentElement.scrollHeight -
            e.target.documentElement.clientHeight -
            80
      )
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <PoetryScreen />
      </main>
      <footer className={scrolling ? 'scrolled' : 'not-scrolled'}>
        <Footer />
      </footer>
    </div>
  )
}

export default App
