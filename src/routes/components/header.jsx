import React from 'react';

export default function Header() {
  return (
    <>

      <div className='header1  bg-orange-400'>
        <div  className="headerSection1 container mx-auto flex flex-1 flex-row justify-between align-middle p-4 gap-2">
        <div className="logoImage">
          <img className='h-8 w-15' src="./public/logo.png" alt="Company Logo" />
        </div>
        <div>
          <h3 className=' font-bold '>DressStore</h3>
        </div>
        <div>
          <input type="text" placeholder='search' className=' p-1 bg-orange-200  border  border-sky-500 rounded hover:border-dotted w-100 bg-transparent  ' />
        
        </div>

        </div>
      </div>

      <div className="header2">
        <div>
          <nav></nav>
        </div>
      </div>
    </>
  );
}