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
        <div className="flex flex-col w-[600px] justify-center items-center h-[90vh] m-auto gap-10">
          <h1 className=" text-3xl">Thanks for your message!</h1>
          <h1 className="">We will get back to you as soon as possible.</h1>
        </div>
      ) : (
        <div className="h-[90vh] flex flex-col items-center justify-center gap-[2rem]">
          <h1 className=" text-4xl font-bold">Contact Us</h1>
          <div className=" w-auto flex justify-center gap-[2rem]">
            <label htmlFor="name" className="hover:cursor-pointer w-[6rem]">
              Name
            </label>
            <input
              value={details.name}
              type="text"
              id="name"
              className="w-[15rem]"
              onChange={UpdateDetails}
            />
          </div>
          <div className=" w-auto flex justify-center gap-[2rem]">
            <label htmlFor="email" className="hover:cursor-pointer w-[6rem]">
              E-Mail
            </label>
            <input
              value={details.email}
              type="text"
              id="email"
              className="w-[15rem]"
              onChange={UpdateDetails}
            />
          </div>
          <div className=" w-auto flex justify-center gap-[2rem]">
            <label htmlFor="message" className="hover:cursor-pointer w-[6rem]">
              Message
            </label>
            <textarea
              value={details.message}
              type="text"
              id="message"
              className=" w-[15rem] h-52 p-2 resize-none"
              onChange={UpdateDetails}
            />
          </div>
          <button
            onClick={HandleSubmit}
            className="p-5 bg-green-600 rounded-md w-[23rem] hover:bg-green-300 active:bg-green-700"
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
}
