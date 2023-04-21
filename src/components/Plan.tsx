import Image from "next/image";
import { PlanProps } from "interfaces/index";
import { useAppState } from "context-api/app-state-context";

const Plan: React.FC<PlanProps> = ({ id, title, pricing, image }) => {
  const { data, setData } = useAppState();
  const planType = data.planType;
  const plan = pricing[planType];
  const dynamicClasses =
    data.plan === id ? "bg-[#F8F9FF] border-[#473dff]" : "border-[#d6d9e6]";
  return (
    <div
      className={`flex items-center px-4 py-2 mb-3 border rounded-lg ${dynamicClasses}`}
      onClick={() => setData({ ...data, plan: id })}
    >
      <Image src={image} alt={title} className="mr-[14px]" />
      <div>
        <h1 className="text-base font-medium text-heading">{title}</h1>
        <p className="text-sm text-paragraph">
          ${plan.price}
          {plan.pricePostfix}
        </p>
      </div>
    </div>
  );
};

export default Plan;
