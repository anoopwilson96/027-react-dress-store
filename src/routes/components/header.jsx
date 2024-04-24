import React from 'react';
import {  Link } from 'react-router-dom';

export default function Header() {
  return (
    <>

      <div className='header1  bg-orange-400'>
        <div  className="headerSection1 max-w-5xl mx-auto flex flex-1 flex-row justify-between align-middle p-4 gap-2">
        <div className="logoImage">
          <img className='h-8 w-15' src="/logo.png" alt="Company Logo" />
        </div>
        <div>
          <Link to={'/home'}><h3 className=' font-bold '>MultiStore</h3> </Link>
          
        </div>
        <div>
          <input type="text" placeholder='search' className=' p-1 bg-zinc-50  border  border-red-600 rounded hover:border-dotted w-100 bg-transparent  ' />
        
        </div>

        </div>
      </div>
    </>
  );
}