"use client";
import { useState } from "react";

type Props = {
  onSearch: (city: string) => void;
};

export const SearchBar = ({ onSearch }: Props) => {
  const [value, setValue] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    setValue("");
    onSearch(value.trim());
  };

  return (
    <div className="px-5">
      <h1 className="text-5xl text-white text-center">
        How's the sky looking today?
      </h1>

      <form onSubmit={onSubmit}>
        <div className="flex justify-center flex-wrap gap-5 pt-16 pb-6">
          <input
            type="text"
            className="py-2 pl-3 w-full max-w-[450px] rounded-lg bg-gray-600 text-white border-0 outline-none"
            placeholder="Search for a place..."
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-800 text-white py-2 px-6 rounded-md"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};
