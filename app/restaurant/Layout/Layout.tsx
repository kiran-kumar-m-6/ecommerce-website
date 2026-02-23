"use client";
import CartProvider from "@/components/organisms/Context/Context";
import NavBar from "../NavBar/NavBar";
import { NavBarDat } from "@/Data/NavBarData/Restaurant/NavBarDat";
import { productData } from "@/Data/ProductData/Restaurant/productData";
import PackageProvider from "../Context/Context";

export default function RestaurantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nav = NavBarDat[0];
  return (
    <CartProvider>
      <PackageProvider>
        <header>
          <NavBar
            logo={nav.logo}
            navItems={nav.navItems}
            menu={nav.menu}
            search={nav.search}
            notifications={nav.notifications}
            cart={nav.cart}
            location={nav.location}
            account={nav.account}
            searchData={productData}
          />
        </header>
        <main>{children}</main>
      </PackageProvider>
    </CartProvider>
  );
}
