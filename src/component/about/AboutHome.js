import React from "react";
import myphoto from "../../assets/myphoto.jpeg";

//* React icons
import { FaCss3Alt, FaJs, FaReact, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const AboutHome = () => {
  return (
    <section className="px-5 md:flex md:flex-row-reverse md:gap-8 md:px-12 lg:px-32 lg:gap-32 mb-20">
      <img
        className="rounded-full w-[250px] h-[250px] m-auto mb-5 lg:w-[250px] lg:h-[250px] border-4 border-pink-main md:m-0 md:w-full"
        src={myphoto}
        alt=""
      />
      <div className="text-center md:text-start text-gray-main">
        <p className="mb-3">Hi! call me</p>
        <p className="mb-3 text-xl text-pink-main font-semibold">
          Godfrey <span className="text-white">(Bongo)</span> Bongomin
        </p>
        <div className="mb-8">
          <p>
            I am a{" "}
            <span className="text-pink-main">frontend web developer</span> with
            backend knowledge based in Seattle, WA. I design and develop
            responsive websites. I bring your ideas to life in the form of a web
            application by writing clean and precise codes.
          </p>
        </div>
        <div className="flex items-center justify-center md:justify-start">
          <p className="text-xl font-semibold">Stack |</p>
          <div className="flex gap-2 text-pink-main text-2xl">
            <FaCss3Alt />
            <FaJs />
            <FaReact />
            <FaHtml5 />
            <SiTailwindcss />
            <FaNodeJs />
            <GrMysql />
            <SiMongodb />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
