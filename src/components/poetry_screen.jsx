import '../styles/poetry_screen.css'

import React, {useEffect, useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Poetry from './poetry';
  
const poetryArray = [
  {
    title: "Revolucionaria",
    content: ["Latidos que borran fronteras.", 
    "Mirada que refleja libertad.",
    "Su piel como color de mi bandera", 
    "y su voz como mi himno nacional.",
    "/br",
    "Pasos que dejan grandes huellas,",
    "manos que albergan en un amplio hogar",
    "y en su espalda residen las estrellas",
    "que mis yemas ansían tanto conquistar.",
    "/br",
    "Su regazo regala una enorme trinchera",
    "que me reguarda de todo mal",
    "y en sus abrazos encuentro la tregua",
    "frente a cualquier pensamiento radical.",
    "/br",
    "En sus ojos, eterno esbozo de sinceridad.",
    "Contra ella perdería toda guerra,",
    "pues a su vera obtengo la mayor paz",
    "que se pueda sentir sobre La Tierra."],
    likes: 12645,
  },

]

/**
 * 
 * @returns Displayinf list of Poetrys registered on the Database
 */
const PoetryScreen = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }, []);

  return (
    <Container>
      {loading 
        ?
        <div id="barcontainer">
          <div id="meter"></div>
        </div> 
        :
        <Row>
          {
            poetryArray.map((poetry, index) => {
              return (
                <Poetry info={poetry} key={index} />
              );
            })
          }
        </Row>
        }
    </Container>
  )
}

export default PoetryScreen;