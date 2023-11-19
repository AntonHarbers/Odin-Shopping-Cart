import React from 'react';
import App from '../pages/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import ShopPage from '../pages/ShopPage';
import Item from '../pages/Item';
import Product from '../pages/Product';

export default function NavRouter() {
  // Here go the routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: 'shop',
      element: <ShopPage />,
    },
    {
      path: 'product/:itemId',
      element: <Product />,
      children: [{ index: true, element: <Item /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}
