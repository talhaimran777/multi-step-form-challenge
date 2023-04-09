import StepText from "components/StepText";
import Plans from "components/Plans";
import Toggler from "components/Toggler";

const Step2Content = () => {
  return (
    <>
      <StepText
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <Plans />
      <div className="flex justify-between items-center bg-[#F8F9FF] py-[14px] px-14 mt-6 rounded-lg">
        <p className="text-sm font-medium  text-paragraph">Monthly</p>
        <Toggler />
        <p className="text-sm font-medium">Yearly</p>
      </div>
    </>
  );
};

export default Step2Content;
