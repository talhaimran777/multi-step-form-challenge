import { useSteps } from "context-api/context";
import { Step } from "interfaces/index";

const steps: Step[] = [
  {
    number: 1,
  },
  {
    number: 2,
  },
  {
    number: 3,
  },
  {
    number: 4,
  },
];

const Steps = () => {
  const { currentStep, setCurrentStep } = useSteps();

  const Step = (step: Step, idx: number) => {
    const dynamicClasses =
      step.number === currentStep
        ? "bg-[#bfe2fd] text-heading"
        : "border text-white";

    return (
      <span
        key={idx}
        className={`h-8 w-8 rounded-full flex justify-center items-center ${dynamicClasses}`}
        onClick={() => setCurrentStep(step.number)}
      >
        {step.number}
      </span>
    );
  };

  return (
    <>
      <div className="mt-8 flex justify-between gap-x-4">
        {steps.map((step, idx) => Step(step, idx))}
      </div>
    </>
  );
};

export default Steps;
