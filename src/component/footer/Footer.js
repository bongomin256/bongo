import React from "react";
// import Logo from "../logo/Logo";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";

const Footer = () => {
  return (
    <section className="px-5 py-20 border-t-2 border-pink-main text-center mt-28 md:px-12 lg:px-20">
      <div className="mb-8 md:flex md:justify-between ">
        <div className="mb-8 md:text-start">
          <h3 className="text-2xl text-white mb-2">Godfrey (Bongo) Bongomin</h3>
          <p className="text-pink-main italic capitalize">
            front-end / web developer
          </p>
        </div>
        <div className="flex  justify-center gap-10 text-4xl text-pink-main md:gap-6">
          <a
            href="https://github.com/bongomin256"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
          <a
            href="https://linkedin.com/in/godfrey-bongomin/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>

          <a href="http://" target="_blank" rel="noopener noreferrer">
            <SiUpwork />
          </a>
        </div>
      </div>
      <p className="text-md"> Copyright 2023 | Made by Bongo</p>
    </section>
  );
};

export default Footer;
