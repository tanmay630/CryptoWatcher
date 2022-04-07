
import React, {useState, useEffect} from 'react'
import {Card, Text, Grid, Row, Divider, Input} from '@nextui-org/react';
import axios from 'axios';
import '../components/Cryptocurrencies.css';
import millify from 'millify';
import News from '../components/News';


const  Cryptocurrencies = ({simplified}) =>  {
  const [coindata, setcoindata] = useState([]);
  const [searchterm, setsearchterm] = useState('');
  const count = simplified ? 10 : 100;
  const basecoinurl = `https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=${count}&offset=0`;
  
  
  const fetchcoins = async () => {   
          try {
             axios.get(basecoinurl,{

              "method": "GET",
              "headers": {
                "x-rapidapi-host": "coinranking1.p.rapidapi.com",
                "x-rapidapi-key": "eff063dbdcmsh73fcafa7fcb3b77p132986jsn1258bc7b9fa3"
            }})
            .then((response) => {
              setcoindata(response.data.data.coins);
              console.log(coindata);
            })
          } catch(error) {
            console.log(error);
          }   
    }

    useEffect(() => {
      fetchcoins()
      
    },[])
     
    const filteredData = coindata?.filter((coin) => coin.name.toLowerCase().includes(searchterm.toLowerCase()));
   
 
  return (
    <> 

      {!simplified ? <div className='search-crypto'>
        <Input placeholder='Search Cryptocurrency' onChange={(e) => setsearchterm(e.target.value)}/>
     </div> :  "" }
    
         

       {searchterm ?   <div className='cards-container'>
       <Grid.Container gap={5}>
                  {filteredData.map((item) => (
                    <Grid xs={12} md={3} >
                          <Card css={{mw: "250px"}} hoverable>
              <Card.Header>
                <Text>{item.name}</Text>
                <Row justify='flex-end'>
                  <img src={item.iconUrl} alt="image" className='image-container'/>
                </Row>
              </Card.Header>
              <Divider/>
              <Card.Body>
                <a className='stats-text'>Price: {millify(item.price)}</a>
                <a className='stats-text'>MarketCap: {millify(item.marketCap)}</a> 
                <a className='stats-text' >Dailychanges: {millify(item.change)}</a>
              </Card.Body>
                  </Card>
                    </Grid>
                  ))};
       </Grid.Container>
         </div> :    <div className='cards-container'>
       <Grid.Container gap={5}>
                  {coindata.map((item) => (
                    <Grid xs={12} md={3} >
                          <Card css={{mw: "250px"}} hoverable>
              <Card.Header>
                <Text>{item.name}</Text>
                <Row justify='flex-end'>
                  <img src={item.iconUrl} alt="image" className='image-container'/>
                </Row>
              </Card.Header>
              <Divider/>
              <Card.Body>
                <a className='stats-text'>Price: {millify(item.price)}</a>
                <a className='stats-text'>MarketCap: {millify(item.marketCap)}</a> 
                <a className='stats-text' >Dailychanges: {millify(item.change)}</a>
              </Card.Body>
                  </Card>
                    </Grid>
                  ))};
       </Grid.Container>
         </div> }



      
         
          
      </>   
            
  )
}

export default Cryptocurrencies
