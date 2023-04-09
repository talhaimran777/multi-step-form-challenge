import Step1Content from "components/Step1Content";
import Step2Content from "components/Step2Content";
import Step3Content from "components/Step3Content";
import Step4Content from "components/Step4Content";
import { useSteps } from "context-api/context";

const stepContent = (step: number) => {
  switch (step) {
    case 1:
      return <Step1Content />;

    case 2:
      return <Step2Content />;

    case 3:
      return <Step3Content />;

    case 4:
      return <Step4Content />;
  }
};

const Content = () => {
  const { currentStep } = useSteps();

  return (
    <div className="bg-white px-6 py-8 rounded-xl mx-4 -mt-20">
      {stepContent(currentStep)}
    </div>
  );
};

export default Content;
