import '../styles/poetry_screen.css'

import React, {useState} from 'react';
import Col from 'react-bootstrap/Col';

const Poetry = ({info}) => {

  const [isActive, setIsActive] = useState(false);
  const [poetry, setPoetry] = useState(info !== null ? info : null)

  const likeClicked = () => {
    setIsActive(prevActive => !prevActive);
    if (isActive) {
      setPoetry(prevPoetry => ({...prevPoetry, likes: prevPoetry.likes - 1}));
    }
    else {
      setPoetry(prevPoetry => ({...prevPoetry, likes: prevPoetry.likes + 1}));
    }

  };

  return (
      <Col md={6} xs={12} className="poetrys fade-in-text">
        <h1>
          {poetry.title}
        </h1>
        <div style={{marginBottom: 60}}>
          {
            poetry.content.map((line) => {
              return (
                line === "/br" ? 
                <br /> :
                <p>
                  {line}
                </p>)
            })
          }
          <svg onClick={() => {likeClicked()}} className={isActive ? "like-button liked" : "like-button ico"} width="24" height="24" viewBox="0 0 24 24">
            <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"></path>
          </svg>
          <span style={{display: "flex", flexDirection: 'row', justifyContent: "center", alignItems: "center"}}>
            {poetry.likes}
          </span>
        </div>
      </Col> 

  )
}

export default Poetry;