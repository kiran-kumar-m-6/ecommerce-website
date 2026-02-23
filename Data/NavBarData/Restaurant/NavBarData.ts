import { productData } from "@/Data/ProductData/Restaurant/productData";
import { LiquidsAndPodsData } from "../Cafe/LiquidsAndPods/LiquidsAndPodsData";
import { RechargableVapesData } from "../Cafe/RechargableVapes/RechargableVapesData";

export const NavBarData = [
  {
    logo: "/restarant.png",
    menu: "/menu.svg",

    navItems: [
      { label: "Device", data: RechargableVapesData },
      { label: "Pulze Cartridges", data: LiquidsAndPodsData },
      { label: "About Pula" },
      { label: "More By Pulze" },
      { label: "Customer Support" },
      { label: "E-shop" },
    ],

    search: "/search.svg",
    account: "/user.svg",
    notifications: "/envelope.svg",
    location: "/location.svg",
    cart: "/cart.svg",
    serchProduct: productData,
  },
];
