import { useSteps } from "context-api/step";
import { Step } from "interfaces/index";

const steps: Step[] = [
  {
    number: 1,
    label: "YOUR INFO"
  },
  {
    number: 2,
    label: "SELECT PLAN"
  },
  {
    number: 3,
    label: "Add-ONS"
  },
  {
    number: 4,
    label: "SUMMARY"
  },
];

const Steps = () => {
  const { currentStep } = useSteps();

  const Step = (step: Step, idx: number) => {
    const dynamicClasses =
      step.number === currentStep
        ? "bg-[#bfe2fd] text-heading"
        : "border text-white";

    return (
      <div className="lg:flex lg:items-center">
        <span
          key={idx}
          className={`h-8 w-8 rounded-full flex justify-center items-center ${dynamicClasses}`}
        >
          {step.number}
        </span>
        <div className="hidden lg:block lg:ml-3">
          <p className="text-xs text-gray-50 font-light">
            STEP {idx + 1}
          </p>
          <p className="font-semibold text-white">
            {step.label}
          </p>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mt-8 flex lg:flex-col justify-between gap-x-4 lg:gap-x-0 lg:gap-y-8">
        {steps.map((step, idx) => Step(step, idx))}
      </div>
    </>
  );
};

export default Steps;
