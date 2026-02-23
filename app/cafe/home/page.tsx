"use client";
import ProductGrid from "../pages/ProductGrid/ProductGrid";
import { productData } from "@/Data/ProductData/Cafe/productData";
import Carousel from "@/components/organisms/Carousel/SliderComponent";
import { carouselData } from "@/Data/CarouselData/cafe/carouselData";
import PopUp from "@/components/organisms/PopUp/PopUp";
import { PopUpData } from "@/Data/PopUpData/Cafe/PopUpData";
import { useState } from "react";
import BluThirdPartySection from "@/components/organisms/BluThirdPartySection/BluThirdPartySection";
import CartPage from "@/components/pages/CartPage/CartPage";
import { Accordion } from "../pages/Accordion/Accordion";
import { AccordionData } from "@/Data/AccordionData/AccordionData";

export default function CafeHome() {
  const [cartView, setCartView] = useState(false);
  const [open, setOpen] = useState(true);
  return (
    <div>
      <PopUp data={PopUpData} open={open} onClose={() => setOpen(false)} />
      <Carousel data={carouselData} />
      <ProductGrid data={productData} />
      <CartPage open={cartView} onClose={() => setCartView(false)} />
      <BluThirdPartySection />
      <Accordion data={AccordionData} />
    </div>
  );
}
