import { render, screen } from "@testing-library/react";
import { DailyForeCast } from "./DailyForeCast";
import { beforeEach, describe, expect, test } from "vitest";

const mockDaily = {
  time: () => 1700000000,
  timeEnd: () => 1700000000 + 86400 * 3,
  interval: () => 86400,
  variables: (index: number) => {
    if (index === 0) {
      return { valuesArray: () => [30, 31, 32] };
    }

    if (index === 1) {
      return { valuesArray: () => [20, 21, 22] };
    }

    return { valuesArray: () => [0, 2, 65] };
  },
};

const mockWeather = {
  daily: () => mockDaily,
} as any;

const weatherWithoutDaily = {
      daily: () => undefined,
    } as any;

describe("DailyForeCast Component", () => {
  describe("Loading State", () => {
    beforeEach(() => {
      render(<DailyForeCast loading={true} />);
    });

    test("renders forecast title", () => {
      expect(screen.getByText(/Daily Forecast/i)).toBeInTheDocument();
    });

    test("renders skeleton placeholders", () => {
      const skeletons = document.querySelectorAll(".animate-pulse");
      expect(skeletons.length).toBe(7);
    });
  });

  describe("Weather Undefined", () => {
    beforeEach(() => {
      render(<DailyForeCast loading={false} weather={undefined} />);
    });

    test("renders skeleton placeholders", () => {
      const skeletons = document.querySelectorAll(".animate-pulse");
      expect(skeletons.length).toBe(7);
    });
  });

  describe("No Daily Forecast", () => {
    beforeEach(() => {
      render(
        <DailyForeCast
          loading={false}
          weather={weatherWithoutDaily}
        />
      );
    });

    test("shows fallback message", () => {
      expect(
        screen.getByText(/No daily forecast available/i)
      ).toBeInTheDocument();
    });
  });

  describe("Daily Forecast Data", () => {
    beforeEach(() => {
      render(
        <DailyForeCast
          loading={false}
          weather={mockWeather}
        />
      );
    });

    test("renders forecast title", () => {
      expect(screen.getByText(/Daily Forecast/i)).toBeInTheDocument();
    });

    test("renders weather icons", () => {
      const icons = screen.getAllByAltText("weather");
      expect(icons.length).toBeGreaterThan(0);
    });

    test("renders max temperature", () => {
      expect(screen.getByText("30°")).toBeInTheDocument();
    });

    test("renders min temperature", () => {
      expect(screen.getByText("20°")).toBeInTheDocument();
    });
  });
});