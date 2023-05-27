import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { NavLink, useLocation } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AdsList from '../components/AdsList';

const MyAds = () => {
    return (
        <Container className='d-flex justify-content-center align-items-center'>
            <Container className='d-flex justify-content-center align-items-start mt-5' style={{ height: "100%", width: 900 }}>
                <h3>Вы не создавали Объявления</h3>
            </Container>
        </Container>

    )
}

export default MyAds;