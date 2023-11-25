/* eslint-disable react/prop-types */
import Navbar from '../components/Navbar';

function App({ cart }) {
  return (
    <div>
      <Navbar cart={cart} />
      <div className="display flex bg-slate-300  h-[70vh] sm:h-[90vh] flex-col justify-start pt-10 text-center">
        <h1 className=" text-6xl">Fake Store dot COM</h1>
        <p className="text-2xl mt-10">
          Welcome to the fake store. Take a look around and add things to your
          cart. Enjoy!
        </p>
        {/* Text about the store */}
        {/* Some Images */}
      </div>
    </div>
  );
}

export default App;
