import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { NavBar } from "./NavBar";

const mockNavData = [
  {
    temprature: [
      { label: "celsius", isOpen: true },
      { label: "fahrenheit", isOpen: false },
    ],
    windSpeed: [
      { label: "km/h", isOpen: true },
      { label: "mph", isOpen: false },
    ],
    precipitation: [
      { label: "mm", isOpen: true },
      { label: "inch", isOpen: false },
    ],
  },
];

describe("NavBar Component", () => {
  describe("Initial Render", () => {
    beforeEach(() => {
      render(<NavBar logo="/logo.svg" data={mockNavData} />);
    });

    test("renders logo", () => {
      const logo = screen.getByAltText(/Weather Now/i);
      expect(logo).toBeInTheDocument();
    });

    test("renders Units button", () => {
      const button = screen.getByRole("button", { name: /Units/i });
      expect(button).toBeInTheDocument();
    });
  });

  describe("Menu Interaction", () => {
    beforeEach(() => {
      render(<NavBar logo="/logo.svg" data={mockNavData} />);
      const button = screen.getByRole("button", { name: /Units/i });
      fireEvent.click(button);
    });

    test("opens units menu", () => {
      expect(screen.getByText(/Switch to Imperial/i)).toBeInTheDocument();
    });

    test("renders Temperature section", () => {
      expect(screen.getByText(/Temperature/i)).toBeInTheDocument();
    });

    test("renders Wind Speed section", () => {
      expect(screen.getByText(/Wind Speed/i)).toBeInTheDocument();
    });

    test("renders Precipitation section", () => {
      expect(screen.getByText(/Precipitation/i)).toBeInTheDocument();
    });
  });

  describe("Selected Units", () => {
    beforeEach(() => {
      render(<NavBar logo="/logo.svg" data={mockNavData} />);
      const button = screen.getByRole("button", { name: /Units/i });
      fireEvent.click(button);
    });

    test("shows selected wind speed option", () => {
      expect(screen.getByText("km/h")).toBeInTheDocument();
    });

    test("shows selected precipitation option", () => {
      expect(screen.getByText("mm")).toBeInTheDocument();
    });
  });
});