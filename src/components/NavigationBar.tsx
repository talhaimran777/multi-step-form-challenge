import Steps from "components/Steps";
import { useSteps } from "context-api/step";

const NavigationBar = () => {
  const { currentStep } = useSteps();

  return (
    <div
      className={
        'h-[175px] bg-[url("/images/bg-sidebar-mobile.svg")] bg-no-repeat bg-cover flex justify-center'
      }
    >
      {currentStep !== 5 && <Steps />}
    </div>
  );
};

export default NavigationBar;
