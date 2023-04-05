import { Step } from "interfaces/index";

const Steps = () => {
  const steps: Step[] = [
    {
      number: 1,
      isActive: false,
    },
    {
      number: 2,
      isActive: false,
    },
    {
      number: 3,
      isActive: true,
    },
    {
      number: 4,
      isActive: false,
    },
  ];

  const Step = (step: Step, idx: number) => {
    const dynamicClasses = step.isActive
      ? "bg-[#bfe2fd] text-heading"
      : "border text-white";

    return (
      <span
        key={idx}
        className={`h-8 w-8 rounded-full flex justify-center items-center ${dynamicClasses}`}
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
