import React, { useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { useNavigate } from 'react-router-dom';
// import { PRODUCT_ROUTE } from '../utils/consts';

const AdsItem = ({ad})=>{
    const navigate = useNavigate()
    return (
        <Card style={{padding:0}} className='m-2'>
          <Card.Header as="h5">{ad.name}</Card.Header>
          <Card.Title className='m-3 mb-0'>Рейтинг: 4.5</Card.Title>
          <Card.Body>
            <Card.Text>
              {ad.description}
            </Card.Text>

            <Button variant="outline-primary">Подробнее</Button>
          </Card.Body>
        </Card>
    )
}
export default AdsItem;