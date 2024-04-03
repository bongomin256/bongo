//! importing the constants
import { Button, Button1, Button2, Button3 } from "../constants/btn/Button";
import projects from "../../data.json";

import PageSection from "../constants/PageSection";
import { Freelance } from "../realwork/Freelance";

const ProjectComponent = () => {
  return (
    <PageSection id="project">
      <h2 className="mb-5 text-xl text-center text-white capitalize">
        <span className="text-pink-main">/</span>projects
      </h2>
      <div>
        <div>
          <Freelance />
          {projects.featured &&
            projects.featured.map((project) => (
              <div
                key={project.id}
                className="p-4 mb-8 text-center rounded-lg bg-bg-modal lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center lg:px-8"
                // lg:grid
                // lg:grid-cols-2
                // lg:gap-10
                // lg:items-center
              >
                <div className="mb-5 md:mb-5 lg:mb-0">
                  <img
                    className="duration-300 ease-in-out rounded-lg hover:scale-105 opacity-40 hover:opacity-100"
                    src={project.images}
                    alt=""
                  />
                </div>

                <div>
                  <h3 className="mb-5 text-xl text-pink-main md:text-start ">
                    {project.appName}
                  </h3>
                  <div>
                    <p className="mb-5 text-gray-main md:text-start">
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
                      <ul className="flex flex-wrap justify-center gap-2 pt-2 font-light text-pink-main md:justify-start">
                        {project.techs &&
                          project.techs.map((tech) => (
                            <li key={tech}>
                              <span className="text-white">-</span>
                              {tech}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <h3 className="mb-5 text-xl text-center text-white capitalize">
        {" "}
        <span className="text-pink-main">#</span>other projects
      </h3>
      <div className="flex w-full gap-4 overflow-x-scroll scroll scroll-smooth scrollbar-hide">
        {projects.others &&
          projects.others.map((other) => (
            <div key={other.id} className="border-2 border-gray-main">
              <div className="text-center border-b border-b-gray-main">
                <h3 className="py-1 text-lg capitalize text-pink-main">
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
