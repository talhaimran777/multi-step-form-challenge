import Content from "components/Content";
import VerticalNav from "./VerticalNav";
import Footer from "components/Footer";
import { useSteps } from "context-api/step";

const LayoutDesktop = () => {
  const { currentStep } = useSteps();

  return (
    <div className="max-h-fit min-h-screen w-screen bg-[#F2F2F2] flex justify-center items-center">
      <div className="bg-white h-fit flex rounded-xl p-4 w-[940px]">
        <VerticalNav />
        <div className="bg-white flex flex-1 flex-col px-20">
          <Content />
          {currentStep !== 5 && <Footer />}
        </div>
      </div>
    </div>
  );
};

export default LayoutDesktop;
