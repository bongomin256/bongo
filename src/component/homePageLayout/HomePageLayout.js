import React from "react";
// import Footer from "../footer/Footer";
// import Navbar from "../navBar/Navbar";

const HomePageLayout = ({ children }) => {
  return (
    <main className="bg-[#282c33]  text-white">
      {/* <Navbar /> */}
      {children}
      {/* <Footer /> */}
    </main>
  );
};

export default HomePageLayout;
