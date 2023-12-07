/* eslint-disable react/prop-types */
import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Contact({ cart }) {
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [details, setDetails] = useState({
    name: '',
    email: '',
    message: '',
  });

  const UpdateDetails = (e) => {
    setDetails({ ...details, [e.target.id]: e.target.value });
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    setHasSubmitted(true);
    setDetails({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="flex flex-col bg-slate-300">
      <Navbar cart={cart} />
      {hasSubmitted ? (
        <div className="flex flex-col w-[95%] sm:w-[50%] justify-center items-center h-[70vh] sm:h-[90vh] m-auto gap-10">
          <h1 className=" text-3xl">Thanks for your message!</h1>
          <h1 className="">We will get back to you as soon as possible.</h1>
        </div>
      ) : (
        <div className=" h-[70vh] sm:h-[90vh] flex flex-col items-center justify-center gap-[2rem]">
          <h1 className=" text-6xl font-bold">Contact Us</h1>
          <div className=" w-[80%] sm:w-[40%] flex justify-center gap-[2rem]">
            <label
              htmlFor="name"
              className="hover:cursor-pointer w-[40%] text-xl"
            >
              Name
            </label>
            <input
              value={details.name}
              type="text"
              id="name"
              className="w-[60%] text-xl text-center h-[2rem] p-4 hover:shadow-lg active:shadow-lg"
              placeholder="Enter your name"
              onChange={UpdateDetails}
            />
          </div>
          <div className="  w-[80%] sm:w-[40%] flex justify-center gap-[2rem] text-xl">
            <label htmlFor="email" className="hover:cursor-pointer w-[40%]">
              E-Mail
            </label>
            <input
              value={details.email}
              type="text"
              id="email"
              className="w-[60%] text-xl h-[2rem] p-4 text-center  hover:shadow-lg active:shadow-lg"
              placeholder="Enter your email"
              onChange={UpdateDetails}
            />
          </div>
          <div className="  w-[80%] sm:w-[40%] flex justify-center gap-[2rem] text-xl">
            <label htmlFor="message" className="hover:cursor-pointer w-[40%]">
              Message
            </label>
            <textarea
              value={details.message}
              type="text"
              id="message"
              className=" w-[60%] h-52 p-2 resize-none text-xl hover:shadow-lg active:shadow-lg"
              onChange={UpdateDetails}
              placeholder="Enter your message"
            />
          </div>
          <button
            onClick={HandleSubmit}
            className="p-5 bg-green-600 rounded-md w-[23rem] hover:bg-green-300 active:bg-green-700 shadow-2xl text-white text-2xl hover:cursor-pointer hover:shadow-lg active:shadow-sm"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
