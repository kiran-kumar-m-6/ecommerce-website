export type WeatherReportType = {
  feelsLike?: number;
  humidity?: number;
  wind?: number;
  precipitation?: number;
};

export type TodayWeatherType = {
  bgImage?: string;
  city?: string;
  country?: string;
  day?: string;
  date?: string;
  temprature?: number;
};

export type NavBarType = {
  temprature?: ValueProps[];
  windSpeed?: ValueProps[];
  precipitation?: ValueProps[];
};

type ValueProps = {
  label?: string;
  isOpen?: boolean;
};

export type HourlyForeCastType = {
  weatherLogo?: string;
  weatherType?: string;
  time?: number;
  temprature?: number;
};

export type DailyForeCastType = {
  day?: string;
  weatherLogo?: string;
  weatherType?: string;
  minimumTemprature?: number;
  maximumTemprature?: number;
};

export type WeatherMetricsType = {
  metricType: string;
}