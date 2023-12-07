/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { CartIcon } from '../utils/icons';

export default function Navbar({ cart }) {
  const routes = [
    { name: 'Home', route: '/' },
    { name: 'Shop', route: '/shop' },
    { name: 'About', route: '/about' },
    { name: 'Contact', route: '/contact' },
  ];

  const location = window.location;

  return (
    <nav className=" sm:flex-row flex-col flex border w-full h-[30vh] sm:h-[10vh] bg-white shadow-2xl items-center text-center gap-6 p-10 sm:p-0 justify-center">
      {routes.map((route) => {
        return (
          <Link
            className={`${
              location.pathname == route.route
                ? ' text-slate-900'
                : 'text-slate-400'
            } text-4xl transition-all hover:text-slate-900`}
            key={route.name}
            to={route.route}
          >
            {route.name}
          </Link>
        );
      })}

      <Link
        className={`absolute right-10 ${cart.length > 0 && 'top-[24px]'}  `}
        to={'/Cart'}
      >
        <CartIcon />
        {cart.length > 0 && (
          <div className="relative top-[-3rem] right-[-2rem] text-xs text-red-500 rounded-xl w-5 h-5">
            {cart.length}
          </div>
        )}
      </Link>
    </nav>
  );
}
