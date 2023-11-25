/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Notification from '../components/Notification';

export default function Cart({
  productData,
  cart,
  notification,
  notificationTimer,
  Checkout,
  removeFromCart,
}) {
  const totalPrice = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].amount;
    }
    return total;
  };

  return (
    <div>
      {notificationTimer > 0 && <Notification notification={notification} />}
      <Navbar cart={cart} />
      <div className="display flex bg-slate-300 h-[70vh] sm:h-[90vh] flex-col justify-start pt-10 text-center overflow-scroll pb-10">
        <h1 className=" text-6xl">Cart</h1>

        {cart.length == 0 ? (
          <div className="text-2xl mt-10">Your cart is empty</div>
        ) : (
          <div>
            <div className="grid grid-cols-4 mt-10 w-[80%] ml-auto mr-auto">
              <div></div>
              <h1 className=" text-start font-bold">Amount</h1>

              <h1 className=" text-start font-bold">Product</h1>
              <h1 className=" text-end font-bold">Price</h1>
            </div>
            <br />
            {cart.map((item) => {
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-4 text-left w-[80%] ml-auto mr-auto mt-5 border-b-2 border-slate-500 pb-2"
                >
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-300 text-xl text-white p-2 rounded-md w-[40px] h-[40px] flex items-center justify-center transition-all duration-75 hover:bg-red-500 active:bg-red-200"
                  >
                    X
                  </button>
                  <h1 className="text-start text-xl">{item.amount}</h1>

                  <Link
                    className=" underline text-xl text-slate-900 hover:text-blue-400"
                    to={`/product/${parseInt(item.id - 1)}`}
                  >
                    {productData[item.id - 1].title}
                  </Link>
                  <h1 className="text-end text-xl font-bold">
                    {(item.price * item.amount).toFixed(2)} $
                  </h1>
                </div>
              );
            })}
            <br />
            <div className="text-end text-2xl font-bold w-[90%]">
              Total: {totalPrice().toFixed(2)} $
            </div>
            <button
              className="bg-green-500 text-white p-2 rounded-md w-[80%] ml-auto mr-auto mt-10 hover:bg-green-300 active:bg-green-200 duration-75 transition-all"
              onClick={Checkout}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
