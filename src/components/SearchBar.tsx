"use client";
import { treeBlog } from "@/constant";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TreeBlogItem } from "../../type";
import Image from "next/image";
import Link from "next/link";

const SearchBar = () => {
  const [search, setSearch] = useState<string>("");
  const [filterData, setFilterData] = useState<TreeBlogItem[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSearching(true);
      const filtered = treeBlog.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilterData(filtered);
      setIsSearching(false);
    }, 300); // Debounce to 300ms

    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <div className="hidden relative sm:flex w-full max-w-[400px] mx-auto">
      <input
        className="bg-gray-100 w-full p-3 rounded-lg outline-none border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition duration-200"
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
        aria-label="Search"
      />
      <span className="absolute top-3 right-4 text-gray-500">
        {search ? (
          <IoClose
            onClick={() => setSearch("")}
            className="cursor-pointer hover:text-red-500 transition duration-200"
            aria-label="Clear search"
          />
        ) : (
          <FaSearch />
        )}
      </span>

      {/* content */}
      {search && (
        <div className="absolute z-10 w-full bg-white shadow-lg rounded-md mt-14 max-h-60 overflow-auto transition-all duration-300">
          {isSearching ? (
            <div className="p-2 text-gray-500">Searching...</div>
          ) : filterData.length > 0 ? (
            filterData.map((item) => (
              <Link
                key={item.id}
                onClick={() => setSearch("")}
                href={{ pathname: `/singlepage/${item.id}` }}
              >
                <div className="p-3 hover:bg-gray-100 cursor-pointer flex items-center space-x-4 transition duration-200">
                  <Image
                    className="w-16 h-16 rounded-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    src={item.images[0].url}
                    alt={item.title}
                    width={48}
                    height={48}
                  />
                  <h1 className="text-sm font-medium text-gray-800">
                    {item.title}
                  </h1>
                </div>
              </Link>
            ))
          ) : (
            <div className="p-2  text-gray-500">No results found</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
