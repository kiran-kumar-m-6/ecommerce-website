import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import SingleProductView from "./SingleProductView";
import { CartContext } from "@/components/organisms/Context/Context";

const mockProduct = {
  id: "cafe1",
  label: "BLU BOX KIT",
  image:
    "https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/BluBox_StarterKit_PL-bFmcuI0Z.png",
  productimage: [
    {
      image:
        "https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/box%20kit%20shira%20mint-5wiXTe2j.png",
    },
    {
      image:
        "https://images.cdn.europe-west1.gcp.commercetools.com/93d1f945-5f87-4b87-84d5-63206de3eddf/box%20kit%20shira%20strawb-Q4Foi9_j.png",
    },
  ],
  flavour: "MINT",
  price: 4.99,
  description: "Intense smoke flavor with Full Filter technology.",
  fulldetails:
    "Blu box rechargeable device plus one mint vape pod with a cooling fresh mint flavour. We don’t include a charging cable because most of us already have a drawer full of them! *Puff count is a maximum estimate of 1 second puffs per pod based on lab testing of newly manufactured products.  Actual number of puffs may vary depending on individual usage and flavour.",
  btnText: "ADD TO CART",
  textClass: "text-blue-500",
  btnClass: "rounded-lg bg-yellow-500 hover:bg-[#0099ff] w-[150px] h-[45px]",
  nicotine: "20",
  flavorSystemType: "bluBox",
  productType: "disposable",
};

let addToCartMock = vi.fn();

describe("Test Single Product View Page", () => {
  beforeEach(() => {
    addToCartMock = vi.fn();
    render(
      <CartContext.Provider
        value={{
          cart: [],
          addToCart: addToCartMock,
          updateQuantity: vi.fn(),
          removeFromCart: vi.fn(),
        }}
      >
        <SingleProductView data={mockProduct} />
      </CartContext.Provider>,
    );
  });

  test("check single product page was render", () => {
    expect(screen.getByTestId("singleproduct-page")).toBeInTheDocument();
  });

  test("renders product label", () => {
    expect(screen.getByText(/blu box kit/i)).toBeInTheDocument();
  });

  test("renders product flavour", () => {
    expect(screen.getAllByText(/mint/i)[0]).toBeInTheDocument();
  });

  test("renders product price", () => {
    expect(screen.getByText(/4.99/i)).toBeInTheDocument();
  });

  test("renders nicotine strength", () => {
    expect(screen.getByText(/20 mg\/ml/i)).toBeInTheDocument();
  });

  test("renders add to cart button", () => {
    expect(
      screen.getByRole("button", { name: /add to cart/i }),
    ).toBeInTheDocument();
  });

  test("calls addToCart when button clicked", () => {
    fireEvent.click(screen.getByRole("button", { name: /add to cart/i }));
    expect(addToCartMock).toHaveBeenCalled();
  });

  test("renders pay securely text", () => {
    expect(screen.getByText(/pay securely/i)).toBeInTheDocument();
  });

  test("renders guarantee message", () => {
    expect(
      screen.getByText(/30 day money back guarantee/i),
    ).toBeInTheDocument();
  });

  test("renders same day shipping text", () => {
    expect(screen.getByText(/same day shipping/i)).toBeInTheDocument();
  });

  test("renders free shipping text", () => {
    expect(screen.getByText(/free shipping on orders/i)).toBeInTheDocument();
  });

  test("renders free returns text", () => {
    expect(screen.getByText(/free returns/i)).toBeInTheDocument();
  });
});
