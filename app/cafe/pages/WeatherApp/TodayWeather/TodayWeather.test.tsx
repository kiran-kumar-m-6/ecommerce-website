import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { TodayWeather } from "./TodayWeather";
import type { WeatherApiResponse } from "@openmeteo/sdk/weather-api-response";

const mockCurrent = {
  variables: (index: number) => {
    if (index === 0) {
      return { value: () => 28.6 };
    }
    return null;
  },
  time: () => 1700000000,
};

const weatherWithCurrent = {
  current: () => mockCurrent,
  utcOffsetSeconds: () => 0,
} as unknown as WeatherApiResponse;

const locationData = {
  city: "London",
  country: "UK",
};

describe("TodayWeather Component", () => {
  describe("Loading State", () => {
    beforeEach(() => {
      render(
        <TodayWeather
          loading={true}
          weather={weatherWithCurrent}
          location={locationData}
        />,
      );
    });
  });

  describe("Weather Rendering", () => {
    beforeEach(() => {
      render(
        <TodayWeather
          loading={false}
          weather={weatherWithCurrent}
          location={locationData}
        />,
      );
    });

    test("renders location name", () => {
      expect(screen.getByText(/London, UK/i)).toBeInTheDocument();
    });

    test("renders temperature value", () => {
      expect(screen.getByText("28°")).toBeInTheDocument();
    });
  });

  describe("Missing Data Handling", () => {
    beforeEach(() => {
      render(
        <TodayWeather
          loading={false}
          weather={weatherWithCurrent}
        />,
      );
    });
  });
});