import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { NavLink, useLocation } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import AdsList from '../components/AdsList';

const Ads = ()=>{
    return(
        <Container>
            <Row className='mt-4'>
                <Col md={3}>
                    <h4>Фильтр</h4>
                </Col>

                <Col md={9}>
                    <h3>Объявления</h3>
                    <AdsList/>
                </Col>
            </Row>
        </Container>
    )
}

export default Ads;