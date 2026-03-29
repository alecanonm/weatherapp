interface Props {
  onSelectDay: (day: string) => void;
}

const DaysDropdown = ({ onSelectDay }: Props) => {
  const getNext7Days = () => {
    const daysOfWeek = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    const today = new Date();

    return Array.from({ length: 7 }).map((_, i) => {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const dayName = daysOfWeek[date.getDay()]; // obtiene "Monday", "Tuesday", etc.
      const formattedDate = date.toISOString().split("T")[0]; // "YYYY-MM-DD"
      return { dayName, date: formattedDate };
    });
  };

  return (
    <ul className="bg-neutral-800 min-w-53.5 rounded-xl p-2 border-neutral-600 border flex flex-col gap-1">
      {getNext7Days().map((day) => (
        <li
          key={day.dayName}
          onClick={() => onSelectDay(day.date)}
          className="hover:bg-neutral-700 rounded-lg px-2 py-2 cursor-pointer">
          {day.dayName}
        </li>
      ))}
    </ul>
  );
};

export default DaysDropdown;
