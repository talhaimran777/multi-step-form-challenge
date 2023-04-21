import { useAppState } from "context-api/app-state-context";
import { fromAppState } from "utils/index";

const SelectedPlan = () => {
  const { data } = useAppState();
  const { planPricing, planTitle } = fromAppState(data);

  return (
    <div className="flex items-center justify-between mb-3">
      <div>
        <h1 className="text-sm font-medium text-heading mb-[3px]">
          {planTitle} <span className="capitalize">({data.planType})</span>
        </h1>
        <button className="focus-visible:outline-none text-sm text-paragraph border-b">
          Change
        </button>
      </div>
      <h1 className="text-sm font-bold text-heading mb-[3px]">
        ${planPricing.price}
        {planPricing.pricePostfix}
      </h1>
    </div>
  );
};

export default SelectedPlan;
