import { StepTextProps } from "interfaces/index";

const StepText: React.FC<StepTextProps> = ({ title, description }) => {
  return (
    <>
      <h1 className="text-2xl mb-[8px] font-bold text-heading">{title}</h1>
      <p className="text-base mb-4 text-paragraph">{description}</p>
    </>
  );
};

export default StepText;
