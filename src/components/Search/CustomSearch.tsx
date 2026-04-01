import { useSearchParams } from "react-router";
import searchIcon from "../../assets/images/icon-search.svg";
import { useEffect, useState } from "react";
import { getGeoLocation } from "../../actions/get-geolocation.action";
import type { Result } from "../../interfaces/geolocation.interface";

const CustomSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [suggestions, setSuggestions] = useState<Result[]>([]);

  const query = searchParams.get("q") || "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ q: e.target.value });
  };

  const handleSubmit = () => {
    setSearchParams({ q: query });
    setSuggestions([]);
  };

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if (!query) {
        setSuggestions([]);
        return;
      }

      try {
        const { results } = await getGeoLocation(query);
        setSuggestions(results || []);
      } catch (error) {
        console.log(error);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [query]);

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
          value={query}
          onChange={handleChange}
          placeholder="Search for a place..."
          className="w-full pl-10 pr-4 py-3 bg-neutral-800 px-6 rounded-xl focus:ring-0 focus:ring-neutral-800 focus:outline-none"
        />
        {suggestions.length > 0 && (
          <ul className="absolute top-14 w-full flex flex-col gap-1 bg-neutral-800 border  border-neutral-600 rounded-lg p-2">
            {suggestions.slice(0, 4).map((city) => (
              <li
                key={city.id}
                onClick={() => {
                  setSearchParams({
                    q: city.name,
                  });
                  setSuggestions([]);
                }}
                className="px-2 py-2.5 hover:bg-neutral-700  rounded-lg cursor-pointer">
                {city.name} - {city.country}
              </li>
            ))}
          </ul>
        )}
      </div>
      <button
        onClick={handleSubmit}
        className="rounded-xl cursor-pointer bg-blue-500 px-6 py-3 text-[20px]/[1.2] font-medium">
        Search
      </button>
    </div>
  );
};

export default CustomSearch;
