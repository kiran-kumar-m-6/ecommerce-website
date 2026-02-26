"use client";
import type { WeatherApiResponse } from "@openmeteo/sdk/weather-api-response";
import { Flex } from "@/components/atom";
import { WeatherMetricsType } from "@/Data/Type/WeatherApp/WeatherAppTypes";


type Props = {
  weather?: WeatherApiResponse;
  loading: boolean;
  weatherMetrics?: WeatherMetricsType[];
};

export const WeatherMetrics = ({ weather, loading, weatherMetrics }: Props) => {

  let SKELTON_COUNT = weatherMetrics?.length ?? 4;

  if (loading || !weather) {
    return (
      <Flex className="flex-wrap justify-center gap-4 py-6 pt-6">
        {[...Array(SKELTON_COUNT)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-700 w-[182px] h-[85px] rounded-lg animate-pulse"
          ></div>
        ))}
      </Flex>
    );
  }

  const currentWeather = weather.current?.();
  const weatherFeelsLike = Math.round(currentWeather?.variables?.(0)?.value?.() ?? 0);
  const humidityArr = weather.hourly?.()?.variables(0)?.valuesArray?.();
  const humidity = humidityArr?.[0] != null ? Math.round(humidityArr[0]) : 0;
  const wind = Math.round(currentWeather?.variables?.(1)?.value?.() ?? 0);
  const precipitationArray = weather.hourly?.()?.variables(1)?.valuesArray?.();
  const precipitation =
    precipitationArray?.[0] != null ? Math.round(precipitationArray[0]) : 0;

  const metricValues = [weatherFeelsLike, humidity, wind, precipitation];

  return (
    <Flex className="flex-wrap justify-center gap-4 py-6">
      {weatherMetrics?.map((metric, index) => (
        <div
          key={metric.metricType ?? index}
          className="bg-gray-700 w-[182px] pl-5 py-[0.5rem] rounded-lg"
        >
          <h6 className="text-gray-300 text-lg">{metric.metricType}</h6>
          <p className="text-white text-2xl font-semibold pt-2">
            {metricValues[index] ?? "--"}°
          </p>
        </div>
      ))}
    </Flex>
  );
};