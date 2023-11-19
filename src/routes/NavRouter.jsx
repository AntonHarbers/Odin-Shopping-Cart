import React from 'react';
import App from '../pages/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import ShopPage from '../pages/ShopPage';
import Item from '../pages/Item';

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
      path: 'shop/:itemId',
      element: <ShopPage />,
      children: [{ index: true, element: <Item /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}
