import React from 'react'

export default function Product() {
  return (
    <div>
      <div className="homeProducts  grid grid-cols-3 gap-5 my-10">
        <article className=' border shadow-lg rounded-md border-black max-w-52 p-5 ' >
          <div>
            <img src="#" alt="" />
            <h2>Product Title</h2>
          </div>
          <h3>$499</h3>
          <div>
            <h3>This is the product short details</h3>
          </div>


        </article>
        
      </div>
    </div>
  )
}
