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
      pricing: {
        monthly: {
          price: 9,
          pricePostfix: "/mo",
        },
        yearly: {
          price: 90,
          pricePostfix: "/yr",
        },
      },
      isActive: true,
      image: ArcadeIcon,
    },
    {
      title: "Advanced",
      pricing: {
        monthly: {
          price: 12,
          pricePostfix: "/mo",
        },
        yearly: {
          price: 120,
          pricePostfix: "/yr",
        },
      },
      isActive: false,
      image: AdvancedIcon,
    },
    {
      title: "Pro",
      pricing: {
        monthly: {
          price: 15,
          pricePostfix: "/mo",
        },
        yearly: {
          price: 150,
          pricePostfix: "/yr",
        },
      },

      isActive: false,
      image: ProIcon,
    },
  ];

  return (
    <>
      {plans.map((plan, idx) => (
        <div key={idx}>
          <Plan
            title={plan.title}
            isActive={plan.isActive}
            pricing={plan.pricing}
            image={plan.image}
          />
        </div>
      ))}
    </>
  );
};

export default Plans;
