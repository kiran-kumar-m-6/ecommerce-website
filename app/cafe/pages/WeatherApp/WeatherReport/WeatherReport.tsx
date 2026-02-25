"use client";

type Props = {
  location?: {
    city: string;
    country: string;
  };
  weather?: any;
  loading: boolean;
};

export const WeatherReport = ({ weather, loading }: Props) => {
  if (loading || !weather) {
    return (
      <div className="flex flex-wrap justify-center gap-4 pt-6">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-700 w-[182px] h-[92px] rounded-lg animate-pulse"
          ></div>
        ))}
      </div>
    );
  }

  const current = weather.current?.();
  const feelsLike = Math.round(current?.apparentTemperature?.() ?? 0);
  const humidityArr = weather.hourly?.()?.variables(0)?.valuesArray?.();
  const humidity = humidityArr?.[0] != null ? Math.round(humidityArr[0]) : 0;
  const wind = Math.round(current?.variables?.(1)?.value?.() ?? 0);
  const precipitationArray = weather.hourly?.()?.variables(1)?.valuesArray?.();
  const precipitation =
    precipitationArray?.[0] != null ? Math.round(precipitationArray[0]) : 0;

  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">
      <div className="bg-gray-700 w-[182px] pl-5 py-[0.5rem] rounded-lg">
        <h6 className="text-gray-300 text-lg">Feels Like</h6>
        <p className="text-white text-2xl font-semibold pt-2">{feelsLike}°</p>
      </div>

      <div className="bg-gray-700 w-[182px] pl-5 py-[0.5rem] rounded-lg">
        <h6 className="text-gray-300 text-lg">Humidity</h6>
        <p className="text-white text-2xl font-semibold pt-2">{humidity}%</p>
      </div>

      <div className="bg-gray-700 w-[182px] pl-5 py-[0.5rem] rounded-lg">
        <h6 className="text-gray-300 text-lg">Wind</h6>
        <p className="text-white text-2xl font-semibold pt-2">{wind} km/h</p>
      </div>

      <div className="bg-gray-700 w-[182px] pl-5 py-[0.5rem] rounded-lg">
        <h6 className="text-gray-300 text-lg">Precipitation</h6>
        <p className="text-white text-2xl font-semibold pt-2">
          {precipitation} mm
        </p>
      </div>
    </div>
  );
};
