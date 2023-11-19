import React from 'react';
import { json, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Loading from '../components/Loading';

export default function Product() {
  const { itemId } = useParams();
  const [productData, setProductData] = useState(null);

  // fetch product data here
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/')
      .then((res) => res.json())
      .then((json) => {
        setProductData(json);
      });
  }, []);

  return (
    <div>
      <div>Hello {itemId}</div>
      {productData != null ? (
        itemId < productData.length ? (
          // render item info heress
          <div>{productData[itemId].title}</div>
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
