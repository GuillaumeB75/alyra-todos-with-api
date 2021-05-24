import React from 'react'
import ColorModeContainer from '../components/ColorModeContainer'
import Navigation from '../components/Navigation'
import '../style/Account.css'

const Account = () => {
  return (
    <ColorModeContainer>
      <div>
        <Navigation />
        <div className="Account">
          <h2>Account</h2>
          <button id="create" className='btn-add-account'>Création Compte</button>
          <div>
            <label htmlFor="login" className='st-login'>Login</label>
            <input className="st-login-champs" type="text" id="login" />
          </div>
          <div>
            <label htmlFor="password" className='st-password'>Password</label>
            <input className='st-password-champs' type="password" id="password" />
          </div>
          <input className='btn-connect' type="submit" value="Se connecter" />
        </div>
      </div>
    </ColorModeContainer>
  )
}

export default Account