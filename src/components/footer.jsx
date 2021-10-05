import React from 'react'
import '../styles/footer.css'
import Container from 'react-bootstrap/esm/Container'

/**
 * @returns Component that displays the page footer.
 */
const Footer = () => {
  return (
    <div className="footer">
      Página diseñada por{' '}
      <a className="profile" href="www.linkedin.com/in/rcaglez">
        Rafael Cala
      </a>
      <br />
      Aplicación <strong>MERN</strong>
    </div>
  )
}

export default Footer
