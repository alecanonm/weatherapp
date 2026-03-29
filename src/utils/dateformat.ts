import { capitalize } from "../helper/capitalizer";

export const formatDate = (date?: string | Date): string => {
  if (!date) return "";

  let parsedDate: Date;

  if (typeof date === "string") {
    const parts = date.split("-");
    if (parts.length !== 3) return "";

    const [year, month, day] = parts.map(Number);
    parsedDate = new Date(year, month - 1, day);
  } else {
    parsedDate = date;
  }

  if (isNaN(parsedDate.getTime())) return "";

  const formatted = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric",
  })
    .format(parsedDate)
    .toLowerCase()
    .replace(",", ",");

  return capitalize(formatted);
};

export const getDayOfWeek = (dateInput: string | Date): string => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const date =
    typeof dateInput === "string" ? new Date(dateInput + "T00:00") : dateInput;

  return daysOfWeek[date.getDay()];
};
