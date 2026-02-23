import { render, screen } from "@testing-library/react";
import { beforeEach, describe, test, expect } from "vitest";
import MobileMenu from "./MobileMenu";

describe("Testing Mobile Menu", () => {
  beforeEach(() => {
    render(<MobileMenu open={true} onClose={() => false} />);
  });

  test("Check Close Button Render", () => {
    const button = screen.getByTestId("menu-closebutton-container");
    expect(button).toBeInTheDocument();
  });

  test("Check new section was render", () => {
    const newSection = screen.getByTestId("menu-newitems-container");
    expect(newSection).toBeInTheDocument();
  });

  test("Check vape products heading render", () => {
    const heading = screen.getByRole("headig");
    expect(heading).toBeInTheDocument();
  });

  test("Check vape products render", () => {
    const products = screen.getByTestId("menu-menuitems-container");
    expect(products).toBeInTheDocument();
  });

  test("Check Page Links render", () => {
    const pageLinks = screen.getByTestId("menu-pages-container");
    expect(pageLinks).toBeInTheDocument();
  });
});
