/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Navbar from '../components/Navbar';

function App({ productData, cart }) {
  if (productData === null) {
    return <Loading />;
  }

  console.log(productData);

  let randomItemNumber = [
    Math.floor(Math.random() * productData.length),
    Math.floor(Math.random() * productData.length),
    Math.floor(Math.random() * productData.length),
  ];

  return (
    <div>
      <Navbar cart={cart} />
      <div className="display flex bg-slate-300  h-[70vh] sm:h-[90vh] flex-col justify-start pt-10 text-center">
        <h1 className=" text-6xl">Fake Store dot COM</h1>
        <p className="text-2xl mt-10">
          Welcome to the fake store. Take a look around and add things to your
          cart. Enjoy!
        </p>
        <div className="flex flex-col mt-20 ">
          <h2 className=" text-4xl">Popular Items:</h2>
          <div className="flex flex-col gap-0 justify-start sm:flex-row sm:gap-1 mt-5 w-[80%] ml-auto mr-auto sm:justify-evenly">
            {randomItemNumber.map((item) => {
              {
                console.log(item);
              }
              return (
                <Link key={item} to={`/product/${item}`}>
                  <div className="flex flex-col gap-2 items-center h-[20rem] justify-start sm:justify-end">
                    <img
                      src={`${productData[item].image}`}
                      alt="hotttestItemImage"
                      className="w-32 h-auto ml-auto mr-auto rounded-xl"
                    />
                    <p className=" bg-white w-32 rounded-xl ">
                      {productData[item].price}
                    </p>
                    <p className=" w-32 h-10 overflow-hidden max-h-10">
                      {productData[item].title}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        {/* Text about the store */}
        {/* Some Images */}
      </div>
    </div>
  );
}

export default App;
