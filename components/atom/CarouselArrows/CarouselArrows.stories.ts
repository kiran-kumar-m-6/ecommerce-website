import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import CarouselArrows from "./CarouselArrows";

const meta = {
  title: "Carousel/Arrows",
  component: CarouselArrows,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A customizable Carousel Arrows component with size and background color options.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(() => console.log("CarouselArrows clicked!")),
  },
} satisfies Meta<typeof CarouselArrows>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    arrowleft: "<<",
    direction: "left",
  },
};

export const Right: Story = {
  args: {
    direction: "right",
    arrowsright: ">>",
  },
};
