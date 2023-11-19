import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function ShopPage() {
  // takes the itemId part of the url in /shop/itemId for use in the component

  return (
    <div>
      <Navbar />
      <div>Shop</div>
      <Outlet />
    </div>
  );
}
