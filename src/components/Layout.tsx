import React from "react";
import Content from "components/Content";
import Footer from "components/Footer";
import NavigationBar from "components/NavigationBar";

const Layout = () => {
  return (
    <div className="h-screen w-screen bg-[#EEF4FE]">
      <NavigationBar />
      <Content />
      <Footer />
    </div>
  );
};

export default Layout;
