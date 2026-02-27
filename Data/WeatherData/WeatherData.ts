export const TempratureData = [
  {
    label: "celsius (C)",
    isOpen: true,
  },
  {
    label: "Fahrenheit (F)",
    isOpen: false,
  },
];

export const WindSpeedData = [
  {
    label: "km/h",
    isOpen: true,
  },
  {
    label: "mph",
    isOpen: false,
  },
];

export const PrecipitationData = [
  {
    label: "millimeters (mm)",
    isOpen: true,
  },
  {
    label: "inches (in)",
    isOpen: false,
  },
];

export const NavBarData = [
  {
    icon: "/logo.svg",
    temprature: TempratureData,
    windSpeed: WindSpeedData,
    precipitation: PrecipitationData,
  },
];

export const TodayWeatherData = [
  {
    bgImage: "/bg-today-large.svg",
    city: "Berlin",
    country: "Germany",
    day: "Tuesday",
    date: "Aug 5, 2025",
    temprature: 20,
  },
];

export const WeatherReportData = {
  feelsLike: 18,
  humidity: 46,
  wind: 14,
  precipitation: 0,
};

export const DailyForeCastData = [
  {
    day: "tue",
    weatherLogo: "/icon-rain.webp",
    weatherType: "rainy",
    minimumTemprature: 20,
    maximumTemprature: 14,
  },
  {
    day: "wed",
    weatherLogo: "/icon-drizzle.webp",
    weatherType: "rainy",
    minimumTemprature: 20,
    maximumTemprature: 14,
  },
  {
    day: "thu",
    weatherLogo: "/icon-rain.webp",
    weatherType: "rainy",
    minimumTemprature: 20,
    maximumTemprature: 14,
  },
  {
    day: "fri",
    weatherLogo: "/icon-rain.webp",
    weatherType: "rainy",
    minimumTemprature: 20,
    maximumTemprature: 14,
  },
  {
    day: "sat",
    weatherLogo: "/icon-rain.webp",
    weatherType: "rainy",
    minimumTemprature: 20,
    maximumTemprature: 14,
  },
  {
    day: "sun",
    weatherLogo: "/icon-rain.webp",
    weatherType: "rainy",
    minimumTemprature: 20,
    maximumTemprature: 14,
  },
  {
    day: "mon",
    weatherLogo: "/icon-rain.webp",
    weatherType: "rainy",
    minimumTemprature: 20,
    maximumTemprature: 14,
  },
];

export const HourlyForeCastData = [
  {
    weatherLogo: "/icon-overcast.webp",
    weatherType: "overcast",
    time: 3,
    temprature: 17,
  },
  {
    weatherLogo: "/icon-overcast.webp",
    weatherType: "overcast",
    time: 4,
    temprature: 17,
  },
  {
    weatherLogo: "/icon-overcast.webp",
    weatherType: "overcast",
    time: 5,
    temprature: 17,
  },
  {
    weatherLogo: "/icon-overcast.webp",
    weatherType: "overcast",
    time: 6,
    temprature: 17,
  },
  {
    weatherLogo: "/icon-overcast.webp",
    weatherType: "overcast",
    time: 7,
    temprature: 17,
  },
  {
    weatherLogo: "/icon-overcast.webp",
    weatherType: "overcast",
    time: 8,
    temprature: 17,
  },
  {
    weatherLogo: "/icon-overcast.webp",
    weatherType: "overcast",
    time: 9,
    temprature: 17,
  },
  {
    weatherLogo: "/icon-overcast.webp",
    weatherType: "overcast",
    time: 10,
    temprature: 17,
  },
];


export const WeatherMetricsData = [
  {
    metricType: "Feels Like",
  },
  {
    metricType: "Humidity",
  },
  {
    metricType: "Wind",
  },
  {
    metricType: "Precipitation",
  },
];