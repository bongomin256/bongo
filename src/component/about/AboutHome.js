import React from "react";
import myphoto from "../../assets/myphoto.jpeg";
import { motion } from "framer-motion";

//* React icons
import { FaCss3Alt, FaJs, FaReact, FaHtml5, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
// import { motion, useAnimation, useInView } from "framer-motion";

const AboutHome = () => {
  return (
    <section className="h-[70vh] px-5 mb-16  about md:flex md:flex-row-reverse md:gap-8 md:px-12 lg:px-32 lg:gap-32 lg:items-center">
      <motion.div
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -150 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <img
          className="rounded-full w-[250px] h-[250px] m-auto mb-5 lg:w-[250px] lg:h-[250px] border-4 border-pink-main md:m-0 md:w-full"
          src={myphoto}
          alt=""
        />
      </motion.div>

      <motion.div
        className="text-center md:text-start text-gray-main"
        // using motion from framer motion for aninamation
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="mb-3">Hi! call me</p>
        <p className="mb-3 text-2xl font-semibold text-pink-main">
          Godfrey <span className="text-white">(Bongo)</span> Bongomin
        </p>
        <div className="mb-8">
          <p className="text-lg leading-10 ">
            I am a{" "}
            <span className="text-pink-main">frontend web developer</span> with
            backend knowledge based in Seattle, WA. I design and develop
            responsive websites. I bring your ideas to life in the form of a web
            application by writing clean and precise codes.
          </p>
        </div>
        <motion.div
          className="flex items-center justify-center md:justify-start"
          // using motion from framer motion for aninamation
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-xl font-semibold">Stack |</p>
          <div className="flex gap-2 text-2xl text-pink-main">
            <FaCss3Alt />
            <FaJs />
            <FaReact />
            <FaHtml5 />
            <SiTailwindcss />
            <FaNodeJs />
            <GrMysql />
            <SiMongodb />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHome;
