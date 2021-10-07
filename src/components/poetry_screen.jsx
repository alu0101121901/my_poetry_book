import '../styles/poetry_screen.css'

import React, { useEffect, useState } from 'react'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Poetry from './poetry'
import { getAll } from '../services/poetrys'

/**
 * @returns Displaying list of Poetrys registered on the Database
 */
const PoetryScreen = () => {
  const [loading, setLoading] = useState(false)
  const [poetryArray, setPoetryArray] = useState([])

  useEffect(() => {
    setLoading(true)
    getAll().then((poetrys) => {
      setPoetryArray(poetrys)
      // Smooth loading animation
      setTimeout(() => {
        setLoading(false)
      }, 1100)
    })
  }, [])

  return (
    <Container className="poetrys-container">
      {loading ? (
        <div id="barcontainer">
          <div id="meter">
            <p style={{ marginTop: 8 }}>Cargando...</p>
          </div>
        </div>
      ) : (
        <Row>
          {poetryArray.map((poetry, index) => {
            return <Poetry info={poetry} key={index} />
          })}
        </Row>
      )}
    </Container>
  )
}

export default PoetryScreen
