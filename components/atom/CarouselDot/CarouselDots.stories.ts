import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import CarouselDot from "./CarouselDot";

const meta = {
  title: "Carousel/Dots",
  component: CarouselDot,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A customizable Carousel Dots component with size and background color options.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(() => console.log("CarouselDots clicked!")),
  },
} satisfies Meta<typeof CarouselDot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Active: Story = {
  args: {
    active: true,
    activeColor: "bg-black",
    clas: "",
  },
};

export const NotActice: Story = {
  args: {
    active: false,
    notActive: "bg-gray-300",
    clas: "",
  },
};
