"use client";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchWeatherApi } from "openmeteo";
import { Flex } from "@/components/atom";
import { NavBar } from "./Nav/NavBar";
import { SearchBar } from "./SearchBar/SearchBar";
import { TodayWeather } from "./TodayWeather/TodayWeather";
import { WeatherMetrics } from "./WeatherReport/WeatherReport";
import { DailyForeCast } from "./DailyForeCast/DailyForeCast";
import { HourlyForeCast } from "./HourlyForeCast/HourlyForeCast";
import { NavBarData, WeatherMetricsData } from "@/Data/WeatherData/WeatherData";
import type { WeatherApiResponse } from "@openmeteo/sdk/weather-api-response";

async function geocodeCity(city: string) {
  const res = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`,
  );
  const data = await res.json();
  if (!data?.results?.length) throw new Error("City not found");
  const { latitude, longitude, name, country } = data.results[0];
  return { latitude, longitude, city: name, country };
}

async function fetchWeather(latitydeValue: number, longitydeValue: number) {
  const params = {
    latitude: latitydeValue,
    longitude: longitydeValue,
    current_weather: true,
    current: "apparent_temperature",
    hourly: "temperature_2m,weather_code",
    daily: "temperature_2m_max,temperature_2m_min,weather_code",
    timezone: "auto",
  };
  const [res] = await fetchWeatherApi(
    "https://api.open-meteo.com/v1/forecast",
    params,
  );
  return res;
}

export const WeatherApp = () => {
  const [city, setCity] = useState("Bengaluru");

  const { data, isLoading, error } = useQuery<{
  location: {
    latitude: number;
    longitude: number;
    city: string;
    country: string;
  };
  weather: WeatherApiResponse;
}>({
  queryKey: ["weather", city],
  queryFn: async () => {
    const getLocation = await geocodeCity(city);
    const weather = await fetchWeather(getLocation.latitude, getLocation.longitude);
    return { location: getLocation, weather };
  },
});
  
  return (
    <div className="bg-[#0a0e42] min-h-screen w-full">
      <NavBar data={NavBarData} />
      <SearchBar onSearch={setCity} />

      {error && (
        <p className="text-red-400 text-center">
          Failed to load weather. Try another city.
        </p>
      )}

      <Flex className="flex-wrap gap-3 pb-10 justify-center">
        <div className="w-full max-w-4xl px-6">
          <TodayWeather
            location={data?.location}
            weather={data?.weather}
            loading={isLoading}
          />
          <WeatherMetrics
            weatherMetrics={WeatherMetricsData}
            weather={data?.weather}
            loading={isLoading}
          />
          <DailyForeCast
            location={data?.location}
            weather={data?.weather}
            loading={isLoading}
          />
        </div>

        <div className="w-full px-6 max-w-lg min-w-0">
          <HourlyForeCast
            location={data?.location}
            weather={data?.weather}
            loading={isLoading}
          />
        </div>
      </Flex>
    </div>
  );
};
