import React from 'react'
import { useLoaderData } from 'react-router-dom';

export async function loader({params}){
  const response= await fetch('https://fakestoreapi.com/products/'+ params.productId)
  const product = await response.json() 
  return{product}
}

export default function Product() {
  const {product} = useLoaderData()
  console.log(product)

  return (
    <div>
      <div className="homeProducts mx-0 flex flex-row align-middle justify-center ">



        <article className='max-w-96 flex flex-col justify-start align-middle  products border shadow-lg rounded-md border-black  p-5 m-5 ' >
          <div>
            <img className='mx-5' src={product.image} alt="" />
            <h2 className='font-bold m-2 text-lg' >{product.title}</h2>
          </div>
          <h3 className='font-semibold m-2'>$ {product.price}</h3>
          <div>
            <h3>{product.description}</h3>
          </div>
          <div className=' my-5 flex flex-row align-middle gap-3'>
              <button className='bg-orange-300 p-2 rounded-md' >Add to Cart</button>
              <button className='bg-orange-400 p-2 rounded-md' >Buy Now</button>
            </div>
  


        </article>
        
      </div>
    </div>
  )
}
