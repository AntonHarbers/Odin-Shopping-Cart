/* eslint-disable react/prop-types */
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ShopPageItem({ product, addToCart }) {
  const [amount, setAmount] = useState(1);

  const incrementAmount = () => {
    if (amount > 100) return;
    setAmount(amount + 1);
  };

  const decrementAmount = () => {
    if (amount <= 1) return;
    setAmount(amount - 1);
  };

  return (
    <div className="  flex flex-col justify-start items-center p-2  ">
      <Link
        to={`/product/${product.id - 1}`}
        className="flex flex-col w-48 h-72  hover:cursor-pointer p-2 bg-white hover:shadow-green-800 border rounded-md mb-2 shadow-custom"
      >
        <div className="w-auto justify-center h-10 overflow-clip truncate text-ellipsis font-bold">
          {product.title}
        </div>
        <div className="justify-center h-40 flex items-center m-2">
          <img
            src={product.image}
            alt={product.title}
            className="w-30 h-auto max-h-36"
          />
        </div>

        <div className="w-auto text-center h-10 font-bold">
          {product.price.toFixed(2)} $
        </div>
        <div className="w-auto text-sm text-center h-10">
          {product.rating.rate.toFixed(1)} / 5.00 | {product.rating.count}{' '}
          reviews
        </div>
      </Link>
      <div className="flex items-center justify-center gap-3">
        <input
          className="text-center w-10"
          type="number"
          max={100}
          min={1}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button
          className=" bg-slate-400 rounded-sm w-5 h-5 text-center flex justify-center items-center hover:bg-green-200 active:bg-slate-300"
          onClick={incrementAmount}
        >
          +
        </button>
        <button
          className=" bg-slate-400 rounded-sm w-5 h-5 text-center flex justify-center items-center hover:bg-red-200 active:bg-slate-300"
          onClick={decrementAmount}
        >
          -
        </button>
      </div>

      <button
        className=" bg-[#317042] pl-3 pr-3 pt-2 pb-2 m-2 text-white rounded-md hover:bg-[#1c3b24] active:bg-green-500 shadow-button"
        onClick={() => {
          addToCart(amount, product.price, product.id);
          setAmount(1);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
}
