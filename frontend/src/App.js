import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import FooterBar from './components/Footer';
import AppRouter from './components/AppRouter';
// import AppRouter from './components/AppRouter';
// import NavBar from './components/NavBar';

const App = ()=>{
  return(
    <BrowserRouter>
      <NavBar />
      <AppRouter />

      <FooterBar/>
    </BrowserRouter>
  )
}

export default App;
