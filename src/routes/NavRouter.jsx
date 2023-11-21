import { useEffect, useState } from 'react';
import App from '../pages/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import ShopPage from '../pages/ShopPage';
import Item from '../pages/Item';
import Product from '../pages/Product';
import Cart from '../pages/Cart';

export default function NavRouter() {
  const [productData, setProductData] = useState(null);
  const [cart, setCart] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState('none');
  const [maxPriceFilter, setMaxPriceFilter] = useState(1000);
  const [minReviewFilter, setMinReviewFilter] = useState(0);

  // fetch product data here
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => {
        setProductData(json);
      });
  }, []);

  const addToCart = (amount, price, productId) => {
    // if item is already in the cart update the amount otherwise add it to the cart as new item
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == productId) {
        cart[i].amount = parseInt(amount) + parseInt(cart[i].amount);
        setCart([...cart]);
        return;
      }
    }

    const item = {
      id: productId,
      amount: amount,
      price: price,
    };

    setCart([...cart, item]);
  };

  // Here go the routes
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App productData={productData} cart={cart} />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/cart',
      element: <Cart productData={productData} cart={cart} />,
    },
    {
      path: 'shop',
      element: (
        <ShopPage
          productData={productData}
          addToCart={addToCart}
          cart={cart}
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          maxPriceFilter={maxPriceFilter}
          setMaxPriceFilter={setMaxPriceFilter}
          minReviewFilter={minReviewFilter}
          setMinReviewFilter={setMinReviewFilter}
        />
      ),
    },
    {
      path: 'product/:itemId',
      element: (
        <Product productData={productData} addToCart={addToCart} cart={cart} />
      ),
      children: [{ index: true, element: <Item /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}
