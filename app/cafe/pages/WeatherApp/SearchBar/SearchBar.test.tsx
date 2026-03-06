import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, test, vi } from "vitest";
import { SearchBar } from "./SearchBar";

describe("SearchBar Component", () => {
  const mockSearch = vi.fn();

  describe("Initial Render", () => {
    beforeEach(() => {
      render(<SearchBar onSearch={mockSearch} />);
    });

    test("renders heading", () => {
      expect(
        screen.getByText(/How's the sky looking today/i)
      ).toBeInTheDocument();
    });

    test("renders input field", () => {
      const input = screen.getByPlaceholderText(/Search for a place/i);
      expect(input).toBeInTheDocument();
    });

    test("renders search button", () => {
      const button = screen.getByRole("button", { name: /Search/i });
      expect(button).toBeInTheDocument();
    });
  });

  describe("Input Interaction", () => {
    beforeEach(() => {
      render(<SearchBar onSearch={mockSearch} />);
    });

    test("updates input value when typing", () => {
      const input = screen.getByPlaceholderText(/Search for a place/i);
      fireEvent.change(input, { target: { value: "London" } });

      expect((input as HTMLInputElement).value).toBe("London");
    });
  });

  describe("Form Submission", () => {
    beforeEach(() => {
      render(<SearchBar onSearch={mockSearch} />);
    });

    test("calls onSearch when submitting valid city", () => {
      const input = screen.getByPlaceholderText(/Search for a place/i);
      const button = screen.getByRole("button", { name: /Search/i });

      fireEvent.change(input, { target: { value: "Paris" } });
      fireEvent.click(button);

      expect(mockSearch).toHaveBeenCalledWith("Paris");
    });

    test("clears input after submit", () => {
      const input = screen.getByPlaceholderText(/Search for a place/i);
      const button = screen.getByRole("button", { name: /Search/i });

      fireEvent.change(input, { target: { value: "Tokyo" } });
      fireEvent.click(button);

      expect((input as HTMLInputElement).value).toBe("");
    });
  });
});