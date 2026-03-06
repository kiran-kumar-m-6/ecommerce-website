import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import { WeatherMetrics } from "./WeatherReport";
import type { WeatherApiResponse } from "@openmeteo/sdk/weather-api-response";

const mockCurrent = {
  variables: (index: number) => {
    if (index === 0) {
      return { value: () => 25 };
    }

    if (index === 1) {
      return { value: () => 12 };
    }

    return null;
  },
};

const mockHourly = {
  variables: (index: number) => {
    if (index === 0) {
      return { valuesArray: () => [60] };
    }

    return { valuesArray: () => [5] };
  },
};

const weatherData = {
  current: () => mockCurrent,
  hourly: () => mockHourly,
} as unknown as WeatherApiResponse;

const metricsData = [
  { metricType: "Feels Like" },
  { metricType: "Humidity" },
  { metricType: "Wind" },
  { metricType: "Precipitation" },
];

describe("WeatherMetrics Component", () => {
  describe("Loading State", () => {
    beforeEach(() => {
      render(
        <WeatherMetrics
          loading={true}
          weather={weatherData}
          weatherMetrics={metricsData}
        />,
      );
    });

    test("does not show metric titles while loading", () => {
      expect(screen.queryByText("Feels Like")).not.toBeInTheDocument();
    });

    test("does not show metric values while loading", () => {
      expect(screen.queryByText("25°")).not.toBeInTheDocument();
    });
  });

  describe("Metrics Rendering", () => {
    beforeEach(() => {
      render(
        <WeatherMetrics
          loading={false}
          weather={weatherData}
          weatherMetrics={metricsData}
        />,
      );
    });

    test("renders metric titles", () => {
      expect(screen.getByText("Feels Like")).toBeInTheDocument();
      expect(screen.getByText("Humidity")).toBeInTheDocument();
      expect(screen.getByText("Wind")).toBeInTheDocument();
      expect(screen.getByText("Precipitation")).toBeInTheDocument();
    });

    test("renders correct metric values", () => {
      expect(screen.getByText("25°")).toBeInTheDocument();
      expect(screen.getByText("60°")).toBeInTheDocument();
      expect(screen.getByText("12°")).toBeInTheDocument();
      expect(screen.getByText("5°")).toBeInTheDocument();
    });

    test("renders four metric values", () => {
      const values = screen.getAllByText(/°/);
      expect(values.length).toBe(4);
    });
  });

  describe("Weather Missing", () => {
    beforeEach(() => {
      render(
        <WeatherMetrics
          loading={false}
          weatherMetrics={metricsData}
        />,
      );
    });

    test("does not show metric titles when weather is missing", () => {
      expect(screen.queryByText("Feels Like")).not.toBeInTheDocument();
    });

    test("does not show metric values when weather is missing", () => {
      expect(screen.queryByText(/°/)).not.toBeInTheDocument();
    });
  });

  describe("Metric List Handling", () => {
    beforeEach(() => {
      render(
        <WeatherMetrics
          loading={false}
          weather={weatherData}
          weatherMetrics={[{ metricType: "Feels Like" }]}
        />,
      );
    });

    test("renders only one metric title", () => {
      expect(screen.getByText("Feels Like")).toBeInTheDocument();
    });

    test("renders corresponding metric value", () => {
      expect(screen.getByText("25°")).toBeInTheDocument();
    });
  });
});