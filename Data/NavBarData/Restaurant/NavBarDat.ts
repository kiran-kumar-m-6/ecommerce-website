import { productData } from "@/Data/ProductData/Restaurant/productData";
import { DeviesData } from "./Devices/DevicesData";
import { RodsData } from "./Rods/RodsData";
import { AboutPulze } from "./AboutPulze/AboutPulze";
import { PrivilegesData } from "./Privileges/PrivilegesData";

export const NavBarDat = [
  {
    logo: "/restarant.png",
    menu: "/menu.svg",

    navItems: [
      { label: "Device", data: DeviesData },
      { label: "Rods", data: RodsData },
      { label: "About PULZE", data: AboutPulze },
      { label: "Privileges", data: PrivilegesData },
      { label: "PULZE Care" },
      { label: "Market" },
    ],

    search: "/search.svg",
    account: "/user.svg",
    notifications: "/envelope.svg",
    location: "/location.svg",
    cart: "/cart.svg",
    serchProduct: productData,
  },
];
