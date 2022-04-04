import { Grid, Row, Col, Card  } from '@nextui-org/react';
import React, {useState, useEffect} from 'react'
import axios from 'axios';
import moment from 'moment';
import '../components/News.css';

const News = ({simplified}) => {
    
   const [newsdata, setnewsdata] = useState({});
    const count = simplified ? 8 : 100; 
   const fetchnews = async () => {

     const basenewsurl = 'https://bing-news-search1.p.rapidapi.com/news/search';
              try {
                axios.get(basenewsurl, {
                  method: 'GET',
                  params: {q: 'Cryptocurrency', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off',count: count},
                  headers: {
                    'X-BingApis-SDK': 'true',
                    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
                    'X-RapidAPI-Key': 'eff063dbdcmsh73fcafa7fcb3b77p132986jsn1258bc7b9fa3'              
              }})
               .then((response) => {
                 console.log(response.data);
                 setnewsdata(response.data);
               }) 

             } catch(error) {
                console.log(error)
              }

   }

  useEffect(() => {
    fetchnews()
  },[])
 
  if(!newsdata?.value) return '..loading';
 
  return (
      <>
    <h1>Crypto news</h1>
       <Grid.Container gap={5} justify="center">
          {newsdata.value.map((newsitem) => (
            <Grid xs={12} md={3}>
              <Card hoverable className='news-card'>
                <a href={newsitem?.url} target="_blank" rel="noreferrer">
                  <div className='news-image-container'>
                      <h2 className='news-title'>{newsitem.name}</h2>
                      <img className='news-img' src={newsitem?.image?.thumbnail?.contentUrl} alt=""/>
                  </div>
                  <p className='description'>{newsitem.description.length > 100 ? `${newsitem.description.substring(0, 100)}...` : newsitem.description}</p>
                  <div className='provider-container'>
                    <div>
                      <img className='bottom-img' src={newsitem.provider[0]?.image?.thumbnail?.contentUrl} alt=""/>
                      <h4>{newsitem.provider[0]?.name}</h4>
                    </div>
                    <h4>{moment(newsitem.datePublished).startOf('ss').fromNow()}</h4>
                  </div>
                </a>  
              </Card>
            </Grid>
          ))}    
      
       </Grid.Container>
      </> 
    
  )};

export default News
