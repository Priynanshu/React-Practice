import React, { useContext, useState } from 'react'
import Nav2 from './Nav2'
import { ThemeDataContext } from '../context/ThemeContext'

const Navbar = () => {
  
  return (
    <div className='nav'>
        <h1>Priyansh</h1>
        <Nav2 />
    </div>
  )
}

export default Navbar