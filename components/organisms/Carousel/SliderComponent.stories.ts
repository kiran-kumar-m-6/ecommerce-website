import type { Meta, StoryObj } from "@storybook/react";
import SliderComponent from "./SliderComponent";
import "keen-slider/keen-slider.min.css";

const meta: Meta<typeof SliderComponent> = {
  title: "Organisms/Carousel",
  component: SliderComponent,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof SliderComponent>;

const mockCarouselData = [
  {
    image:
      "https://images.ctfassets.net/cmz1u2vjgn0q/2WsWYnND5a8CYuazv9XITu/87ae36c55f9ba7a0552b357c86f1771d/Background_desktop__1_.png?fm=avif&q=75&w=4000",
    head: "NEW FLAVOUR JUST LANDED",
    foot: "Creamy Tobacco flavoured blu bar kit and pods are here.",
    btnText: "BROWSE FLAVOURS",
  },
  {
    image:
      "https://images.ctfassets.net/cmz1u2vjgn0q/4PiscJj66WEe92gSs69EzX/ea3166b29ef65667aa72f85a95e8eb17/iSENZIA_Desktop_Hero_Banner_Blue.png?fm=avif&q=75&w=4000",
    head: "FREE DELIVERY WITH VAPE SUBSCRIPTION",
    foot: "You can now get free delivery when you order with Vape Subscription.",
    btnText: "FIND OUT MORE",
  },
];

export const Default: Story = {
  args: {
    data: mockCarouselData,
  },
};
