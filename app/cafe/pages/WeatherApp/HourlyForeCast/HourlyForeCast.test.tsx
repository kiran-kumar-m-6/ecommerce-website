import { render, screen, fireEvent } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { HourlyForeCast } from "./HourlyForeCast";
import type { WeatherApiResponse } from "@openmeteo/sdk/weather-api-response";

const mockHourly = {
  time: () => 1700000000,
  timeEnd: () => 1700000000 + 3600 * 6,
  interval: () => 3600,
  variables: (index: number) => {
    if (index === 0) {
      return { valuesArray: () => [25, 26, 27, 28, 29, 30] };
    }

    return { valuesArray: () => [0, 2, 3, 65, 1, 0] };
  },
};

const weatherWithHourly = {
  hourly: () => mockHourly,
} as unknown as WeatherApiResponse;

describe("HourlyForeCast Component", () => {
  describe("Loading State", () => {
    beforeEach(() => {
      render(<HourlyForeCast loading={true} weather={weatherWithHourly} />);
    });

    test("renders loading skeleton", () => {
      const skeleton = document.querySelector(".animate-pulse");
      expect(skeleton).toBeInTheDocument();
    });

    test("renders loading container", () => {
      const container = document.querySelector(".bg-gray-700");
      expect(container).toBeInTheDocument();
    });
  });

  describe("Hourly Forecast Rendering", () => {
    beforeEach(() => {
      render(<HourlyForeCast loading={false} weather={weatherWithHourly} />);
    });

    test("renders forecast title", () => {
      expect(screen.getByText(/Hourly forecast/i)).toBeInTheDocument();
    });

    test("renders day selector button", () => {
      expect(
        screen.getByRole("button", { name: /Monday/i })
      ).toBeInTheDocument();
    });

  });

  describe("Day Selection", () => {
    beforeEach(() => {
      render(<HourlyForeCast loading={false} weather={weatherWithHourly} />);
    });

    test("opens day dropdown", () => {
      const button = screen.getByRole("button", { name: /Monday/i });
      fireEvent.click(button);

      expect(screen.getByText("Tuesday")).toBeInTheDocument();
    });

    test("changes selected day", () => {
      const button = screen.getByRole("button", { name: /Monday/i });
      fireEvent.click(button);

      const dayOption = screen.getByText("Tuesday");
      fireEvent.click(dayOption);

      expect(
        screen.getByRole("button", { name: /Tuesday/i })
      ).toBeInTheDocument();
    });
  });
});