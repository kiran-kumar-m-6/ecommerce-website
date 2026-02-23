import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Input from "./Input";

const meta = {
  title: "Atom/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    type: "text",
    placeholder: "Input-small",
  },
};

export const PasswordType: Story = {
  args: {
    type: "password",
    placeholder: "Password-type",
  },
};

export const EmailType: Story = {
  args: {
    type: "email",
    placeholder: "Email-type",
  },
};
