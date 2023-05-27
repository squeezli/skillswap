import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import FooterBar from './components/Footer';
import AppRouter from './components/AppRouter';
import {useRoutes} from './routes';
// import NavBar from './components/NavBar';

const App = ()=>{
  const routes = useRoutes();
  return(
    <BrowserRouter>
      <NavBar />
        {routes}
      <FooterBar/>
    </BrowserRouter>
  )
}

export default App;
