const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getOrdinalSuffix = (d: number): string => {
  if (d >= 11 && d <= 13) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
};

export const useDate = (input?: string): string => {
  if (!input || typeof input !== "string") return "";

  const match = input.match(/^(\d{1,2})[-/.](\d{1,2})[-/.](\d{4})$/);

  if (!match) return "";
  const [, dayStr, monthStr, yearStr] = match;

  const day = Number(dayStr);
  const month = Number(monthStr);
  const year = Number(yearStr);

  if (month < 1 || month > 12) return "";
  if (day < 1 || day > 31) return "";

  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return "";
  }

  return `${day}${getOrdinalSuffix(day)} ${months[month - 1]} ${yearStr.slice(-2)}`;
};
