import type { Meta, StoryObj } from "@storybook/react";
import ProductGrid from "../../../app/restaurant/components/organisms/ProductGrid/ProductGrid";

const meta: Meta<typeof ProductGrid> = {
  title: "Organisms/ProductGrid",
  component: ProductGrid,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ProductGrid>;

const mockProductData = [
  {
    id: "restaurant1",
    image:
      "https://images.ctfassets.net/cmz1u2vjgn0q/2xCpUkwhQmsJe9lGeNrh4u/76b28c3c5dc3857f764361a586028dd2/%C3%8E_%C3%8E_%C3%8E_%C3%8E_%C3%8E__-_Website_Assets_Localization-31.png?q=75&w=768",
    sideAngleImage:
      "https://images.cdn.europe-west1.gcp.commercetools.com/38b2064c-e845-43af-bb08-49545a9bfc08/2510_Pulze%20%26%20iD%20-%20iD-kfvgVNd-.jpg",
    name: "Red Tobacco",
    description: "Intense smoke flavor with Full Filter technology.",
    btnText: "Add To Cart",
    textClass: "text-red-500",
    price: "4.99",
    btnClass:
      "rounded-lg bg-[#e52826] text-white font-semibold text-xl hover:bg-[#c91f1d] w-[150px] h-[45px]",
  },
  {
    id: "restaurant2",
    image:
      "https://images.ctfassets.net/cmz1u2vjgn0q/4MdrysDUbBQocDzBZsGHuz/e5c3238f0d46e601ec37726770678849/%C3%8E_%C3%8E_%C3%8E_%C3%8E_%C3%8E__-_Website_Assets_Localization-29.png?q=75&w=768",
    sideAngleImage:
      "https://images.cdn.europe-west1.gcp.commercetools.com/38b2064c-e845-43af-bb08-49545a9bfc08/2510_Pulze%20%26%20iD%20-%20iD-W6G7x1Ab.jpg",
    name: "Gold Tobacco",
    description: "Balanced tobacco flavor with Balanced Filter technology.",
    btnText: "Add To Cart",
    textClass: "text-red-500",
    price: "4.99",
    btnClass:
      "rounded-lg bg-sky-950 text-white font-semibold text-xl hover:bg-[#396887] w-[150px] h-[45px]",
  },
  {
    id: "restaurant3",
    image:
      "https://images.ctfassets.net/cmz1u2vjgn0q/3dFDItuyIoc42apXWONtTc/d46c79d2f6b97df0826cfa4e7d09d10a/%C3%8E_%C3%8E_%C3%8E_%C3%8E_%C3%8E__-_Website_Assets_Localization-30.png?q=75&w=768",
    sideAngleImage:
      "https://images.cdn.europe-west1.gcp.commercetools.com/38b2064c-e845-43af-bb08-49545a9bfc08/2510_Pulze%20%26%20iD%20-%20iD-OIBcQtoB.jpg",
    name: "Silver Tobacco",
    price: "6.49",
    description: "Smooth smoke flavor with Smooth Filter technology.",
    btnText: "Add To Cart",
    textClass: "text-red-500",
    btnClass:
      "rounded-lg bg-[#e52826] text-white font-semibold text-xl hover:bg-[#c91f1d] w-[150px] h-[45px]",
  },
];

export const Default: Story = {
  args: {
    data: mockProductData,
  },
};
