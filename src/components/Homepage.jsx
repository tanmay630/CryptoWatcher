import React,{useState, useEffect} from 'react'
import { NextUIProvider, Card, Text,Button, Grid, Col, Row, Divider, Spacer} from '@nextui-org/react';
import Cryptocurrencies from './Cryptocurrencies';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import millify from 'millify';
import './Homepage.css';
import News from '../components/News';

const Homepage = () => {
      const [data, setdata] = useState({});
      const [loading, setloading] = useState(true);
      const fetchdata = async () => {
        const baseUrl = "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
        
       try {
          await axios.get(baseUrl,{"method": "GET",
          "headers": {
            "x-rapidapi-host": "coinranking1.p.rapidapi.com",
            "x-rapidapi-key": "eff063dbdcmsh73fcafa7fcb3b77p132986jsn1258bc7b9fa3"
          }})
          .then((response) => {
            setdata(response.data.data.stats);
            console.log(data);
          })
       } catch(error) {
            console.log(error);
       }
     }
    
     useEffect(() => {
       fetchdata()
   
     },[])
       
 
  return (
   <>

<div className='stats-container'>
<Text h1 size={30} css={{textGradient:'45deg, $yellow500 -20%, $red500 100%',margin:'50px', marginLeft:'1px'}} weight="bold">Global Crypto Stats</Text>
     <Row xs={24} sm={12} lg={6}>
     <Col span={15}>
     <h3 className='text-decoration'>Total Crytocurrencies</h3>
      <p>{data.total}</p>
     </Col>
     <Col span={12}>
     <h3 className='text-decoration'>Total Exchanges</h3>
     <p>{data.totalExchanges}</p>
     </Col>
     <Col span={12}>
     <h3 className='text-decoration'>Total Market Cap</h3>
     
     <p>{data.totalMarketCap}</p>
     </Col>
     </Row>
     <Row>
     <Col span={7.4}>
     <h3 className='text-decoration'>Total 24h Volume</h3>
     <p>{data.total24hVolume}</p>
     </Col>
     <Col span={12}>
     <h3 className='text-decoration'>Total Markets</h3>
     <p>{data.totalMarkets}</p>
     </Col>
     </Row>
</div>

   <section className='crypto-container'>
       <div className='crypto-header'>
         <h2>Top 10 Cryptocurrencies</h2>
            <a>Show more</a>
       </div>
     <Cryptocurrencies simplified/> 
   </section>
     
     <section className='news-container'>
        <News simplified/>      
     </section>

  
   </>
  )
}

export default Homepage;
