import { Icon } from "@/components/atom";

type Props = {
  location?: {
    city: string;
    country: string;
  };
  weather?: any;
  loading: boolean;
};

const mapCodeToIcon = (code: number): string => {
  const rules = [
    { condition: code === 0, icon: "/icon-sunny.webp" },
    { condition: code <= 3,  icon: "/icon-partly-cloudy.webp" },
    { condition: code <= 67, icon: "/icon-rain.webp" },
  ];

  return rules.find(rule => rule.condition)?.icon ?? "/icon-overcast.webp";
};

export const DailyForeCast = ({ weather, loading }: Props) => {
  if (loading || !weather) {
    return (
      <div className="w-full">
        <div className="flex justify-center">
          <div>
            <h1 className="text-white font-bold pb-2 text-left">
              Daily Forecast
            </h1>
            <div className="flex gap-3 flex-wrap justify-center">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="bg-gray-700 py-16 px-3 rounded-lg min-w-[100px] animate-pulse"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const daily = weather.daily?.();
  const start = Number(daily.time());
  const interval = daily.interval();
  const count = (Number(daily.timeEnd()) - start) / interval;

  const times = Array.from(
    { length: count },
    (_, i) => new Date((start + i * interval) * 1000),
  );

  const maxTemps = daily.variables(0)!.valuesArray();
  const minTemps = daily.variables(1)!.valuesArray();
  const codes = daily.variables(2)?.valuesArray?.() || [];

  return (
    <div className="w-full">
      <div className="flex justify-center">
        <div>
          <h1 className="text-white font-bold pb-2 text-left">
            Daily Forecast
          </h1>

          <div className="flex flex-wrap gap-3 justify-center items-center">
            {(times ?? []).map((date, index) => (
              <div
                key={index}
                className="bg-gray-700 py-2 px-3 rounded-lg min-w-[100px]"
              >
                <p className="capitalize text-white text-center">
                  {date instanceof Date && !isNaN(date.getTime())
                    ? date.toLocaleDateString("en-US", {
                        weekday: "short",
                        timeZone: "UTC",
                      })
                    : "--"}
                </p>

                <div className="flex justify-center py-1">
                  <Icon
                    src={mapCodeToIcon(codes[index])}
                    alt="weather"
                    height={70}
                    width={70}
                    className="object-scale-down"
                  />
                </div>
                <div className="flex justify-between">
                  <p className="text-white text-sm">
                    {Math.round(maxTemps[index])}°
                  </p>
                  <p className="text-white text-sm">
                    {Math.round(minTemps[index])}°
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
