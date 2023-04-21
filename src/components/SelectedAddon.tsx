import { useAppState } from "context-api/app-state-context";
import { SelectedAddonProps } from "interfaces/index";

const SelectedAddon: React.FC<SelectedAddonProps> = ({ title, pricing }) => {
  const { data } = useAppState();

  const planType = data.planType;
  const planPricing = pricing[planType];

  return (
    <div className="flex items-center justify-between mt-3">
      <h1 className="text-sm text-paragraph">{title}</h1>
      <p className="text-sm font-normal text-heading mb-[3px]">
        +${planPricing.price}
        {planPricing.pricePostfix}
      </p>
    </div>
  );
};

export default SelectedAddon;
