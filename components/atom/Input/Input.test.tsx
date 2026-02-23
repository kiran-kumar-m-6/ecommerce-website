import { render, screen } from "@testing-library/react";
import Input from "./Input";
import { expect, test } from "vitest";
import { describe, beforeEach } from "vitest";

describe("Input Component", () => {
  beforeEach(() => {
    render(
      <Input
        type="text"
        name="testInput"
        id="testInput"
        placeholder="Enter text"
      />,
    );
  });

  (test("renders input component with correct attributes and classes", () => {
    const inp = screen.getByRole("input");
    expect(inp).toBeInTheDocument();
    expect(inp).toHaveClass("border border-gray-300 rounded-lg");
  }),
    test("input has correct placeholder", () => {
      const inp = screen.getByRole("input");
      expect(inp).toHaveAttribute("placeholder", "Enter text");
    }),
    test("input has correct type attribute", () => {
      const inp = screen.getByRole("input");
      expect(inp).toHaveAttribute("type", "text");
    }));
});
