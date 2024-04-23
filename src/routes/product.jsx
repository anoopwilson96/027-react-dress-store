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
      <div className="homeProducts  my-10">



        <article className=' border shadow-lg rounded-md border-black  p-5 m-5 ' >
          <div>
            <img src={product.image} alt="" />
            <h2>{product.title}</h2>
          </div>
          <h3>$ {product.price}</h3>
          <div>
            <h3>{product.description}</h3>
          </div>


        </article>
        
      </div>
    </div>
  )
}
