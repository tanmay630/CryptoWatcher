import React from 'react';
import '../components/navbar.css';
import { NextUIProvider, Text } from '@nextui-org/react';
import { Link } from 'react-router-dom';



function navbar() {
  return (
   <div className='nav-container'>
        <Text h1 size={30}>
          <Link to= "/">CryptoWatcher</Link>      
        </Text>
        
            <nav  className='nav-links-container'>
              <Link to = "/">Home</Link>
              <Link to = "/cryptocurrencies">CryptoCurrencies</Link>
              <Link to = "/news">News</Link>   
           
            </nav>
          
    </div>
  )
}

export default navbar;