import { Grid } from '@nextui-org/react';
import React, {useState, useEffect} from 'react'
import Cards from './card';
import axios from 'axios';


const  Cryptocurrencies = () =>  {
  const [coindata, setcoindata] = useState([]);
  const fetchcoins = async () => {
     const basecoinurl = "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0";
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
 
  return (
        <div className='cards-container'>
       <Grid.Container gap={5}>

                  {coindata.map((item) => (
                    <Grid xs={12} md={3} >
                        <Cards item={item} />  
                    </Grid>
                  ))};
                      
             
         
       </Grid.Container>
         </div>

  )
}

export default Cryptocurrencies
