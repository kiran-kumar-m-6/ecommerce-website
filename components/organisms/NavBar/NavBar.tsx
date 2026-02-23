import { useState } from "react";
import { Button, Flex, Icon } from "@/components/atom";
import MobileMenu from "./MobileMenu/MobileMenu";
import NavProductsGrid from "@/components/pages/NavBarPages/ProductsGrid/NavProductsGrid";
import CartPage from "@/components/pages/CartPage/CartPage";
import SearchBar from "./SearchBar/SearchBar";
import { NotFoundData } from "@/Data/SearchBarData/cafe/NotFounData";
import { Product } from "@/Data/Type/Product/Product";

type PropsData = {
  image: string;
  alt: string;
  available?: number;
  heading: string;
  description: string;
  price?: number;
};

type NavItems = {
  label: string;
  data?: PropsData[];
};

type NavBarProps = {
  logo: string;
  menu: string;
  navItems: NavItems[];
  search: string;
  notifications: string;
  cart: string;
  location: string;
  account: string;
  openNav?: boolean;
  onClose?: () => void;
  searchData: Product[];
};

export default function NavBar({
  logo,
  menu,
  navItems,
  search,
  notifications,
  cart,
  location,
  account,
  searchData,
}: NavBarProps) {
  const [open, setOpen] = useState(false);
  const [cartView, setCartView] = useState(false);
  const [searchView, setSearchView] = useState(false);

  if (!logo || !navItems || !menu) return;

  return (
    <div className="relative">
      <nav className="flex items-center justify-between px-6 py-4 bg-white">
        <Icon src={logo} alt="cafe" width={48} height={48} />
        <div
          className="hidden md:flex gap-6 "
          data-testid="navbar-navItems-container"
        >
          {navItems.map((item, index) => (
            <div key={item.label ?? index} className="group">
              <Button
                label={item?.label}
                className="cursor-pointer font-medium hover:text-blue-500 hover:duration-300"
              />
              {item.data && (
                <div className="absolute left-0 top-full w-full duration-300 invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-white shadow-2xl z-20">
                  <NavProductsGrid data={item.data} />
                </div>
              )}
            </div>
          ))}
        </div>
        <Flex
          className="items-center gap-3"
          data-testid="navbar-navIcons-container"
        >
          <button
            onClick={() => {
              setSearchView((prev) => !prev);
            }}
          >
            <Icon
              src={search}
              alt="search"
              width={24}
              height={24}
              className="cursor-pointer hover:scale-110"
            />
          </button>

          <Icon
            src={notifications}
            alt="notifications"
            width={24}
            height={24}
            className="hidden md:block cursor-pointer hover:scale-110"
          />
          <Icon
            src={location}
            alt="location"
            width={24}
            height={24}
            className="hidden md:block cursor-pointer hover:scale-110"
          />
          <Icon
            src={account}
            alt="account"
            width={24}
            height={24}
            className="cursor-pointer hover:scale-110"
          />
          <button onClick={() => setCartView(true)}>
            <Icon
              src={cart}
              alt="cart"
              width={24}
              height={24}
              className="cursor-pointer hover:scale-110"
            />
          </button>
          <button onClick={() => setOpen(true)} className="md:hidden">
            <Icon
              src={menu}
              alt="menu"
              width={24}
              height={24}
              className="hover:scale-110"
            />
          </button>
        </Flex>
      </nav>
      <SearchBar
        foundData={searchData}
        notFoundData={NotFoundData}
        logo={logo}
        onClose={() => {
          setSearchView(false);
        }}
        open={searchView}
      />
      <MobileMenu open={open} onClose={() => setOpen(false)} />
      <CartPage open={cartView} onClose={() => setCartView(false)} />
    </div>
  );
}
