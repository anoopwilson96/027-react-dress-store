import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';

function Root() {
  return (
    <>
    <header> <Header/> </header>

    <Outlet />
    
    <footer><Footer/></footer>
    
    </>
    
  )
}

export default Root