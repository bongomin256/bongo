//! importing the constants
import { Button, Button1, Button2, Button3 } from "../constants/btn/Button";
import projects from "../../data.json";

import PageSection from "../constants/PageSection";

const ProjectComponent = () => {
  return (
    <PageSection>
      <h2 className="text-white text-xl text-center mb-5 capitalize">
        <span className="text-pink-main">/</span>projects
      </h2>
      <div>
        <div>
          {projects.featured &&
            projects.featured.map((project) => (
              <div
                key={project.id}
                className="bg-bg-modal p-4 rounded-lg text-center lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center  lg:px-8 mb-8"
                // lg:grid
                // lg:grid-cols-2
                // lg:gap-10
                // lg:items-center
              >
                <div className="mb-5 md:mb-5 lg:mb-0">
                  <img
                    className="rounded-lg  hover:scale-105 opacity-40 hover:opacity-100 ease-in-out duration-300"
                    src={project.images}
                    alt=""
                  />
                </div>

                <div>
                  <h3 className="mb-5 text-pink-main text-xl md:text-start ">
                    {project.appName}
                  </h3>
                  <div>
                    <p className="mb-5 text-gray-main md:text-start">
                      {/* This is an eCommerce website that allows user to view the
                  optimal layout for the site depending on their device's screen
                  size, add to cart and checkout */}
                      {project.description}
                    </p>
                    <div className="flex justify-center gap-5 mb-5 md:gap-12 md:justify-start">
                      <a href={project.github} target="_blank" rel="noreferrer">
                        <Button1>Github </Button1>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button2>Live</Button2>
                      </a>
                    </div>
                    <div className="border-t-2 border-gray-main">
                      <ul className="flex justify-center flex-wrap gap-2 pt-2 text-pink-main font-light md:justify-start">
                        {project.techs &&
                          project.techs.map((tech) => (
                            <li key={tech}>
                              <span className="text-white">-</span>
                              {tech}
                            </li>
                          ))}

                        {/* <li>
                      <span className="text-white">-</span>Tailwindcss
                    </li>
                    <li>
                      <span className="text-white">-</span>CSS
                    </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <h3 className="text-white text-xl text-center mb-5 capitalize">
        {" "}
        <span className="text-pink-main">#</span>other projects
      </h3>
      <div className=" overflow-x-scroll scroll scroll-smooth scrollbar-hide flex gap-4 w-full ">
        {projects.others &&
          projects.others.map((other) => (
            <div key={other.id} className="border-2 border-gray-main">
              <div className="border-b border-b-gray-main text-center">
                <h3 className="text-lg  py-1 text-pink-main capitalize">
                  {other.appName}
                </h3>
              </div>

              <div className="px-5 py-3">
                <div className="mb-5">{other.description}</div>
                <div className="flex gap-4 lg:justify-center lg:gap-8">
                  <a
                    href={other.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button3>Github</Button3>
                  </a>
                  <a
                    href={other.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button>Live</Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </PageSection>
  );
};

export default ProjectComponent;
