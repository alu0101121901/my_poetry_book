import React from 'react'
import Route from 'react-router'
import '../styles/footer.css'

/**
 * @returns Component that displays the page footer.
 */
const Footer = () => {
  return (
    <>
      Página diseñada por{' '}
      <a
        target="_blank"
        className="profile"
        href="https://www.linkedin.com/in/rcaglez"
        rel="noopener noreferrer"
      >
        Rafael Cala
      </a>
      <br />
      Aplicación <strong>MERN</strong>
    </>
  )
}

export default Footer
