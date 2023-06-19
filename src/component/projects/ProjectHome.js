import { Button1, Button2 } from "../constants/btn/Button";

import projects from "../../data.json";

const ProjectHome = () => {
  return (
    <section className="px-5 md:px-12 lg:px-32 mb-20">
      <div>
        <h2 className=" text-center mb-8 text-xl before:content-[''] before:h-[2px] before:block before:bg-gray-main after:content-[''] after:h-[2px] after:block after:bg-gray-main grid grid-cols-3 items-center gap-2 md:gap-0">
          {/* before:content-[''] before:h-[2px] before:block before:bg-gray-main
          after:content-[''] after:h-[2px] after:block after:bg-gray-main */}

          <span>
            <span className="text-pink-main">#</span>
            Featured Projects
          </span>
        </h2>
      </div>

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
                  className="rounded-lg  hover:scale-105 ease-in-out duration-300 opacity-40 hover:opacity-100"
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
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
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
    </section>
  );
};

export default ProjectHome;
