import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import CafeSignUpPage from "./CafeSignUpPage";

const replaceMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    replace: replaceMock,
  }),
}));

const dispatchMock = vi.fn();

vi.mock("react-redux", () => ({
  useDispatch: () => dispatchMock,
}));

vi.mock("next/link", () => ({
  default: ({ children, href }: any) => <a href={href}>{children}</a>,
}));

describe("Testing Cafe SignUp Page", () => {
  beforeEach(() => {
    render(<CafeSignUpPage />);
  });

  test("check signup page was rendering", () => {
    expect(screen.getByTestId("cafe-signup-page")).toBeInTheDocument();
  });

  test("check signup form was rendering", () => {
    expect(screen.getByTestId("cafe-signup-form")).toBeInTheDocument();
  });

  test("renders signup heading", () => {
    expect(screen.getByText(/cafe signup/i)).toBeInTheDocument();
  });

  test("renders first name input", () => {
    expect(
      screen.getByPlaceholderText(/enter your first name/i),
    ).toBeInTheDocument();
  });

  test("renders last name input", () => {
    expect(
      screen.getByPlaceholderText(/enter your last name/i),
    ).toBeInTheDocument();
  });

  test("renders mobile input", () => {
    expect(
      screen.getByPlaceholderText(/enter your mobile number/i),
    ).toBeInTheDocument();
  });

  test("renders email input", () => {
    expect(
      screen.getByPlaceholderText(/enter your username/i),
    ).toBeInTheDocument();
  });

  test("renders password inputs", () => {
    expect(screen.getAllByPlaceholderText(/password/i).length).toBeGreaterThan(
      0,
    );
  });

  test("renders signup button", () => {
    expect(screen.getByRole("button", { name: /signup/i })).toBeInTheDocument();
  });

  test("renders signin link", () => {
    expect(screen.getByRole("link", { name: /signin/i })).toBeInTheDocument();
  });

  test("shows error for invalid mobile", async () => {
    const mobile = screen.getByPlaceholderText(/mobile/i);
    fireEvent.change(mobile, { target: { value: "123" } });
    fireEvent.blur(mobile);
    expect(
      await screen.findByText(/mobile number must be exactly 10 digits/i),
    ).toBeInTheDocument();
  });

  test("submits form successfully", async () => {
    fireEvent.change(screen.getByPlaceholderText(/first name/i), {
      target: { value: "John" },
    });

    fireEvent.change(screen.getByPlaceholderText(/last name/i), {
      target: { value: "Doe" },
    });

    fireEvent.change(screen.getByPlaceholderText(/mobile/i), {
      target: { value: "1234567890" },
    });

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: "john@gmail.com" },
    });

    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "123456" },
    });

    fireEvent.change(screen.getByPlaceholderText(/re_enter_your_password/i), {
      target: { value: "123456" },
    });

    fireEvent.click(screen.getByRole("button", { name: /signup/i }));

    await waitFor(() => {
      expect(dispatchMock).toHaveBeenCalled();
      expect(replaceMock).toHaveBeenCalledWith("/cafe/login");
    });
  });
});
