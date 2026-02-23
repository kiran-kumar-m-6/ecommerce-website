"use client";
import ProductGrid from "../pages/ProductGrid/ProductGrid";
import { productData } from "@/Data/ProductData/Restaurant/productData";
import Carousel from "@/components/organisms/Carousel/SliderComponent";
import { carouselData } from "@/Data/CarouselData/Restaurent/carouselData";
import PopUp from "@/components/organisms/PopUp/PopUp";
import { PopUpData } from "@/Data/PopUpData/Cafe/PopUpData";
import { useState } from "react";
import CartPage from "@/components/pages/CartPage/CartPage";

export default function RestaurantHome() {
  const [cartView, setCartView] = useState(false);
  const [open, setOpen] = useState(true);

  return (
    <div>
      <Carousel data={carouselData} />
      <ProductGrid data={productData} />
      <CartPage open={cartView} onClose={() => setCartView(false)} />
      <PopUp data={PopUpData} open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
