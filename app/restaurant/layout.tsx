import RestaurantLayout from "./Layout/Layout";

export default function RestaurantRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <RestaurantLayout>{children}</RestaurantLayout>;
}
