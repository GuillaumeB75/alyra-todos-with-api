import React from 'react'
import { NavLink } from "react-router-dom"
import "../style/Navigation.css"

const Navigation = () => {
  return (
    <div className='Navigation'>
      <ul>
        <NavLink to='/' className='nav-home' activeClassName="nav-active">
          Home
        </NavLink>
        <NavLink to='/Account' className='nav-account' activeClassName='nav-active'>
          Account
        </NavLink>
      </ul>
    </div>
  )
}

export default Navigation