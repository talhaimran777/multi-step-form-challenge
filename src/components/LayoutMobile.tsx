import React from "react";
import Content from "components/Content";
import Footer from "components/Footer";
import NavigationBar from "components/NavigationBar";
import { useSteps } from "context-api/step";

const LayoutMobile = () => {
  const { currentStep } = useSteps();

  return (
    <div className="h-screen w-screen bg-[#EEF4FE]">
      <NavigationBar />
      <Content />
      {currentStep !== 5 && <Footer />}
    </div>
  );
};

export default LayoutMobile;
