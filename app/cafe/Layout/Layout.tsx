import CartProvider from "@/components/organisms/Context/Context";
import NavBar from "../pages/Navbar/NavBar";
import { NavBarData } from "@/Data/NavBarData/Cafe/NavBarData";
import { productData } from "@/Data/ProductData/Cafe/productData";
import Footer from "../Footer/Footer";
import { FooterData } from "@/Data/Footer/cafe/FooterData";

export default function CafeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const nav = NavBarData[0];

  return (
    <CartProvider>
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
      <footer>
        <Footer data={FooterData} />
      </footer>
    </CartProvider>
  );
}
