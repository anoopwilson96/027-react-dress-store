import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Product from './routes/product';
import HomeProducts, { loader as productsLoader } from './routes/components/homeProducts';
import Home from './routes/home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
         element: <Home/>,
         loader: productsLoader 
      },
      {
        path: "/products",
        path: "/",
         element: <HomeProducts/>,
         loader: productsLoader 
      },
      {
        path: "products/:productId",
        element: <Product/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
