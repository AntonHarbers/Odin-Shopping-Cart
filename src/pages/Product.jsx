/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';

export default function Product({ productData, cart }) {
  const { itemId } = useParams();

  return (
    <div>
      <Navbar cart={cart} />
      <div>Hello {itemId}</div>
      {productData != null ? (
        itemId < productData.length ? (
          // render item info heress
          <div>
            <div className="w-auto justify-center text-center">
              {productData[itemId].title}
            </div>
            <img
              className="justify-center"
              src={productData[itemId].image}
              alt={productData[itemId].title}
            />
            <div className="w-auto text-center">
              {productData[itemId].price} $
            </div>
            <div className="w-auto text-sm text-center">
              {productData[itemId].rating.rate} / 5 |{' '}
              {productData[itemId].rating.count} reviews
            </div>
          </div>
        ) : (
          <div>Incorrect Item ID</div>
        )
      ) : (
        <Loading />
      )}
      <div></div>
    </div>
  );
}
