export type NavBarType = {
  temprature?: ValueProps[];
  windSpeed?: ValueProps[];
  precipitation?: ValueProps[];
};

type ValueProps = {
  label?: string;
  isOpen?: boolean;
};
