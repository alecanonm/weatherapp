export const formatHour = (time: string) => {
  return new Date(time).toLocaleTimeString("en-US", {
    hour: "numeric",
    hour12: true,
  });
};
