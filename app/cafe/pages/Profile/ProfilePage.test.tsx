import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi, beforeEach } from "vitest";
import { ProfilePage } from "./ProfilePage";

vi.mock("react-redux", () => ({
  useSelector: (selector: any) =>
    selector({
      userDetails: {
        userDetails: [
          {
            Name: "John",
            lastName: "Doe",
            gmail: "john@gmail.com",
            mobile: "1234567890",
          },
          {
            Name: "Jane",
            lastName: "Smith",
            gmail: "jane@gmail.com",
            mobile: "9876543210",
          },
        ],
      },
    }),
}));

describe("ProfilePage", () => {
  beforeEach(() => {
    render(<ProfilePage />);
  });

  test("renders profile heading", () => {
    expect(screen.getByText(/profile/i)).toBeInTheDocument();
  });

  test("renders user name", () => {
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
  });

  test("renders user email", () => {
    expect(screen.getByText("john@gmail.com")).toBeInTheDocument();
  });

  test("renders user mobile", () => {
    expect(screen.getByText("1234567890")).toBeInTheDocument();
  });

  test("renders avatar initial", () => {
    expect(screen.getAllByText("J")[0]).toBeInTheDocument();
  });
});
