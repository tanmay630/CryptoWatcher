import React from 'react';
import logo from '../assets/logo.png';

import { NextUIProvider, Text } from '@nextui-org/react';
function navbar() {
  return (
      <nav className="app_navbar">
       <div className="logo-container">
         <img src={logo} alt="logo" className="logo"/>
          <h2 className="text-decoration">Cryptowatcher</h2>
       </div>
       <ul className="app__navbar-links ">
         <li><a href="home">Home</a></li>
         <li><a href="crpto">crytocurrencies</a></li>
         <li><a href="exchanges">exchanges</a></li>
         <li><a href="news">news</a></li>
       </ul>
      </nav>
  )
}

export default navbar;