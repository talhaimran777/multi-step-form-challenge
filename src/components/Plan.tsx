import Image from "next/image";
import { PlanProps } from "interfaces/index";

const Plan: React.FC<PlanProps> = ({ isActive, title, price, image }) => {
  const dynamicClasses = isActive
    ? "bg-[#F8F9FF] border-[#473dff]"
    : "border-[#d6d9e6]";

  return (
    <div
      className={`flex items-center px-4 py-2 mb-3 border rounded-lg ${dynamicClasses}`}
    >
      <Image src={image} alt={title} className="mr-[14px]" />
      <div>
        <h1 className="text-base font-medium text-heading">{title}</h1>
        <p className="text-sm text-paragraph">{price}</p>
      </div>
    </div>
  );
};

export default Plan;
