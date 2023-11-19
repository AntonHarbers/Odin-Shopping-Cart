import React, { useEffect, useState } from 'react';
import App from '../pages/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import ShopPage from '../pages/ShopPage';
import Item from '../pages/Item';
import Product from '../pages/Product';

export default function NavRouter() {
  const [productData, setProductData] = useState(null);

  // fetch product data here
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => {
        setProductData(json);
        console.log(json);
      });
  }, []);

  // Here go the routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App productData={productData} />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'shop',
      element: <ShopPage productData={productData} />,
    },
    {
      path: 'product/:itemId',
      element: <Product productData={productData} />,
      children: [{ index: true, element: <Item /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}
