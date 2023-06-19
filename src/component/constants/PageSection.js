import React from "react";

const pageSection = ({ children }) => {
  return (
    <section className="px-5 md:px-12 lg:px-32 text-gray-main">
      {children}
    </section>
  );
};

export default pageSection;
