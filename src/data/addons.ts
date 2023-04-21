import { AddonInterface } from "interfaces/index";

const addons: AddonInterface[] = [
  {
    id: 1,
    title: "Online service",
    pricing: {
      monthly: {
        price: 1,
        pricePostfix: "/mo",
      },
      yearly: {
        price: 10,
        pricePostfix: "/yr",
      },
    },
    description: "Access to multiplayer games",
  },
  {
    id: 2,
    title: "Larger storage",
    pricing: {
      monthly: {
        price: 2,
        pricePostfix: "/mo",
      },
      yearly: {
        price: 20,
        pricePostfix: "/yr",
      },
    },
    description: "Extra 1TB of cloud save",
  },
  {
    id: 3,
    title: "Customizable profile",
    pricing: {
      monthly: {
        price: 2,
        pricePostfix: "/mo",
      },
      yearly: {
        price: 20,
        pricePostfix: "/yr",
      },
    },
    description: "Custom theme on your profile",
  },
];
export default addons;
