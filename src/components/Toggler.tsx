import { useAppState } from "context-api/app-state-context";
import { PlanTypes } from "interfaces/index";
import { useEffect, useState } from "react";

const Toggler = () => {
  const { data, setData } = useAppState();
  const [toggled, setToggled] = useState(data.planType === PlanTypes.Yearly);

  useEffect(() => {
    setData({
      ...data,
      planType: toggled ? PlanTypes.Yearly : PlanTypes.Monthly,
    });
  }, [toggled]);

  return (
    <>
      <label className="flex items-center cursor-pointer">
        <div className="relative">
          <input
            type="checkbox"
            id="toggleB"
            className="sr-only"
            checked={toggled}
            onChange={() => setToggled(!toggled)}
          />
          <div className="test block bg-gray-600 w-10 h-6 rounded-full"></div>
          <div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition"></div>
        </div>
      </label>
    </>
  );
};

export default Toggler;
