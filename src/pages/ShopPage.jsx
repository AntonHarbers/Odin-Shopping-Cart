/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import ShopPageItem from '../components/ShopPageItem';
import Filter from '../components/Filter';

export default function ShopPage({
  productData,
  addToCart,
  cart,
  categoryFilter,
  setCategoryFilter,
  maxPriceFilter,
  setMaxPriceFilter,
  minReviewFilter,
  setMinReviewFilter,
}) {
  return (
    <div className=" bg-slate-300 overflow-y-hidden">
      <Navbar cart={cart} />
      <div className="flex">
        <Filter
          categoryFilter={categoryFilter}
          setCategoryFilter={setCategoryFilter}
          maxPriceFilter={maxPriceFilter}
          setMaxPriceFilter={setMaxPriceFilter}
          minReviewFilter={minReviewFilter}
          setMinReviewFilter={setMinReviewFilter}
        />
        <div className="flex w-[90%] h-[90vh] gap-10 pt-10 pb-10 flex-wrap ml-auto justify-center overflow-y-scroll">
          {productData != null ? (
            productData.map((product) => {
              if (
                categoryFilter != 'none' &&
                product.category != categoryFilter
              ) {
                return null;
              }
              if (product.price > maxPriceFilter) {
                return null;
              }
              if (product.rating.rate < minReviewFilter) {
                return null;
              }
              return (
                <ShopPageItem
                  key={product.id}
                  product={product}
                  addToCart={addToCart}
                />
              );
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
