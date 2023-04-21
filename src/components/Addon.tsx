import { useAppState } from "context-api/app-state-context";
import { AddonProps } from "interfaces/index";

const Addon: React.FC<AddonProps> = ({ id, title, description, pricing }) => {
  const { data, setData } = useAppState();
  const addons = data.addons;

  const planType = data.planType;
  const plan = pricing[planType];

  const isActive = addons.includes(id);

  const dynamicClasses = isActive
    ? "bg-[#F8F9FF] border-[#473dff]"
    : "border-[#d6d9e6]";

  const toggleAddon = () => {
    const filtered = addons.filter((addonId) => addonId !== id);
    if (filtered.length < addons.length) {
      setData({ ...data, addons: [...filtered] });
    } else {
      setData({ ...data, addons: [...data.addons, id] });
    }
  };

  return (
    <div
      className={`flex justify-between items-center px-4 py-2 mb-3 border rounded-lg ${dynamicClasses}`}
    >
      <div className="flex justify-start items-center">
        <input
          id="default-checkbox"
          type="checkbox"
          className="w-5 h-5 rounded-md text-[#473dff] focus:ring-0 focus:ring-offset-0 mr-4"
          defaultChecked={isActive}
          onChange={toggleAddon}
        />

        <div>
          <h1 className="text-sm font-medium text-heading mb-[3px]">{title}</h1>
          <p className="text-xs text-paragraph">{description}</p>
        </div>
      </div>
      <p className="text-[#473dff] text-xs">
        +${plan.price}
        {plan.pricePostfix}
      </p>
    </div>
  );
};

export default Addon;
