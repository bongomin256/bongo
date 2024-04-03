import { Button1, Button2 } from "../constants/btn/Button";

import projects from "../../data.json";
import { Freelance } from "../realwork/Freelance";
import { motion } from "framer-motion";

const ProjectHome = () => {
  return (
    <section className="px-5 mb-48 project md:px-12 lg:px-32">
      <motion.div
        // using motion from framer motion for aninamation
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 100 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h2 className=" text-center mb-8 text-xl before:content-[''] before:h-[2px] before:block before:bg-gray-main after:content-[''] after:h-[2px] after:block after:bg-gray-main grid grid-cols-3 items-center gap-2 md:gap-0">
          {/* before:content-[''] before:h-[2px] before:block before:bg-gray-main
          after:content-[''] after:h-[2px] after:block after:bg-gray-main */}

          <span>
            <span className="text-pink-main">#</span>
            Featured Projects
          </span>
        </h2>
      </motion.div>

      <motion.div
        // using motion from framer motion for animation
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <Freelance />
        {projects.featured &&
          projects.featured.map((project) => (
            <div
              key={project.id}
              className="p-4 mb-8 text-center rounded-lg bg-bg-modal lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center lg:px-8"
            >
              <motion.div
                className="mb-5 md:mb-5 lg:mb-0"
                //
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.15, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img
                  className="duration-300 ease-in-out rounded-lg hover:scale-105 opacity-40 hover:opacity-100"
                  src={project.images}
                  alt=""
                />
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.25, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <h3 className="mb-5 text-xl text-pink-main md:text-start ">
                  {project.appName}
                </h3>
                <div>
                  <p className="mb-5 text-gray-main md:text-start">
                    {/* This is an eCommerce website that allows user to view the
                  optimal layout for the site depending on their device's screen
                  size, add to cart and checkout */}
                    {project.description}
                  </p>
                  <motion.div
                    className="flex justify-center gap-5 mb-5 md:gap-12 md:justify-start"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: 100 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Button1>Github </Button1>
                    </a>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <Button2>Live</Button2>
                    </a>
                  </motion.div>
                  <div className="border-t-2 border-gray-main">
                    <ul className="flex flex-wrap justify-center gap-2 pt-2 font-light text-pink-main md:justify-start">
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
              </motion.div>
            </div>
          ))}
      </motion.div>
    </section>
  );
};

export default ProjectHome;
