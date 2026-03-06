import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import ProductGrid from "./ProductGrid";
import { CartContext } from "@/components/organisms/Context/Context";

vi.mock("next/link", () => ({
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

const mockProducts = [
  {
    id: "cafe1",
    label: "BLU BOX KIT",
    image:
      "https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/BluBox_StarterKit_PL-bFmcuI0Z.png",
    flavour: "MINT",
    price: 4.99,
    description: "Intense smoke flavor with Full Filter technology.",
    btnText: "ADD TO CART",
    btnClass: "rounded-lg bg-yellow-500 hover:bg-[#0099ff] w-[150px] h-[45px]",
    nicotine: "20",
  },
];

describe("ProductGrid Component", () => {
  const addToCartMock = vi.fn();

  beforeEach(() => {
    render(
      <CartContext.Provider
        value={{
          cart: [],
          addToCart: addToCartMock,
          updateQuantity: vi.fn(),
          removeFromCart: vi.fn(),
        }}
      >
        <ProductGrid data={mockProducts} />
      </CartContext.Provider>,
    );
  });

  test("renders product information", () => {
    expect(screen.getByText(/blu box kit/i)).toBeInTheDocument();
    expect(screen.getByText(/mint/i)).toBeInTheDocument();
    expect(screen.getByText(/₹4.99/i)).toBeInTheDocument();
    expect(
      screen.getByText(/intense smoke flavor with full filter technology/i),
    ).toBeInTheDocument();
  });

  test("renders product image", () => {
    const image = screen.getByAltText(/mint/i);
    expect(image).toBeInTheDocument();
  });

  test("product link navigates correctly", () => {
    const link = screen.getByRole("link", { name: /mint/i });
    expect(link).toHaveAttribute("href", "/cafe/product/cafe1");
  });

  test("add to cart button calls context function", () => {
    const button = screen.getByRole("button", { name: /add to cart/i });
    fireEvent.click(button);
    expect(addToCartMock).toHaveBeenCalled();
  });
});
