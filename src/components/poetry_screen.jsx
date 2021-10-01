import '../styles/poetry_screen.css'

import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Poetry from './poetry';
  
const poetryArray = [
  {
    title: "Revolucionaria",
    content: ["Latidos que borran fronteras", 
    "mirada que refleja libertad,",
    "su piel como color de mi bandera", 
    "y su voz como mi himno nacional."],
    likes: 0,
  },

  {
    title: "Revolucionaria",
    content: ["Latidos que borran fronteras", 
    "mirada que refleja libertad,", 
    "su piel como color de mi bandera", 
    "y su voz como mi himno nacional."],
    likes: 7,
  },
  {
    title: "Revolucionaria",
    content: ["Latidos que borran fronteras", 
    "mirada que refleja libertad,", 
    "su piel como color de mi bandera", 
    "y su voz como mi himno nacional."],
    likes: 9,
  },

  {
    title: "Revolucionaria",
    content: ["Latidos que borran fronteras", 
    "mirada que refleja libertad,", 
    "su piel como color de mi bandera", 
    "y su voz como mi himno nacional."],
    likes: 3,
  },

]

const PoetryScreen = () => {

  return (
    <Container fluid>
      <Row>
        {
          poetryArray.map((poetry, index) => {
            return (
              <Poetry info={poetry} key={index} />
            );
          })
        }
      </Row>
    </Container>
  )
}

export default PoetryScreen;