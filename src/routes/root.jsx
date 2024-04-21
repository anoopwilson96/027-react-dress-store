import React from 'react'
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
    <header><h1> This will be header</h1> </header>
    <Outlet />
    <footer><h1>This is the Footer</h1></footer>
    
    </>
    
  )
}

export default Root