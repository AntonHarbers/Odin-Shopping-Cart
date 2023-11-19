import { useState } from 'react';
import { Link, Route, useLocation, useParams } from 'react-router-dom';
import { CartIcon } from '../utils/icons';

export default function Navbar() {
  const routes = [
    { name: 'Home', route: '/' },
    { name: 'Shop', route: '/shop' },
  ];

  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  console.log(path);
  return (
    <nav className="flex border w-full h-[10vh] bg-slate-200 border-cyan-100 items-center text-center gap-6 justify-center ">
      {routes.map((route) => {
        return (
          <Link
            className={`${
              path == route.route && ' text-slate-500'
            } text-4xl transition-all hover:text-slate-500`}
            key={route.name}
            to={route.route}
          >
            {route.name}
          </Link>
        );
      })}
      <Link to={'/Cart'}>
        <CartIcon />
      </Link>
    </nav>
  );
}
