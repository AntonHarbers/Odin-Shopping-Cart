import { useEffect, useState } from 'react';
import App from '../pages/App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage';
import ShopPage from '../pages/ShopPage';
import Item from '../pages/Item';
import Product from '../pages/Product';
import Cart from '../pages/Cart';

export default function NavRouter() {
  const getCartFromStorage = () => {
    const cart = localStorage.getItem('cart');
    if (cart == null) return [];
    return JSON.parse(cart);
  };

  const [productData, setProductData] = useState(null);
  const [cart, setCart] = useState(getCartFromStorage());
  const [categoryFilter, setCategoryFilter] = useState('none');
  const [maxPriceFilter, setMaxPriceFilter] = useState(1000);
  const [minReviewFilter, setMinReviewFilter] = useState(0);
  const [notificationTimer, setNotificationTimer] = useState(0);
  const [notification, setNotification] = useState('');

  // fetch product data here
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => {
        setProductData(json);
      });
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (notificationTimer > 0) {
      setTimeout(() => {
        setNotificationTimer(notificationTimer - 1);
      }, 1000);
    }
  });

  const removeFromCart = (productId) => {
    const newCart = cart.filter((item) => item.id != productId);
    setCart(newCart);

    if (notificationTimer > 0) return;
    setNotificationTimer(3);
    setNotification(`Item removed from cart`);
  };

  const addToCart = (amount, price, productId) => {
    if (amount == 0 || amount == null) return;
    if (price == 0 || price == null) return;
    if (productId == null) return;
    // if item is already in the cart update the amount otherwise add it to the cart as new item
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id == productId) {
        cart[i].amount = parseInt(amount) + parseInt(cart[i].amount);
        setCart([...cart]);

        if (notificationTimer > 0) return;
        setNotificationTimer(1);
        setNotification(`Item added to cart`);
        return;
      }
    }

    const item = {
      id: productId,
      amount: amount,
      price: price,
    };

    setCart([...cart, item]);
    if (notificationTimer > 0) return;
    setNotificationTimer(1);
    setNotification(`Item added to cart`);
  };

  const Checkout = () => {
    setCart([]);
    setNotificationTimer(2);
    setNotification(`Checkout successful`);
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
      element: (
        <Cart
          productData={productData}
          cart={cart}
          notification={notification}
          notificationTimer={notificationTimer}
          Checkout={Checkout}
          removeFromCart={removeFromCart}
        />
      ),
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
          notificationTimer={notificationTimer}
          notification={notification}
        />
      ),
    },
    {
      path: 'product/:itemId',
      element: (
        <Product
          productData={productData}
          addToCart={addToCart}
          cart={cart}
          notification={notification}
          notificationTimer={notificationTimer}
        />
      ),
      children: [{ index: true, element: <Item /> }],
    },
  ]);

  return <RouterProvider router={router} />;
}
