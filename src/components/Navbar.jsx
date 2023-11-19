import { Link } from 'react-router-dom';

export default function Navbar() {
  const routes = [
    { name: 'Home', route: '/' },
    { name: 'Shop', route: '/shop' },
    { name: 'Item', route: '/product/12' },
  ];

  return (
    <nav>
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
