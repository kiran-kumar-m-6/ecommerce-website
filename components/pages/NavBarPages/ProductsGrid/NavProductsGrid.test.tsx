import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import NavProductsGrid from "./NavProductsGrid";

const mockData = [
  {
    image: "/pod.png",
    alt: "Mint Pod",
    heading: "Mint Pod",
    description: "Fresh mint flavour",
    price: 100,
    available: 5,
  },
  {
    image: "/berry.png",
    alt: "Berry Pod",
    heading: "Berry Pod",
    description: "Sweet berry flavour",
  },
];

const renderComponent = (data = mockData, className = "") =>
  render(<NavProductsGrid data={data} className={className} />);

describe("Testing NavBar Products Grid", () => {
  test("renders grid container", () => {
    renderComponent();
    expect(screen.getByTestId("navproducts-page")).toBeInTheDocument();
  });

  test("renders all product headings", () => {
    renderComponent();
    expect(screen.getByText(/mint pod/i)).toBeInTheDocument();
    expect(screen.getByText(/berry pod/i)).toBeInTheDocument();
  });

  test("renders product descriptions", () => {
    renderComponent();
    expect(screen.getByText(/fresh mint flavour/i)).toBeInTheDocument();
    expect(screen.getByText(/sweet berry flavour/i)).toBeInTheDocument();
  });

  test("renders product images", () => {
    renderComponent();
    expect(screen.getByAltText(/mint pod/i)).toBeInTheDocument();
    expect(screen.getByAltText(/berry pod/i)).toBeInTheDocument();
  });

  test("renders price when provided", () => {
    renderComponent();
    expect(screen.getByText(/price: ₹100/i)).toBeInTheDocument();
  });

  test("does not render price when undefined", () => {
    renderComponent();
    expect(screen.queryByText(/price: ₹/i)).toBeInTheDocument();
  });

  test("renders availability when provided", () => {
    renderComponent();
    expect(screen.getByText(/kits available: 5/i)).toBeInTheDocument();
  });

  test("does not render availability when undefined", () => {
    renderComponent();
    expect(screen.queryByText(/kits available:/i)).toBeInTheDocument();
  });

  test("renders correct number of products", () => {
    renderComponent();
    const headings = screen.getByRole("heading", {
      level: 1,
      name: /Mint Pod/i,
    });
    expect(headings).toBeInTheDocument();
  });

  test("handles empty product array", () => {
    renderComponent([]);
    expect(screen.getByTestId("navproducts-page")).toBeInTheDocument();
  });

  test("renders correct price text format", () => {
    renderComponent();
    expect(screen.getByText("Price: ₹100")).toBeInTheDocument();
  });
});
