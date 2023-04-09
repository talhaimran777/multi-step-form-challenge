import React from "react";
import Plan from "components/Plan";
import ArcadeIcon from "images/icon-arcade.svg";
import AdvancedIcon from "images/icon-advanced.svg";
import ProIcon from "images/icon-pro.svg";
import { PlanInterface } from "interfaces/index";

const Plans = () => {
  const plans: PlanInterface[] = [
    {
      title: "Arcade",
      price: "$9/mo",
      isActive: true,
      image: ArcadeIcon,
    },
    {
      title: "Advanced",
      price: "$12/mo",
      isActive: false,
      image: AdvancedIcon,
    },
    {
      title: "Pro",
      price: "$15/mo",
      isActive: false,
      image: ProIcon,
    },
  ];

  return (
    <>
      {plans.map((plan, idx) => (
        <Plan
          uniqueKey={idx}
          title={plan.title}
          isActive={plan.isActive}
          price={plan.price}
          image={plan.image}
        />
      ))}
    </>
  );
};

export default Plans;
