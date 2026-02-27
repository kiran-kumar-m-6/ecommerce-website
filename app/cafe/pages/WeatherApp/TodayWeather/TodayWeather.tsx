"use client";
import type { WeatherApiResponse } from "@openmeteo/sdk/weather-api-response";
import { Flex } from "@/components/atom";

type Props = {
  location?: {
    city: string;
    country: string;
  };
  weather?: WeatherApiResponse;
  loading: boolean;
};

export const TodayWeather = ({ location, weather, loading }: Props) => {
  if (loading || !weather || !location) {
    return (
      <Flex className="justify-center">
        <div className="w-full max-w-[784px] h-[200px] rounded-3xl bg-gray-700 " />
      </Flex>
    );
  }

  const currentWeather = weather.current()!;
  const temperature = Math.floor(currentWeather.variables(0)!.value());
  const utcOffsetSeconds = weather.utcOffsetSeconds();
  const apiDate = new Date((Number(currentWeather.time()) + utcOffsetSeconds) * 1000);
  const day = apiDate.toLocaleDateString("en-US", { weekday: "long" });
  const date = apiDate.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
  });

  return (
    <Flex className="justify-center">
      <div
        style={{ backgroundImage: `url('/bg-today-large.svg')` }}
        className="bg-cover bg-center grid w-full max-w-[784px] h-[200px] rounded-3xl"
      >
        <Flex className="justify-between items-center px-6">
          <div>
            <h3 className="capitalize text-white text-lg">
              {location.city}, {location.country}
            </h3>
            <p className="text-gray-300 capitalize pt-1">
              {day}, {date}
            </p>
          </div>
          <div>
            <h1 className="text-white text-6xl font-bold">{temperature}°</h1>
          </div>
        </Flex>
      </div>
    </Flex>
  );
};