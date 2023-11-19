import { Link } from 'react-router-dom';

export default function Navbar() {
  const routes = [
    { name: 'Home', route: '/' },
    { name: 'Shop', route: '/shop' },
  ];

  return (
    <nav className="flex border w-full h-24 border-cyan-100 items-center gap-6 justify-center ">
      {routes.map((route) => {
        return (
          <Link key={route.name} to={route.route}>
            {route.name}
          </Link>
        );
      })}
    </nav>
  );
}
