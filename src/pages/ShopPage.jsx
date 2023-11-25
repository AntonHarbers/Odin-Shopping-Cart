/* eslint-disable react/prop-types */
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Loading from '../components/Loading';
import ShopPageItem from '../components/ShopPageItem';
import Filter from '../components/Filter';
import Notification from '../components/Notification';
import { useState } from 'react';
import { HideIcon, ShowIcon } from '../utils/icons';

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
  notificationTimer,
  notification,
}) {
  const [filtersOPen, setFilersOpen] = useState(false);

  const HandleToggleFilterView = (e) => {
    e.preventDefault();
    setFilersOpen(!filtersOPen);
  };

  return (
    <div className=" bg-slate-300 overflow-y-hidden">
      {notificationTimer > 0 && <Notification notification={notification} />}
      <button
        className="absolute top-[32vh] sm:top-[12vh] left-2 h-6 w-6 text-slate-500 hover:text-slate-800 active:text-slate-400"
        onClick={HandleToggleFilterView}
      >
        {filtersOPen ? <HideIcon /> : <ShowIcon />}
      </button>

      <Navbar cart={cart} />
      <div className="flex">
        {filtersOPen && (
          <Filter
            categoryFilter={categoryFilter}
            setCategoryFilter={setCategoryFilter}
            maxPriceFilter={maxPriceFilter}
            setMaxPriceFilter={setMaxPriceFilter}
            minReviewFilter={minReviewFilter}
            setMinReviewFilter={setMinReviewFilter}
          />
        )}

        <div
          className={`flex ${
            filtersOPen ? 'w-[90%]' : 'w-full'
          } h-[70vh] sm:h-[90vh] gap-10 pt-10 pb-10 flex-wrap ml-auto justify-center overflow-y-scroll`}
        >
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
