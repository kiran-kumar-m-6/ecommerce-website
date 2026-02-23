import { redirect } from "next/navigation";

export default function Home() {
  const product = process.env.NEXT_PUBLIC_PRODUCT;

  if (product === "cafe") {
    redirect("/cafe/login");
  }

  redirect("/restaurant/login");
}
