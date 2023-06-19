import React from "react";
import myimage from "../../assets/myphoto.jpeg";
import data from "../../data.json";
import PageSection from "../constants/PageSection";

const AboutMeComp = () => {
  return (
    <PageSection>
      <div>
        <h2 className="text-white text-xl text-center mb-5">
          <span className="text-pink-main">/</span>About Me
        </h2>

        <div>
          {/* !fix md and lg display and change*/}
          <div className="mb-12 md:flex md:gap-5 md:flex-row-reverse  md:items-center md:justify-center lg:gap-8">
            {/* mb-12 md:flex md:gap-5 md:items-center md:justify-center */}
            {/* md:grid md:gap-5 md:grid-cols-2 md:items-center md:justify-center */}
            <div className="mb-5 w-full">
              <img
                className="border-4 rounded-full w-[200px] m-auto border-pink-main md:min-w-[250px] md:rounded-full lg:rounded-lg lg:w-[300px] lg:rotate-3  lg:hover:rotate-0 transition-all duration-300 ease-in-out lg:shadow-lg lg:shadow-white "
                // md:w-full  lg:w-[300px] lg:hover:rotate-3 transition-all duration-300 ease-in-out rounded-md
                src={myimage}
                alt=""
              />
            </div>
            <div className="text-center md:text-start">
              <p>Hi there 👋,</p>
              <p className="mb-5">
                My name is Godfrey Bongomin but I grew up being called Bongo, so
                this is my way of telling you that you can call me BONGO!
              </p>
              <p className="mb-5 ">
                I have 8 years of experience working in production, logistics,
                customer service, and management in a multi-cultural setting.
                Having already earned a BBA from a globally accredited
                university, I graduated from UW Coding Bootcamp in August 2022,
                an intensive six-month certificate program. I am now searching
                for a web development position with a company I am passionate
                about.
              </p>
              <p className="">
                Currently I am building my skillset by working on frontend
                mentor challenges and i am open to work freelance or full-time
                position
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-white text-xl  text-center mb-5">
              <span className="text-pink-main">#</span>Skills
            </h2>
            <div className="">
              <div className="w-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide  flex gap-2 md:justify-center md:gap-5 ">
                {data.skills &&
                  data.skills.map((skill) => (
                    <div
                      key={skill.title}
                      className="border border-gray-main  w-[200px] cursor-pointer lg:cursor-default"
                    >
                      <div className="border-b border-b-gray-main">
                        <h3 className="text-lg px-5 py-2 text-pink-main capitalize">
                          {skill.title}
                        </h3>
                      </div>

                      <ul className="pl-5 py-3 ">
                        {skill.skillArrs &&
                          skill.skillArrs.map((skillArr) => (
                            <li className="mb-2" key={skillArr}>
                              {skillArr}
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default AboutMeComp;
