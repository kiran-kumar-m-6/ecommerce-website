import { href } from "react-router-dom";
import { LiquidsAndPodsData } from "./LiquidsAndPods/LiquidsAndPodsData";
import { RechargableVapesData } from "./RechargableVapes/RechargableVapesData";
import { productData } from "@/Data/ProductData/Cafe/productData";
export const NavBarData = [
  {
    logo: "/pngkey.com-coffee-png-225874.png",
    menu: "/menu.svg",

    navItems: [
      { label: "Rechargable Vapes", data: RechargableVapesData },
      { label: "Liquids and Pods", data: LiquidsAndPodsData },
      { label: "View All Products" },
      { label: "Bundels" },
      { label: "Subscription" },
      { label: "Blog", href: "/cafe/blog" },
      { label: "Portfolio", href: "/cafe/task" },
    ],

    search: "/search.svg",
    account: "/user.svg",
    notifications: "/envelope.svg",
    location: "/location.svg",
    cart: "/cart.svg",
    serchProduct: productData,
  },
];
