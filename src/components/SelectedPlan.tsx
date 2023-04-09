const SelectedPlan = () => {
  return (
    <div className="flex items-center justify-between mb-3">
      <div>
        <h1 className="text-sm font-medium text-heading mb-[3px]">
          Arcade (Monthly)
        </h1>
        <button className="focus-visible:outline-none text-sm text-paragraph border-b">
          Change
        </button>
      </div>
      <h1 className="text-sm font-bold text-heading mb-[3px]">$9/mo</h1>
    </div>
  );
};

export default SelectedPlan;
