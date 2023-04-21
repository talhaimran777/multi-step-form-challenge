import { PlanInterface } from "interfaces/index";

import ArcadeIcon from "images/icon-arcade.svg";
import AdvancedIcon from "images/icon-advanced.svg";
import ProIcon from "images/icon-pro.svg";

const plans: PlanInterface[] = [
  {
    id: 1,
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
    image: ArcadeIcon,
  },
  {
    id: 2,
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
    image: AdvancedIcon,
  },
  {
    id: 3,
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

    image: ProIcon,
  },
];

export default plans;
