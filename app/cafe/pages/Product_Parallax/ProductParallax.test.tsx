import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, expect, test, vi } from "vitest";
import { describe } from "vitest";
import { ProductParallax } from "./ProductParallax";
import { ProductParallaxData } from "@/Data/ProductParallaxData/ProductParallaxData";
import { CarouselDots } from "./CarouselDots";

describe("Testing Product Parallax", () => {
  beforeEach(() => {
    render(<ProductParallax data={ProductParallaxData} />);
  });

  describe("Rendering Components", () => {
    test("Checking Product Parallax Component was Redndering", () => {
      expect(screen.getByTestId("product-component")).toBeInTheDocument();
    });

    test("Checking Product Image Was Rendering", () => {
      const productImage = screen.getByAltText("blu_device");
      expect(productImage).toBeInTheDocument();
    });

    test("Checking Product Parallax was Rendering", () => {
      const parallax = screen.getByTestId("product-parallax");
      expect(parallax).toBeInTheDocument();
    });

    test("Checking Parallax Heading was Rendering", () => {
      const parallaxHeading = screen.getByText(/Blu Pro E-Cigarette Kit/i);
      expect(parallaxHeading).toBeInTheDocument();
    });

    test("Checking Parallax Paragraph was Rendering", () => {
      expect(
        screen.getByText(/Refillable and rechargeable/i),
      ).toBeInTheDocument();
    });
  });

  describe("Checking Scroll Functionality", () => {
    test("scrolling wheel moves to next slide", async () => {
      fireEvent.wheel(window, { deltaY: 50 });
      const updatedText = await screen.findByText(/Ceramic pod technology/i);
      expect(updatedText).toBeInTheDocument();
    });

    test("scroll wheel reaches last slide", async () => {
      for (let i = 0; i < 4; i++) {
        fireEvent.wheel(window, { deltaY: 50 });
      }
      const updatedText = await screen.findByText(
        /Refillable and rechargeable/i,
      );
      expect(updatedText).toBeInTheDocument();
    });

    test("does not move above first slide", async () => {
      fireEvent.wheel(window, {
        deltaY: -100,
        clientX: 100,
        clientY: 100,
      });

      const sameText = await screen.findByText(/Blu Pro E-Cigarette Kit/i);
      expect(sameText).toBeInTheDocument();
    });

    test("does not move past last slide", async () => {
      for (let i = 0; i < 4; i++) {
        fireEvent.wheel(window, {
          deltaY: 100,
          clientX: 100,
          clientY: 100,
        });
      }

      const updatedText = await screen.findByText(
        /Refillable and rechargeable/i,
      );
      expect(updatedText).toBeInTheDocument();

      fireEvent.wheel(window, {
        deltaY: 100,
        clientX: 100,
        clientY: 100,
      });

      const newText = await screen.findByText(/Blu Pro E-Cigarette Kit/i);
      expect(newText).toBeInTheDocument();
    });
  });

  describe("Checking Touch Functionality", () => {
    beforeEach(() => {
      vi.spyOn(HTMLElement.prototype, "getBoundingClientRect").mockReturnValue({
        x: 0,
        y: 0,
        width: 500,
        height: 500,
        top: 0,
        left: 0,
        bottom: 500,
        right: 500,
        toJSON: () => {},
      } as DOMRect);
    });

    test("check text on slide one", () => {
      const textAppears = screen.getByText(/Refillable and rechargeable/i);
      expect(textAppears).toBeInTheDocument();
    });

    test("changes slide on scroll", async () => {
      fireEvent.wheel(window, {
        deltaY: 100,
        clientX: 200,
        clientY: 200,
      });

      const updatedText = await screen.findByText(/Ceramic pod technology/i);
      expect(updatedText).toBeInTheDocument();
    });
  });

  describe("checking dots functionality", () => {
    test("renders correct number of dots", () => {
      const dots = screen.getAllByTestId("carousel-dot");
      expect(dots).toHaveLength(ProductParallaxData[0].ParallaxData.length);
    });

    test("renders no dots when data is undefined", () => {
      render(<CarouselDots activeIndex={0} />);

      const dots = screen.queryAllByTestId("carousel-dot");

      expect(dots.length).toBe(0);
    });
  });
});