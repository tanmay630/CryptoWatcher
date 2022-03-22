import React,{useState, useEffect} from 'react'
import { NextUIProvider, Card, Text,Button, Grid, Col, Row, Divider, Spacer} from '@nextui-org/react';
import Cryptocurrencies from './Cryptocurrencies';
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import axios from 'axios';
import millify from 'millify';

const Homepage = () => {
      const [datas, setdatas] = useState({});
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
            setdatas(response.data.data.stats);
            console.log(datas);
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
     
   <Text h1 size={40} css={{textGradient:'45deg, $blue500 -20%, $pink500 50%',margin:'185px', marginLeft: '138px', marginBottom:'20px'}} weight="bold">Global Crypto Stats</Text>

  <div className='stats-container bg-blur'>
       <Row xs={24} sm={12} lg={6}>
       <Col span={15}>
       <h3 className='text-decoration'>Total Crytocurrencies</h3>
        <p>{datas.total}</p>
       </Col>
       <Col span={12}>
       <h3 className='text-decoration'>Total Exchanges</h3>
       <p>{datas.totalExchanges}</p>
       </Col>
       <Col span={12}>
       <h3 className='text-decoration'>Total Market Cap</h3>
       
       <p>{datas.totalMarketCap}</p>
       </Col>
       </Row>
       <Row>
       <Col span={7.4}>
       <h3 className='text-decoration'>Total 24h Volume</h3>
       <p>{datas.total24hVolume}</p>
       </Col>
       <Col span={12}>
       <h3 className='text-decoration'>Total Markets</h3>
       <p>{datas.totalMarkets}</p>
       </Col>
       </Row>
  </div>

     <Row>
         <Text h2 size={30} css={{
           textGradient: '45deg, $yellow500 -20%, $red500 100%', margin: "20px"
         }} weight="bold">Top 10 Crytocurrencies in the world</Text>
           <Row justify='flex-end'>
         <Text h3 size={25} color="primary" css={{
           margin:"20px"
         }}>Show more</Text>
         </Row>
     </Row>

      <Cryptocurrencies/>

     <Row>
     <Text h2 size={30} css={{
           textGradient: '45deg, $yellow500 -20%, $red500 100%', margin: "20px"
         }} weight="bold">Top 10 Crypto News</Text>
           <Row justify='flex-end'>
         <Text h3 size={25} color="primary" css={{
           margin:"20px"
         }}>Show more</Text>
         </Row>
     </Row>
   </>
  )
}

export default Homepage;
