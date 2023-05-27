import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { NavLink, useLocation } from 'react-router-dom'
import Row from 'react-bootstrap/Row';
import {useHttp} from "../hooks/http.hooks";
import { useNavigate } from 'react-router-dom';


const Auth = () => {
    const LOGIN_ROUTE = '/login';
    const REGISTRATION_ROUTE = '/registration';

    const {request} = useHttp();
    const navigate = useNavigate()

    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [form, setForm] = useState({
        email: '', password: ''
    });

    const changeHandler = event => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const click = async () => {
        if (isLogin) {
            console.log(form)
            const response = request(`/api/auth/login`, 'POST', {...form})

        } else {
            // const response = await registration(email, password)
            // console.log(response)

        }
    }

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
                        id='email'
                        name='email'
                        placeholder='Введите ваш email...'
                        value={form.email}
                        onChange={changeHandler}
                    >
                    </Form.Control>

                    <Form.Control
                        className='mt-3'
                        id='password'
                        name='password'
                        placeholder='Введите ваш пароль...'
                        value={form.password}
                        onChange={changeHandler}
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
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button> */}
                    </Row>
                </Form>
            </Card>
        </Container>
    )
}

export default Auth;