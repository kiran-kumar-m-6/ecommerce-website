import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import CartPage from "./CartPage";
import { CartContext } from "@/components/organisms/Context/Context";
import { Product } from "@/Data/Type/Product/Product";

vi.mock("@/hook/useOutSideClick", () => ({
  useOutsideClick: ({ onOutsideClick }: any) => {
    return {
      current: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      onOutsideClick,
    };
  },
}));

const mockCart = [
  {
    id: "1",
    name: "Mint Pod",
    image: "/mint.png",
    description: "Fresh mint vape",
    price: 100,
  },
];

const renderComponent = (
  cart: Product[] = [],
  open = true,
  onClose = vi.fn(),
) =>
  render(
    <CartContext.Provider
      value={{
        cart,
        addToCart: vi.fn(),
        updateQuantity: vi.fn(),
        removeFromCart: vi.fn(),
      }}
    >
      <CartPage open={open} onClose={onClose} />
    </CartContext.Provider>,
  );

describe("CartPage Component", () => {
  test("does not render when open is false", () => {
    renderComponent([], false);
    expect(screen.queryByText(/cart/i)).not.toBeInTheDocument();
  });

  test("renders cart page when open is true", () => {
    renderComponent();
    const cartPage = screen.getByTestId("cart-page");
    expect(screen.getByText(/cart/i)).toBeInTheDocument();
    expect(cartPage).toBeInTheDocument();
  });

  test("renders close button", () => {
    renderComponent();
    expect(screen.getByRole("button", { name: "✕" })).toBeInTheDocument();
  });

  test("calls onClose when close button is clicked", () => {
    const onClose = vi.fn();
    renderComponent([], true, onClose);
    fireEvent.click(screen.getByRole("button", { name: "✕" }));
    expect(onClose).toHaveBeenCalled();
  });

  test("shows empty basket message when cart is empty", () => {
    renderComponent([]);
    expect(screen.getByText(/your basket is empty/i)).toBeInTheDocument();
  });

  test("renders shopping basket message", () => {
    renderComponent([]);
    expect(screen.getByText(/your shopping basket/i)).toBeInTheDocument();
  });

  test("renders support message", () => {
    renderComponent([]);
    expect(screen.getByText(/contact customer support/i)).toBeInTheDocument();
  });

  describe("When was not empty", () => {
    test("renders cart items when cart is not empty", () => {
      renderComponent(mockCart);
      expect(screen.getByText(/mint pod/i)).toBeInTheDocument();
    });

    test("renders product description", () => {
      renderComponent(mockCart);
      expect(screen.getByText(/fresh mint vape/i)).toBeInTheDocument();
    });

    test("renders product price", () => {
      renderComponent(mockCart);
      expect(screen.getByText(/₹100/i)).toBeInTheDocument();
    });

    test("renders product image", () => {
      renderComponent(mockCart);
      expect(screen.getByRole("img")).toBeInTheDocument();
    });

    test("renders delivery message when cart has items", () => {
      renderComponent(mockCart);
      expect(
        screen.getByText(/free delivery for all vape subscription/i),
      ).toBeInTheDocument();
    });

    test("does not show empty basket message when cart has items", () => {
      renderComponent(mockCart);
      expect(
        screen.queryByText(/your basket is empty/i),
      ).not.toBeInTheDocument();
    });

    test("renders multiple cart items", () => {
      renderComponent([...mockCart, ...mockCart]);

      const items = screen.getAllByText(/mint pod/i);
      expect(items.length).toBeGreaterThan(1);
    });
  });
});
