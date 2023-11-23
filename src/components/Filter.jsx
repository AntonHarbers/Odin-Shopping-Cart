/* eslint-disable react/prop-types */
export default function Filter({
  categoryFilter,
  setCategoryFilter,
  maxPriceFilter,
  setMaxPriceFilter,
  minReviewFilter,
  setMinReviewFilter,
}) {
  const HandleResetValue = () => {
    setCategoryFilter('none');
    setMaxPriceFilter(1000);
    setMinReviewFilter(0);
  };
  return (
    <div className="flex flex-col gap-5 pt-20 items-center justify-center border w-[10vw] min-w-[200px] text-center">
      <h1 className=" text-3xl">Filters</h1>
      {/* Category Filter */}
      <div className="flex flex-col gap-2 ">
        <h1>Category</h1>
        <select
          className="w-[8vw] min-w-[160px] rounded-md border-2 border-slate-400"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="none">All Categories</option>
          <option value="men's clothing">Mens Clothing</option>
          <option value="women's clothing">Womens Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>

      {/* Max Price Filter */}
      <div className="flex flex-col gap-2">
        <h1>Max Price {maxPriceFilter} $</h1>

        <input
          type="range"
          placeholder="Max Price"
          className="w-[8vw] min-w-[160px] rounded-md border-2 border-slate-400"
          min={0}
          max={1000}
          value={maxPriceFilter}
          onChange={(e) => setMaxPriceFilter(e.target.value)}
        />
      </div>
      {/* Review Filter */}
      <div className="flex flex-col gap-2">
        <h1>Min Review Score: {minReviewFilter} / 5 </h1>
        <input
          className="w-[8vw] min-w-[160px] rounded-md border-2 border-slate-400  "
          type="range"
          placeholder="Max Price"
          min={0}
          max={5}
          value={minReviewFilter}
          onChange={(e) => setMinReviewFilter(e.target.value)}
        />
      </div>
      <button
        onClick={HandleResetValue}
        className="bg-slate-400 hover:bg-slate-500 text-white rounded-md p-2 w-[8vw] min-w-[160px] active:bg-slate-400"
      >
        Reset Filters
      </button>
    </div>
  );
}
