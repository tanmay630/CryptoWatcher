import React from 'react'
import { NextUIProvider, Card, Text,Button, Grid, Col, Row, Divider, Spacer} from '@nextui-org/react';
import millify from 'millify';




   const Cards = ({ item })  => {
     

   return (
          <Card css={{mw: "250px"}} hoverable>
              <Card.Header>
                <Text>{item.name}</Text>
                <Row justify='flex-end'>
                  <img src={item.iconUrl} alt="image" className='image-container'/>
                </Row>
              </Card.Header>
              <Divider/>
              <Card.Body>
                <a>Price: {millify(item.price)}</a>
                <a>MarketCap: {millify(item.marketCap)}</a> 
                <a>Dailychanges: {millify(item.change)}</a>
              </Card.Body>


          </Card>
  )
      
       

  };


















export default Cards;
