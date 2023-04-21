import SelectedPlan from "components/SelectedPlan";
import SelectedAddons from "components/SelectedAddons";
import { useAppState } from "context-api/app-state-context";
import { fromAppState } from "utils/index";

const Summary = () => {
  let total = 0;
  const { data } = useAppState();
  const { planType, planPricing, selectedAddons } = fromAppState(data);

  total += planPricing.price;
  selectedAddons.forEach((addon) => (total += addon.pricing[planType].price));

  return (
    <>
      <div className="p-4 bg-[#F8F9FF]">
        <SelectedPlan />
        <SelectedAddons />
      </div>
      <div className="flex items-center justify-between px-4 mt-6">
        <h1 className="text-sm text-paragraph">Total (per month)</h1>
        <p className="text-base font-bold mb-[3px] text-[#473dff]">
          +${total}
          {planPricing.pricePostfix}
        </p>
      </div>
    </>
  );
};

export default Summary;
