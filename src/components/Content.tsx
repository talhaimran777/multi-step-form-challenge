import Step1Content from "components/Step1Content";
import Step3Content from "components/Step3Content";

const stepContent = (step: number) => {
  switch (step) {
    case 1:
      return <Step1Content />;

    case 3:
      return <Step3Content />;
  }
};

const Content = () => {
  const step = 3;

  return (
    <div className="bg-white px-6 py-8 rounded-xl mx-4 -mt-20">
      {stepContent(step)}
    </div>
  );
};

export default Content;
