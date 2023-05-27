import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { NavLink, useLocation } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import AdsList from '../components/AdsList';

const AdsMore = ()=>{
    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <Form className='d-flex flex-column' lg='2'>

                </Form>
            </Card>
        </Container>
    )
}

export default AdsMore;