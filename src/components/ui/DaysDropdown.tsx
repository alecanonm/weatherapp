const DaysDropdown = () => {
  return (
    <ul className="bg-neutral-800 min-w-53.5 rounded-xl p-2 border-neutral-600 border flex flex-col gap-1">
      <li className="hover:bg-neutral-700 bg-neutral-700 rounded-lg px-2 py-2 cursor-pointer">
        Monday
      </li>
      <li className="hover:bg-neutral-700 rounded-lg px-2 py-2 cursor-pointer">
        Tuesday
      </li>
      <li className="hover:bg-neutral-700 rounded-lg px-2 py-2 cursor-pointer">
        Wednesday
      </li>
      <li className="hover:bg-neutral-700 rounded-lg px-2 py-2 cursor-pointer">
        Thursday
      </li>
      <li className="hover:bg-neutral-700 rounded-lg px-2 py-2 cursor-pointer">
        Friday
      </li>
      <li className="hover:bg-neutral-700 rounded-lg px-2 py-2 cursor-pointer">
        Saturday
      </li>
      <li className="hover:bg-neutral-700 rounded-lg px-2 py-2 cursor-pointer">
        Sunday
      </li>
    </ul>
  );
};

export default DaysDropdown;
