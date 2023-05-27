import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { NavLink, useLocation } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
// import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
const Auth = () => {
const LOGIN_ROUTE = '/login';
const REGISTRATION_ROUTE = '/login';
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const click = async () => {
    //     if (isLogin) {
    //         const response = await login()

    //     } else {
    //         const response = await registration(email, password)
    //         console.log(response)

    //     }
    // }


    return (
        <Container
            className="d-flex justify-content-center align-items-center"
            style={{ height: window.innerHeight - 54 }}
        >
            <Card style={{ width: 600 }} className="p-5">
                <h2 className='m-auto'>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                <Form className='d-flex flex-column' lg='2'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш email...'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    >
                    </Form.Control>

                    <Form.Control
                        className='mt-3'
                        placeholder='Введите ваш пароль...'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                    >
                    </Form.Control>
                    <Row className='d-flex'>
                        {isLogin ?

                            <div className='d-flex flex-row justify-content-between mt-3 pl-3 pr-3'>
                                <p>
                                    Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}> Зарегистрируйся!</NavLink>
                                </p>
                                <Button style={{ height: 40 }} variant='outline-success'  >Войти</Button>
                            </div>

                            :

                            <div className='d-flex flex-row justify-content-between mt-3 pl-3 pr-3'>
                                <p>
                                    Есть аккаунт? <NavLink to={LOGIN_ROUTE}> Войдите!</NavLink>
                                </p>
                                <Button style={{ height: 40 }} variant='outline-success' >Регистрация</Button>
                            </div>
                        }
                        {/* <Button
                            variant='outline-success'
                            onClick={click}
                        >
                            {isLogin ? 'Войти': 'Регистрация'}
                        </Button> */}
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth;