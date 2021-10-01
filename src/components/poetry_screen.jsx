/* import '../styles/poetry_screen.css'
 */
import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
  
const poetryArray = [
  {
    title: "Revolucionaria",
    content: ["Latidos que borran fronteras", 
    "mirada que refleja libertad,", 
    "su piel como color de mi bandera", 
    "y su voz como mi himno nacional."],
  },

  {
    title: "Revolucionaria",
    content: ["Latidos que borran fronteras", 
    "mirada que refleja libertad,", 
    "su piel como color de mi bandera", 
    "y su voz como mi himno nacional."],
  },
  {
    title: "Revolucionaria",
    content: ["Latidos que borran fronteras", 
    "mirada que refleja libertad,", 
    "su piel como color de mi bandera", 
    "y su voz como mi himno nacional."],
  },

  {
    title: "Revolucionaria",
    content: ["Latidos que borran fronteras", 
    "mirada que refleja libertad,", 
    "su piel como color de mi bandera", 
    "y su voz como mi himno nacional."],
  },

]



const PoetryScreen = () => {

  return (
    <Container fluid>
      <Row>
        {
          poetryArray.map((poetry, index) => {
            return (
              <Col md={6} xs={12} key={index}>
                <h1>
                  {poetry.title}
                </h1>
                {poetry.content.map((line) => {
                  return (<p>
                    {line}
                  </p>)
                })}
              </Col> 
            );
          })
        }
      </Row>
    </Container>
  )
}

export default PoetryScreen;