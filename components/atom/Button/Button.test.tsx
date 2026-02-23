import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { beforeEach, expect, test } from "vitest";
import { describe } from "vitest";

describe("Button Component", () => {
  beforeEach(() => {
    render(<Button label="Button" />);
  });

  (test("renders button label", () => {
    const btn = screen.getByRole("button");
    expect(screen.getByText("Button")).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
  }),
    test("renders button with custom background color", () => {
      const btn = screen.getByRole("button");
      expect(btn).toHaveClass(
        "text-center rounded-lg transition hover:scale-[1.02] active:scale-[0.98]",
      );
    }));
});
