/* eslint-disable react/prop-types */
import { Link, useLocation } from 'react-router-dom';
import { CartIcon } from '../utils/icons';

export default function Navbar({ cart }) {
  const routes = [
    { name: 'Home', route: '/' },
    { name: 'Shop', route: '/shop' },
  ];

  console.log(cart);

  const location = useLocation();
  return (
    <nav className="flex border w-full h-[10vh] bg-slate-200 border-cyan-100 items-center text-center gap-6 justify-center ">
      {routes.map((route) => {
        return (
          <Link
            className={`${
              location.pathname == route.route && ' text-slate-500'
            } text-4xl transition-all hover:text-slate-500`}
            key={route.name}
            to={route.route}
          >
            {route.name}
          </Link>
        );
      })}
      <Link
        className={`relative ${cart.length > 0 && 'top-[10px]'}`}
        to={'/Cart'}
      >
        <CartIcon />
        {cart.length > 0 && (
          <div className="relative top-[-3rem] right-[-2rem] text-xs text-red-500 border-2 border-red-500 rounded-xl w-5 h-5">
            {cart.length}
          </div>
        )}
      </Link>
    </nav>
  );
}
