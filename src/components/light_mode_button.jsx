import React, { useState } from 'react'

import '../styles/light_mode_button.css'

/**
 * @returns Button that switch the light mode on the webpage
 */
const LightModeButton = () => {
  // El estado de modo oscuro debe estar como contexto. color noche -> #252850
  const [isDarkMode, setIsDarkMode] = useState(false)

  const handleClickLightMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className='sticky-button'>
      <div onClick={() => { handleClickLightMode() }} className={isDarkMode ? 'dark retro rbtn-small' : 'light retro rbtn-small'}>
        {isDarkMode ? 'MODO CLARO' : 'MODO OSCURO'}
      </div>
    </div>
  )
}

export default LightModeButton
