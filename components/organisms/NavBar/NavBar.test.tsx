import { render, screen } from "@testing-library/react";
import { beforeEach, describe, test, expect } from "vitest";
import NavBar from "./NavBar";
import { RechargableVapesData } from "@/Data/NavBarData/Cafe/RechargableVapes/RechargableVapesData";
import { LiquidsAndPodsData } from "@/Data/NavBarData/Cafe/LiquidsAndPods/LiquidsAndPodsData";
import { productData } from "@/Data/ProductData/Cafe/productData";

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

describe("Testing NavBar", () => {
  beforeEach(() => {
    render(
      <NavBar
        searchData={nav[0].serchProduct}
        logo={nav[0].logo}
        navItems={nav[0].navItems}
        menu={nav[0].menu}
        search={nav[0].search}
        notifications={nav[0].notifications}
        cart={nav[0].cart}
        location={nav[0].location}
        account={nav[0].account}
      />,
    );
  });

  test("renders navbar logo", () => {
    const logo = screen.getByAltText(/cafe/i);
    expect(logo).toBeInTheDocument();
  });

  test("Check navbar items are render", () => {
    const navitems = screen.getByTestId("navbar-navItems-container");
    expect(navitems).toBeInTheDocument();
  });

  test("Check navbar items", () => {
    expect(screen.getByText("Rechargeable Vapes")).toBeInTheDocument();
    expect(screen.getByText("Blog")).toBeInTheDocument();
  });

  test("Check navbar icons are render", () => {
    const navicons = screen.getByTestId("navbar-navIcons-container");
    expect(navicons).toBeInTheDocument();

    const searchIcon = screen.getByAltText("search");
    expect(searchIcon).toBeInTheDocument();
    expect(searchIcon).toHaveAttribute("width", "24");

    const envelopeIcon = screen.getByAltText("notifications");
    expect(envelopeIcon).toBeInTheDocument();
  });

  test("Check Menu Button was render", () => {
    const menuButton = screen.getByRole("button");
    expect(menuButton).toBeInTheDocument();
  });
});
