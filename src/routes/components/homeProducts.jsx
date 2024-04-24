import React from 'react'
import { useLoaderData, Link } from 'react-router-dom';


export async function loader () {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  return { data }
}

export default function HomeProducts() {

  const {data} = useLoaderData();
  console.log(data)

  
  return (
    <div>

      <div className='bg-zinc-400 flex flex-row align-middle justify-center p-4 '> <h1  className=''>Our popular products </h1></div>
      <div className="homeProducts  grid grid-cols-3 gap-5 m-5">
        {
          data.map(product=>(
            <article key={product.id} className='border  shadow-lg rounded-md border-black p-5 ' >
            
            <div>
              <img src={product.image} alt="" />
              <Link to={'/products/' + product.id} ><h2 className='font-bold m-3' >{product.title}</h2> </Link>
            </div>
            <h3 className='font-semibold m-2' >$ {product.price}</h3>
            <div>
              <h3 className=' m-2' >{product.description}</h3>
            </div>
            <div className=' m-4 flex flex-row align-middle justify-between gap-3'>
              <button className='bg-orange-300 p-2 rounded-md' >Add to Cart</button>
              <button className='bg-orange-400 p-2 rounded-md' >Buy Now</button>
            </div>
  
  
          </article>
 

         ))

        }

    </div>    
    </div>
  )
}
