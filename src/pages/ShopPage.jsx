import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import ShopPageItem from '../components/ShopPageItem';

export default function ShopPage({ productData }) {
  return (
    <div>
      <Navbar />
      <div className="flex w-[80%] gap-20 pt-10 pb-10 flex-wrap m-auto justify-center min-h-screen">
        {productData != null ? (
          productData.map((product) => {
            return <ShopPageItem key={product.id} product={product} />;
          })
        ) : (
          <Loading />
        )}
      </div>

      <Outlet />
    </div>
  );
}
