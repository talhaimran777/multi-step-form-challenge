import SelectedAddons from "./SelectedAddons";
import SelectedPlan from "./SelectedPlan";

const Summary = () => {
  return (
    <>
      <div className="p-4 bg-[#F8F9FF]">
        <SelectedPlan />
        <hr />
        <SelectedAddons />
        <SelectedAddons />
      </div>
      <div className="flex items-center justify-between px-4 mt-6">
        <h1 className="text-sm text-paragraph">Total (per month)</h1>
        <p className="text-base font-bold mb-[3px] text-[#473dff]">+$12/mo</p>
      </div>
    </>
  );
};

export default Summary;
