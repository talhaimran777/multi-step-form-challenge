import React from "react";
import Plan from "components/Plan";
import plans from "data/plans";

const Plans = () => {
  return (
    <>
      {plans.map((plan, idx) => (
        <div key={idx}>
          <Plan
            id={plan.id}
            title={plan.title}
            pricing={plan.pricing}
            image={plan.image}
          />
        </div>
      ))}
    </>
  );
};

export default Plans;
