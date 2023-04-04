import { Step } from "interfaces/index";

const Steps = () => {
  const steps: Step[] = [
    {
      number: 1,
      isActive: true,
    },
    {
      number: 2,
      isActive: false,
    },
    {
      number: 3,
      isActive: false,
    },
    {
      number: 4,
      isActive: false,
    },
  ];

  const Step = (step: Step) => {
    const dynamicClasses = step.isActive ? "bg-[#bfe2fd]" : "border text-white";

    return (
      <span
        className={`h-8 w-8 rounded-full flex justify-center items-center ${dynamicClasses}`}
      >
        {step.number}
      </span>
    );
  };

  return (
    <>
      <div className="mt-8 flex justify-between gap-3">
        {steps.map((step) => Step(step))}
      </div>
    </>
  );
};

export default Steps;
