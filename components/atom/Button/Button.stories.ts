import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import Button from "@/components/atom/Button/Button";

const meta = {
  title: "Atom/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A customizable button component with size and background color options.",
      },
    },
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(() => console.log("Button clicked!")),
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Button",
  },
};

export const CustomColor: Story = {
  args: {
    label: "Dont Click me",
    onClick: fn(() => alert("Custom Color Button clicked!")),
    className: "bg-green-500 text-white font-serif font-bold text-xl",
  },
};

export const LargeButton: Story = {
  args: {
    label: "Large Button",
    onClick: fn(() => alert("Large Button clicked!")),
    className: "bg-yellow-400 text-white w-[200px] h-[60px] font-bold text-lg",
  },
};
