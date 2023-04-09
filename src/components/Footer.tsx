import { useSteps } from "context-api/context";

const Footer = () => {
  const { currentStep, setCurrentStep, formik } = useSteps();

  const onSubmit = () => {
    if (currentStep === 1) {
      formik.submitForm();
    } else {
      currentStep !== 4 && setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div
      className={`bg-white h-[72px] flex items-center px-3 fixed w-full bottom-0${
        currentStep !== 1 ? " justify-between" : " justify-end"
      }`}
    >
      {currentStep != 1 && (
        <button
          onClick={() => setCurrentStep(currentStep - 1)}
          className="focus-visible:outline-none bg-[#022a5a] text-white py-3 px-4 rounded-md text-sm"
        >
          Go Back
        </button>
      )}
      <button
        onClick={onSubmit}
        className={`focus-visible:outline-none text-white py-3 px-4 rounded-md text-sm${
          currentStep !== 4 ? " bg-[#022a5a]" : " bg-[#473dff]"
        }`}
      >
        {currentStep !== 4 ? "Next Step" : "Confirm"}
      </button>
    </div>
  );
};

export default Footer;
