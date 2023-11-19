import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../styles/App.css';

function App() {
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
      <Navbar />
      {/* {productData != null ? <div>{productData[0].title}</div> : null} */}
      <div>React Shopping Cart Demo</div>
    </div>
  );
}

export default App;
