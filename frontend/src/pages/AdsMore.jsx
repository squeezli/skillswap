import React from 'react';
import { Button, Container, Form, Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import AdsList from '../components/AdsList';

const AdsMore = () => {
    const navigate = useNavigate()

    const ADS_ROUTE = '/ads'

    return (
        <Container
            className="d-flex justify-content-center align-items-start mt-5"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: '90%' }} className="p-5 d-flex flex-row">
                <Col md={6} className='d-flex justify-content-center'>
                    <Image style={{ width: 240, height: 240 }} src="https://logos.telegram-plus.com/channels/id-daily/telegram_logo.jpg" roundedCircle></Image>
                </Col>

                <Col md={6}  className='d-flex align-items-start justify-content-center flex-column'>
                    <h3>Иванов Иван</h3>
                    <h5>Рейтинг: 4.5</h5>
                    Помогу с изучение Node, react, html, css, js, посмотрим на бд, пишите.
                    <Button variant='outline-dark' className='m-1 mt-4' onClick={() => navigate(`${ADS_ROUTE}`)}>Назад</Button>

                </Col>


            </Card>
        </Container>
    )
}

export default AdsMore;