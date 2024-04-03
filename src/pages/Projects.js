import React from "react";
import HomePageLayout from "../component/homePageLayout/HomePageLayout";
import ProjectComponent from "../component/projects/ProjectComponent";
// import { Freelance } from "../component/realwork/Freelance";

const Projects = () => {
  return (
    <HomePageLayout>
      {/* <Freelance /> */}
      <ProjectComponent />
    </HomePageLayout>
  );
};

export default Projects;
