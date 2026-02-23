"use client";
import CartProvider from "@/components/organisms/Context/Context";
import Footer from "../Footer/Footer";
import { FooterData } from "@/Data/Footer/cafe/FooterData";

export default function CafeBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <main>{children}</main>
      <footer>
        <Footer data={FooterData} />
      </footer>
    </CartProvider>
  );
}
