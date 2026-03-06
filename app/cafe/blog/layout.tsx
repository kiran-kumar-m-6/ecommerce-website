"use client";
import CartProvider from "@/components/organisms/Context/Context";

export default function CafeBlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <main>{children}</main>
    </CartProvider>
  );
}
