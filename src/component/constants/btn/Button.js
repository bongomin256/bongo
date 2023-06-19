import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BiLinkAlt } from "react-icons/bi";

const Button = ({ children }) => {
  return (
    <button className="border-2 border-pink-main text-white px-4 py-1  flex items-center gap-2 lg:px-6 lg:py-2 lg:text-lg hover:bg-white hover:text-pink-main hover:border-none hover:scale-105 ease-in-out duration-300">
      {children} <HiOutlineExternalLink />
    </button>
  );
};

const Button1 = ({ children }) => {
  return (
    <button className="bg-pink-main text-white px-4 py-1 flex items-center gap-2 lg:px-6 lg:py-2 lg:text-lg hover:bg-white hover:text-bg-modal hover:scale-105 ease-in-out duration-300">
      {children} <BiLinkAlt />
    </button>
  );
};
const Button2 = ({ children }) => {
  return (
    <button className="bg-white text-bg-modal px-4 py-1 flex items-center gap-2 lg:px-6 lg:py-2 lg:text-lg hover:bg-pink-main hover:text-white hover:scale-105 ease-in-out duration-300">
      {children}
      <HiOutlineExternalLink />
    </button>
  );
};

const Button3 = ({ children }) => {
  return (
    <button className="bg-white text-pink-main px-4 py-1 flex items-center gap-2 lg:px-6 lg:py-2 lg:text-lg hover:border-2 hover:border-pink-main hover:text-white hover:bg-bg-main  hover:scale-105 ease-in-out duration-300">
      {children} <BiLinkAlt />
    </button>
  );
};
const Button4 = ({ children }) => {
  return (
    <button
      type="submit"
      className="bg-pink-main hover:bg-gray-main text-bg-modal px-4 py-1 flex items-center gap-2 lg:px-6 lg:py-2 lg:text-lg"
    >
      {children}
    </button>
  );
};

export { Button, Button1, Button2, Button3, Button4 };
