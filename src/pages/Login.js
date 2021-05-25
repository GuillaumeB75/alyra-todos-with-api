import React from 'react'
import ColorModeContainer from '../components/ColorModeContainer'
import Navigation from '../components/Navigation'
import '../style/Login.css'

const account = () => {
  return (
    <ColorModeContainer>
      <div>
        <Navigation />
        <div className="Login">
          
          <button id="create" className='btn-add-account'>New account</button>
          <div>
            <label htmlFor="login" className='st-login'>Login</label>
            <input className="st-login-champs" type="text" id="login" />
          </div>
          <input className='btn-connect' type="submit" value="Connection" />
        </div>
          <div>
            <label htmlFor="password" className='st-password'>Password</label>
            <input className='st-password-champs' type="password" id="password" />
          </div>
      </div>
    </ColorModeContainer>
  )
}

export default account