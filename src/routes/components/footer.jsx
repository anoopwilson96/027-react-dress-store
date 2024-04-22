import React from 'react'

export default function Footer() {
  return (
    <>

    <div className=' bg-orange-400 p-4'>
      <div  className="headerSection1 footer1 container mx-auto flex flex-1 flex-row justify-between align-middle p-4 gap-2">
      <div className="">
        <nav>
          <ul>
            <li><h3>Home</h3></li>
            <li><h3>About Us</h3></li>
            <li><h3>Contact Us</h3></li>
            <li><h3>Email Us</h3></li>
          </ul>
        </nav>

      </div>
      <div>
      <nav>
          <ul>
            <li><h3>Location</h3></li>
            <li><h3>Our stores</h3></li>
            <li><h3>New offers</h3></li>
            <li><h3>Seasonal sales</h3></li>
          </ul>
        </nav>
        
      </div>
      <div>
      <nav>
          <ul>
            <li><h3>Hiring</h3></li>
            <li><h3>Staff Discount</h3></li>
            <li><h3>Staff Login</h3></li>
            <li><h3>Report Us</h3></li>
          </ul>
        </nav>
      </div>
      </div>
    </div>

  </>
  )
}
