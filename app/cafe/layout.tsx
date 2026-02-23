import CafeLayout from "./Layout/Layout";
export default function CafeRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CafeLayout>{children}</CafeLayout>;
}
