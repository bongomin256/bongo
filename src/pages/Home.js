import React from "react";
import AboutHome from "../component/about/AboutHome";
import HomePageLayout from "../component/homePageLayout/HomePageLayout";
import ProjectHome from "../component/projects/ProjectHome";
import ContactHome from "../component/contact/ContactHome";

const Home = () => {
  return (
    <HomePageLayout>
      {/* <h1>This is where everything else will go</h1> */}
      <AboutHome />
      <ProjectHome />
      <ContactHome />
    </HomePageLayout>
  );
};

export default Home;
