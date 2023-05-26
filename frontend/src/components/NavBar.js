import React, { useContext } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ADS_ROUTE, CHAT_ROUTE, LOGIN_ROUTE, MYADS_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
const NavBar = observer(() => {
    const  user  = false //useContext(Context)

    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
            <Container style={{height:50}}>
                <Navbar.Brand onClick={() => navigate(`${ADS_ROUTE}`)}>SkillSwap</Navbar.Brand>

                {user.isAuth ?
                    <Nav className="ml-auto">
                        <Nav.Link onClick={() => navigate(`${ADS_ROUTE}`)} >Объявления</Nav.Link>
                        <Nav.Link onClick={() => navigate(`${CHAT_ROUTE}`)} >Чаты</Nav.Link>
                        <Nav.Link onClick={() => navigate(`${MYADS_ROUTE}`)}>Мои объявления</Nav.Link>

                        <Button variant='outline-light' onClick={() => navigate(`${LOGIN_ROUTE}`)}>Выйти</Button>
                        <Button variant='outline-light' onClick={() => navigate(`${PROFILE_ROUTE}`)}>Аккаунт</Button>

                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Nav.Link onClick={() => navigate(`${ADS_ROUTE}`)} >Объявления</Nav.Link>
                        <Nav.Link onClick={() => navigate(`${REGISTRATION_ROUTE}`)}>Зарегистрироваться</Nav.Link>
                        <Nav.Link onClick={() => navigate(`${LOGIN_ROUTE}`)}>Войти</Nav.Link>

                        <Button variant='outline-light' onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>

                }

            </Container>
        </Navbar>
    )
})

export default NavBar;