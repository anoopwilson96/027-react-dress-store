import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './components/header';

function Root() {
  return (
    <>
    <header> <Header/> </header>

    <Outlet />
    
    <footer><h1>This is the Footer</h1></footer>
    
    </>
    
  )
}

export default Root