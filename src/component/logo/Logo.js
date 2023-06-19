import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { SiUpwork } from "react-icons/si";

const Logo = () => {
  return (
    <section className="mt-20">
      <div className="flex items-center justify-center gap-5 text-5xl text-pink-main lg:hidden">
        <BsGithub />
        <BsLinkedin />
        <SiUpwork />
      </div>
    </section>
  );
};

export default Logo;
