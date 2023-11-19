export default function ShopPageItem({ product }) {
  return (
    <div className="shopPageItemContainer">
      <div className="shopPageItemTitle">{product.title}</div>
      <img
        className="shopPageItemImage"
        src={product.image}
        alt={product.title}
      />
      <div className="shopPageItemPrice">{product.price} $</div>
      <div className="shopPageItemRating">
        {product.rating.rate} / 5 | {product.rating.count} reviews
      </div>
    </div>
  );
}
