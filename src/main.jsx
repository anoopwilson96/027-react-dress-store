import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Product, {loader as productLoader} from './routes/product';
import HomeProducts, { loader as productsLoader } from './routes/components/homeProducts';
import Home from './routes/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home",
         element: <Home/>,
         loader: productsLoader 
      },
      {
        path: "/home/products",  //tried just '/products' //still not working
        path: "/",
         element: <HomeProducts/>,
         loader: productsLoader 
      },
      {
        path: "products/:productId",
        element: <Product/>,
        loader: productLoader
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
