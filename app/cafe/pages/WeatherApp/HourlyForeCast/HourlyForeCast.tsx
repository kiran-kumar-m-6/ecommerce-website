"use client";
import { useMemo, useState } from "react";
import type { WeatherApiResponse } from "@openmeteo/sdk/weather-api-response";
import { Flex, Icon } from "@/components/atom";


type Props = {
  location?: {
    city: string;
    country: string;
  };
  weather?: WeatherApiResponse;
  loading: boolean;
};

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
type Day = (typeof DAYS)[number];

const mapCodeToIcon = (code: number): string => {
  const rules = [
    { condition: code === 0, icon: "/icon-sunny.webp" },
    { condition: code <= 3,  icon: "/icon-partly-cloudy.webp" },
    { condition: code <= 67, icon: "/icon-rain.webp" },
  ];

  return rules.find(rule => rule.condition)?.icon ?? "/icon-overcast.webp";
};

export const HourlyForeCast = ({ weather, loading }: Props) => {
  const [selectDay, setSelectDay] = useState(false);
  const [selectedDay, setSelectedDay] = useState<Day>("Monday");

  const hourlyTemperature = weather?.hourly?.();
  const startTime = hourlyTemperature ? Number(hourlyTemperature.time()) : 0;
  const endTime = hourlyTemperature ? Number(hourlyTemperature.timeEnd()) : 0;
  const intervalSeconds = hourlyTemperature ? hourlyTemperature.interval() : 0;
  const temperature =
  Array.from(hourlyTemperature?.variables?.(0)?.valuesArray?.() ?? []);

const setIcons =
  Array.from(hourlyTemperature?.variables?.(1)?.valuesArray?.() ?? []);

  const totalHours =
    startTime != 0 && endTime != 0 && intervalSeconds
      ? Math.floor((endTime - startTime) / intervalSeconds)
      : 0;

  const times = useMemo(() => {
    if (!startTime || !intervalSeconds || !totalHours) return [];
    return Array.from({ length: totalHours }, (_, i) => {
      const seconds = startTime + i * intervalSeconds;
      return new Date(seconds * 1000);
    });
  }, [startTime, intervalSeconds, totalHours]);

  const hourlyTemperatureByDay = useMemo(() => {
    const result: Record<Day, number[]> = {} as Record<Day, number[]>;
    times.forEach((date, index) => {
      const day = date.toLocaleDateString("en-US", { weekday: "long" }) as Day;
      (result[day] ??= []).push(index);
    });

    return result;
  }, [times]);

  const SKELTON_COUNT = 8;

  if (loading || !weather) {
    return (
      
      <div className="max-h-[610px]">
        <div className="bg-gray-700 rounded-lg py-5 px-4 min-w-[300px] animate-pulse">
          <Flex className="justify-between">
            <div className="h-5 bg-gray-600 rounded w-32 mb-4" />
            <div className="h-5 bg-gray-600 rounded w-20 mb-4" />
          </Flex>
          {[...Array(SKELTON_COUNT ?? 8)].map((_, i) => (
            <div key={i} className="h-[42px] bg-gray-600 rounded mb-2" />
          ))}
        </div>
      </div>
    );
  }
  
  const selectedIndices = hourlyTemperatureByDay[selectedDay] ?? [];

  return (
    <div className="bg-gray-700 rounded-lg py-3 px-3 min-w-[300px]">
      <Flex className="justify-between items-center pb-3">
        <h1 className="text-white font-bold">Hourly forecast</h1>
        <div className="relative">
          <button
            className="bg-gray-800 py-2 px-4 rounded-lg text-white capitalize"
            onClick={() => setSelectDay((prev) => !prev)}
          >
            {selectedDay} <span>⌄</span>
          </button>

          {selectDay && (
            <div className="absolute bg-gray-800 rounded-lg px-2 py-2 right-0 mt-2 z-50 w-[150px]">
              {DAYS.map((day) => (
                <button
                  key={day}
                  className="block w-full text-left text-white py-2 px-2 hover:bg-gray-600 rounded-md"
                  onClick={() => {
                    setSelectedDay(day);
                    setSelectDay(false);
                  }}
                >
                  {day}
                </button>
              ))}
            </div>
          )}
        </div>
      </Flex>

      <div className="grid gap-2 max-h-[425px] overflow-y-auto pr-1">
        {selectedIndices?.slice(0, 12).map((i) => (
          <Flex
            key={i}
            className="bg-gray-600 rounded-md px-3 py-1 justify-between"
          >
            <Flex className="gap-2 items-center">
              <Icon
                src={mapCodeToIcon(setIcons[i])}
                alt="weather-type"
                height={40}
                width={40}
              />
              <p className="text-white">
                {times[i]?.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </Flex>
            <p className="text-white">
              {temperature[i] != null ? Math.round(temperature[i]) : "--"}°
            </p>
          </Flex>
        ))}
      </div>
    </div>
  );
};