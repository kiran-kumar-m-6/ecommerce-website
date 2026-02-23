import { render, screen } from "@testing-library/react";
import { beforeEach, expect, test } from "vitest";
import { describe } from "vitest";
import { carouselData } from "@/Data/CarouselData/cafe/carouselData";
import SliderComponent from "./SliderComponent";

describe("Slider Testing", () => {
  beforeEach(() => {
    render(<SliderComponent data={carouselData} />);
  });

  test("Check Button on Carousel", () => {
    const buttons = screen.getAllByRole("button", { name: /BROWSE FLAVOURS/i });
    expect(buttons.length).toBeGreaterThan(0);
  });

  test("Check Arrow Buttons on the Carousel", () => {
    const arrowButtons = screen.getByTestId("Carousel-Arrows");
    expect(arrowButtons).toBeInTheDocument();
  });

  test("Check Heading text on the Carousel", async () => {
    const heading = await screen.getByRole("heading", {
      name: /NEW FLAVOUR JUST LANDED/i,
      level: 2,
    });
    expect(heading).toBeInTheDocument();
  });

  test("Check Paragraph text on the Carousel", () => {
    expect(
      screen.getByText(
        "Creamy Tobacco flavoured blu bar kit and pods are here.",
      ),
    ).toBeInTheDocument();
  });

  test("Check SliderDots are present", () => {
    const sliderDots = screen.getByTestId("Carousel-dots");
    expect(sliderDots).toBeInTheDocument();
  });
});
