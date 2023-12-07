/* eslint-disable react/prop-types */
import { Link, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';
import Notification from '../components/Notification';
import { useState } from 'react';

export default function Product({
  productData,
  addToCart,
  cart,
  notification,
  notificationTimer,
}) {
  const { itemId } = useParams();
  const [popUp, setPopUp] = useState(false);

  const [amount, setAmount] = useState(1);

  const handleAmountChange = (e) => {
    if (e < 1 || e > 100) return;
    setAmount(e.target.value);
  };

  return (
    <div className=" bg-slate-300">
      {notificationTimer > 0 && <Notification notification={notification} />}
      <Navbar cart={cart} />
      {popUp && (
        <div className="absolute z-40 gap-20 left-[20vw] top-[20vh] w-[60vw] h-[70vh] bg-slate-100 bg-opacity-30 flex flex-col justify-center items-center">
          <div className=" font-bold text-2xl">
            Thank you for shopping with us!
          </div>
          <div className="flex gap-10">
            <Link
              className="bg-green-500 w-40 flex justify-center items-center text-center h-10 rounded-md text-white hover:bg-green-300 duration-75 active:bg-green-700 transition-all"
              to={`/shop`}
            >
              Back to Shop
            </Link>
            <Link
              className="bg-green-500 w-40 h-10 text-center flex justify-center items-center  rounded-md text-white hover:bg-green-300 duration-75 active:bg-green-700 transition-all"
              to={`/cart`}
            >
              Go to Checkout
            </Link>
          </div>
        </div>
      )}
      {productData != null ? (
        itemId < productData.length ? (
          // render item info heress
          <div
            className={`flex ${
              popUp && 'blur-lg'
            } flex-col h-[90vh] gap-10 justify-center items-center transition-all duration-200 `}
          >
            <h1 className="w-auto max-w-[80%] justify-center text-center text-5xl">
              {productData[itemId].title}
            </h1>
            <div className="flex ml-auto mr-auto gap-20">
              <img
                className="justify-center h-80 w-auto ml-auto mr-auto shadow-custom rounded-md p-5 bg-white"
                src={productData[itemId].image}
                alt={productData[itemId].title}
              />
              <div className="flex flex-col justify-center gap-5">
                <div className="w-auto text-sm text-center">
                  {productData[itemId].rating.rate} / 5 |{' '}
                  {productData[itemId].rating.count} reviews
                </div>
                <div className="w-80">{productData[itemId].description}</div>
                <div className="flex justify-between">
                  <div className="w-auto text-center text-4xl">
                    {(productData[itemId].price * amount).toFixed(2)} $
                  </div>
                  <input
                    type="number"
                    min={1}
                    max={100}
                    onChange={handleAmountChange}
                    value={amount}
                    className="text-center w-10 h-10 rounded-sm"
                  />
                </div>
                <button
                  onClick={() => {
                    addToCart(
                      amount,
                      productData[itemId].price,
                      parseInt(itemId) + 1
                    );
                    setPopUp(true);
                  }}
                  className="bg-green-500 w-auto h-10 rounded-md text-white hover:bg-green-300 duration-75 active:bg-green-700 transition-all"
                >
                  Add To Cart
                </button>
              </div>
            </div>

            <div className="flex gap-2 m-10 ml-auto mr-auto"></div>
          </div>
        ) : (
          <div className="h-[90vh] flex justify-center items-center text-4xl">
            Oops, looks like we have an error: 101 Incorrect Item ID
          </div>
        )
      ) : (
        <Loading />
      )}
    </div>
  );
}
