import searchIcon from "../../assets/images/icon-search.svg";

const CustomSearch = () => {
  return (
    <div className="flex gap-4  justify-center">
      <div className="relative w-full max-w-md">
        <img
          src={searchIcon}
          alt="search icon"
          className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          name=""
          id=""
          placeholder="Search for a place..."
          className="w-full pl-10 pr-4 py-3 bg-neutral-800 px-6 rounded-xl focus:ring-0 focus:ring-neutral-800 focus:outline-none"
        />
        <ul className="absolute top-14 w-full flex flex-col gap-1 bg-neutral-800 border  border-neutral-600 rounded-lg p-2">
          <li className="px-2 py-2.5 hover:bg-neutral-700 bg-neutral-700 rounded-lg cursor-pointer">
            City Name
          </li>
          <li className="px-2 py-2.5 hover:bg-neutral-700 rounded-lg cursor-pointer">
            City Name
          </li>
          <li className="px-2 py-2.5 hover:bg-neutral-700 rounded-lg cursor-pointer">
            City Name
          </li>
          <li className="px-2 py-2.5 hover:bg-neutral-700 rounded-lg cursor-pointer">
            City Name
          </li>
        </ul>
      </div>
      <button className="rounded-xl cursor-pointer bg-blue-500 px-6 py-3 text-[20px]/[1.2] font-medium">
        Search
      </button>
    </div>
  );
};

export default CustomSearch;
