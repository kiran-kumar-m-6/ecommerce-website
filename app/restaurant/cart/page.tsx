"use client";
import { CartContext } from "@/components/organisms/Context/Context";
import { useContext } from "react";
import EmptyCart from "../pages/Cart/EmptyCart/EmptyCart";
import CheckOut from "../pages/Cart/CheckOut/CheckOut";

export default function Cart() {
  const cartItem = useContext(CartContext);
  const cart = cartItem?.cart ?? [];

  return <div>{cart.length === 0 ? <EmptyCart /> : <CheckOut />}</div>;
}
