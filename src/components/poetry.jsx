/* import '../styles/poetry_screen.css'
 */
import React, {useState} from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';




const Poetry = ({info, ppp}) => {

  console.log(ppp);

  return (
    <>
      <h1>
        {info.title}
      </h1>
    </>
  )
}

export default Poetry;