/* eslint-disable react/prop-types */
export default function Filter({
  categoryFilter,
  setCategoryFilter,
  maxPriceFilter,
  setMaxPriceFilter,
  minReviewFilter,
  setMinReviewFilter,
}) {
  return (
    <div className="flex flex-col gap-5 pt-20 items-center border w-[10vw] min-w-[200px] text-center">
      <h1>Filters</h1>
      {/* Category Filter */}
      <div className="flex flex-col gap-2">
        <h1>Category:</h1>
        <select
          defaultValue={categoryFilter}
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
        <h1>Max Price:</h1>

        <span>{maxPriceFilter} $</span>

        <input
          type="range"
          placeholder="Max Price"
          min={0}
          max={1000}
          value={maxPriceFilter}
          onChange={(e) => setMaxPriceFilter(e.target.value)}
        />
      </div>
      {/* Review Filter */}
      <div className="flex flex-col gap-2">
        <h1>Min Review Score: </h1>
        <span>{minReviewFilter} / 5</span>
        <input
          type="range"
          placeholder="Max Price"
          min={0}
          max={5}
          value={minReviewFilter}
          onChange={(e) => setMinReviewFilter(e.target.value)}
        />
      </div>
    </div>
  );
}
