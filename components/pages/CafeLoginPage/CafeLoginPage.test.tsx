import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import CafeLoginPage from "./CafeLoginPage";

const replaceMock = vi.fn();
const setCookieMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({
    replace: replaceMock,
  }),
}));

vi.mock("./actions", () => ({
  setAuthCookie: (...args: any[]) => setCookieMock(...args),
}));

vi.mock("react-redux", () => ({
  useSelector: () => ({
    userDetails: [
      {
        gmail: "john@gmail.com",
        password: "123456",
      },
    ],
  }),
}));

describe("Test Cafe Login Page", () => {
  beforeEach(() => {
    render(<CafeLoginPage />);
  });

  test("check cafe login page was rendering", () => {
    expect(screen.getByTestId("cafe-login-page")).toBeInTheDocument();
  });

  test("check cafe login form was rendering", () => {
    expect(screen.getByTestId("cafe-login-form")).toBeInTheDocument();
  });

  test("renders login heading", () => {
    expect(screen.getByText(/cafe signin/i)).toBeInTheDocument();
  });

  test("renders email input", () => {
    expect(
      screen.getByPlaceholderText(/enter your username/i),
    ).toBeInTheDocument();
  });

  test("renders password input", () => {
    expect(
      screen.getByPlaceholderText(/enter your password/i),
    ).toBeInTheDocument();
  });

  test("renders signin button", () => {
    expect(screen.getByRole("button", { name: /signin/i })).toBeInTheDocument();
  });

  test("renders signup link", () => {
    expect(screen.getByRole("button", { name: /signup/i })).toBeInTheDocument();
  });

  test("shows email validation error", async () => {
    const email = screen.getByPlaceholderText(/username/i);

    fireEvent.change(email, { target: { value: "wrongemail" } });
    fireEvent.blur(email);

    expect(
      await screen.findByText(/invalid email format/i),
    ).toBeInTheDocument();
  });

  test("shows password validation error", async () => {
    const password = screen.getByPlaceholderText(/enter your password/i);

    fireEvent.change(password, { target: { value: "123" } });
    fireEvent.blur(password);

    expect(
      await screen.findByText(/at least 6 characters/i),
    ).toBeInTheDocument();
  });
});
