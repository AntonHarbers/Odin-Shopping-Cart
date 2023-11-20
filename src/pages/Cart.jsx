/* eslint-disable react/prop-types */
import Navbar from '../components/Navbar';

export default function Cart({ productData, cart }) {
  const totalPrice = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].amount;
    }
    return total;
  };

  return (
    <div>
      <Navbar cart={cart} />
      <div className="display flex bg-slate-300 h-[calc(100vh-100px)] flex-col justify-start pt-10 text-center">
        <h1 className=" text-6xl">Cart</h1>

        {cart.length == 0 ? (
          <div className="text-2xl mt-10">Your cart is empty</div>
        ) : (
          <div>
            <div className="grid grid-cols-3 mt-10 w-[80%] ml-auto mr-auto">
              <h1 className=" text-start font-bold">Amount</h1>

              <h1 className=" font-bold">Product</h1>
              <h1 className=" text-end font-bold">Price</h1>
            </div>
            <br />
            {cart.map((item) => {
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-3 text-left w-[80%] ml-auto mr-auto mt-5 border-b-2 border-slate-500 pb-2"
                >
                  <h1 className="text-start">{item.amount}</h1>

                  <h1>{productData[item.id - 1].title}</h1>
                  <h1 className="text-end">{item.price * item.amount} $</h1>
                </div>
              );
            })}
            <br />
            <div className="text-end text-2xl font-bold w-[80%]">
              Total price: {totalPrice()} $
            </div>
            <button>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}
