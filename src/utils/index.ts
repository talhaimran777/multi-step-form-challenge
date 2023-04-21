import addons from "data/addons";
import plans from "data/plans";
import { AppState } from "interfaces/index";

export const fromAppState = (data: AppState) => {
  const planType = data.planType;
  const plan = plans.filter((plan) => plan.id === data.plan)[0];
  const planTitle = plan.title;
  const selectedAddons = addons.filter((addon) =>
    data.addons.includes(addon.id)
  );
  const planPricing = plan.pricing[planType];

  return {
    plan,
    planTitle,
    planType,
    selectedAddons,
    planPricing,
  };
};
