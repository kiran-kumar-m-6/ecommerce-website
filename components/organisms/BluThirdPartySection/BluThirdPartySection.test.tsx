import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import BluThirdPartySection from "./BluThirdPartySection";

describe("Testing BluThirdParty Section", () => {
  beforeEach(() => {
    render(<BluThirdPartySection />);
  });
  test("check bluthirdparty section was rendering", () => {
    expect(screen.getByTestId("thirdpary-page")).toBeInTheDocument();
  });

  test("renders heading", () => {
    expect(
      screen.getByText(/subscription comparision calculator/i),
    ).toBeInTheDocument();
  });

  test("renders description text", () => {
    expect(
      screen.getByText(/calculate the price difference/i),
    ).toBeInTheDocument();
  });

  test("renders range slider", () => {
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  test("default slider value is 1", () => {
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("updates slider value when changed", () => {
    const slider = screen.getByRole("slider");

    fireEvent.change(slider, { target: { value: "10" } });

    expect(screen.getByText("10")).toBeInTheDocument();
  });

  test("renders disclaimer text", () => {
    expect(
      screen.getByText(/estimated savings provided by this calculator/i),
    ).toBeInTheDocument();
  });
});
