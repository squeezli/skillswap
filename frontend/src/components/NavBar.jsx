import React, { useContext,useState } from 'react';
import { Context } from '../index';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { ADS_ROUTE, CHAT_ROUTE, LOGIN_ROUTE, MYADS_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { Button } from 'react-bootstrap';
import { observer } from 'mobx-react-lite';
import { useNavigate } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Offcanvas from 'react-bootstrap/Offcanvas';
const NavBar = observer(() => {


    const ADS_ROUTE = 'ads';
    const CHAT_ROUTE = 'chat';
    const LOGIN_ROUTE = 'login';
    const MYADS_ROUTE ='myads';


    const { user } = useContext(Context)
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate()
    return (
        <Navbar bg="dark" variant="dark">
            <Container className='d-flex justify-content-beetwin align-items-center ' >
                <Navbar.Brand onClick={() => navigate(`${ADS_ROUTE}`)}>SkillSwap</Navbar.Brand>

                {user.isAuth ?
                    <Nav className=' w-50 d-flex justify-content-beetwin align-items-center '>
                        <Nav.Link onClick={() => navigate(`${ADS_ROUTE}`)}>Объявления</Nav.Link>
                        <Nav.Link onClick={() => navigate(`${CHAT_ROUTE}`)}>Чаты</Nav.Link>
                        <Nav.Link style={{ whiteSpace: 'nowrap' }} onClick={() => navigate(`${MYADS_ROUTE}`)}>Мои Объявления</Nav.Link>

                        <Container className='d-flex justify-content-end align-items-center'>
                            <Button variant='outline-light' className='m-1' onClick={() => {user.setIsAuth(false);user.setUser(false); console.log(user); navigate(`${LOGIN_ROUTE}`)}}>Выйти</Button>

                            <Image onClick={handleShow } style={{ width: 45, height: 45, marginLeft: 10 }} src="https://logos.telegram-plus.com/channels/id-daily/telegram_logo.jpg" roundedCircle />
                            <Offcanvas show={show} onHide={handleClose} placement='end'>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>Профиль</Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                                    Some text as placeholder. In real life you can have the elements you
                                    have chosen. Like, text, images, lists, etc.
                                </Offcanvas.Body>
                            </Offcanvas>
                            
                            {/* <Button variant='outline-light' className='m-1' onClick={() => navigate(`${PROFILE_ROUTE}`)}>Аккаунт</Button> */}
                        </Container>
                    </Nav>

                    :
                    
                    <Nav className=' w-50 d-flex justify-content-beetwin align-items-center '>
                        <Nav.Link onClick={() => navigate(`${ADS_ROUTE}`)}>Объявления</Nav.Link>

                        <Container className='d-flex justify-content-end align-items-center'>
                            {/* <Button variant='outline-light' className='m-1' onClick={() => navigate(`${REGISTRATION_ROUTE}`)}>Зарегистрироваться</Button> */}
                            <Button variant='outline-light' className='m-1' onClick={() =>{ user.setIsAuth(true);navigate(`${LOGIN_ROUTE}`)}}>Авторизоваться</Button>
                        </Container>

                    </Nav>

                }

            </Container>
        </Navbar>
    )
})

export default NavBar;