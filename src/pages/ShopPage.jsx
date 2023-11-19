import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import ShopPageItem from '../components/ShopPageItem';

export default function ShopPage({ productData }) {
  return (
    <div className=" bg-slate-300 overflow-y-hidden">
      <Navbar />
      <div className="flex">
        <div className=" flex flex-grow border border-red-500 text-center justify-center pt-10">
          {' '}
          Filters
        </div>
        <div className="flex w-[80%] h-[90vh] gap-20 pt-10 pb-10 flex-wrap ml-auto justify-center overflow-y-scroll">
          {productData != null ? (
            productData.map((product) => {
              return <ShopPageItem key={product.id} product={product} />;
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>

      <Outlet />
    </div>
  );
}
