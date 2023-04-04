import React from "react";
import Step1Content from "components/Step1Content";
import NavigationBar from "components/NavigationBar";
import Footer from "components/Footer";

const Layout = () => {
  return (
    <div className="h-screen w-screen bg-[#EEF4FE]">
      <NavigationBar />
      <Step1Content />
      <Footer />
    </div>
  );
};

export default Layout;
