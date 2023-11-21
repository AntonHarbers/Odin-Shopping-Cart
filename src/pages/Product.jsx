/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
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
  const [amount, setAmount] = useState(1);

  const handleAmountChange = (e) => {
    if (e < 1 || e > 100) return;
    setAmount(e.target.value);
  };

  return (
    <div className=" bg-slate-300">
      {notificationTimer > 0 && <Notification notification={notification} />}
      <Navbar cart={cart} />
      {productData != null ? (
        itemId < productData.length ? (
          // render item info heress
          <div className="flex flex-col h-[90vh] gap-10 justify-center items-center">
            <div className="w-auto justify-center text-center text-5xl">
              {productData[itemId].title}
            </div>
            <div className="flex ml-auto mr-auto gap-20">
              <img
                className="justify-center h-80 w-auto ml-auto mr-auto border-slate-500 rounded-md border-8"
                src={productData[itemId].image}
                alt={productData[itemId].title}
              />
              <div className="flex flex-col justify-center gap-5">
                <div className="w-auto text-center text-4xl">
                  {productData[itemId].price} $
                </div>
                <div className="w-auto text-sm text-center">
                  {productData[itemId].rating.rate} / 5 |{' '}
                  {productData[itemId].rating.count} reviews
                </div>
                <div className="w-80">{productData[itemId].description}</div>
              </div>
            </div>

            <div className="flex gap-2 m-10 ml-auto mr-auto">
              <input
                type="number"
                min={1}
                max={100}
                onChange={handleAmountChange}
                value={amount}
                className="text-center w-10 h-10 rounded-sm"
              />
              <button
                onClick={() =>
                  addToCart(
                    amount,
                    productData[itemId].price,
                    parseInt(itemId) + 1
                  )
                }
                className="bg-green-500 w-52 h-10 rounded-md text-white hover:bg-green-300 duration-75 active:bg-green-700 transition-all"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ) : (
          <div className="h-[90vh] flex justify-center items-center text-4xl">
            Oops, looks like we have an error: 101 Incorrect Item ID
          </div>
        )
      ) : (
        <Loading />
      )}
      <div></div>
    </div>
  );
}
