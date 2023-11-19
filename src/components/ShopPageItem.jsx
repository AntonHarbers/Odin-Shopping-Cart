import { Link } from 'react-router-dom';

export default function ShopPageItem({ product }) {
  return (
    <Link
      to={`/product/${product.id - 1}`}
      className="flex flex-col w-44  hover:cursor-pointer p-5"
    >
      <div className="w-auto justify-center text-center">{product.title}</div>
      <img className="justify-center" src={product.image} alt={product.title} />
      <div className="w-auto text-center">{product.price} $</div>
      <div className="w-auto text-sm text-center">
        {product.rating.rate} / 5 | {product.rating.count} reviews
      </div>
    </Link>
  );
}
