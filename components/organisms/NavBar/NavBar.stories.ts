import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import NavBar from "./NavBar";
import { RechargableVapesData } from "@/Data/NavBarData/Cafe/RechargableVapes/RechargableVapesData";
import { LiquidsAndPodsData } from "@/Data/NavBarData/Cafe/LiquidsAndPods/LiquidsAndPodsData";
import { productData } from "@/Data/ProductData/Cafe/productData";

const meta = {
  title: "Organisms/NavBar",
  component: NavBar,
  parameters: {
    layout: "top",
    docs: {
      description: {
        component: "A customizable NavBar component.",
      },
    },
    tags: ["autodocs"],
  },
} satisfies Meta<typeof NavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

const nav = [
  {
    logo: "/pngkey.com-coffee-png-225874.png",
    menu: "/menu.svg",

    navItems: [
      { label: "Rechargeable Vapes", data: RechargableVapesData },
      { label: "Liquids and Pods", data: LiquidsAndPodsData },
      { label: "View All Products" },
      { label: "Bundles" },
      { label: "Subscription" },
      { label: "Blog" },
    ],

    search: "/search.svg",
    account: "/user.svg",
    notifications: "/envelope.svg",
    location: "/location.svg",
    cart: "/cart.svg",
    serchProduct: productData,
  },
];

export const Default: Story = {
  args: {
    logo: nav[0].logo,
    navItems: nav[0].navItems,
    menu: nav[0].menu,
    search: nav[0].search,
    notifications: nav[0].notifications,
    cart: nav[0].cart,
    location: nav[0].location,
    account: nav[0].account,
    searchData: nav[0].serchProduct,
  },
};
