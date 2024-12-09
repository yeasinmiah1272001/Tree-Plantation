"use client";
import Container from "@/components/Container";
import { treeBlog } from "@/constant";
import Image from "next/image";
import { useState } from "react";
import heading from "../../assets/hedimg.png";

import FilterMiniCard from "@/components/FilterMiniCard";

const ShopPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isNewArrival, setIsNewArrival] = useState(false);
  const [isTrending, setIsTrending] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 200]); // Default price range
  const [minRating, setMinRating] = useState(0); // Default minimum rating

  const filterProducts = treeBlog.filter((item) => {
    const withinCategory =
      selectedCategory === "All" || item.category === selectedCategory;
    const withinPriceRange =
      item.price >= priceRange[0] && item.price <= priceRange[1];
    const meetsRating = item.rating >= minRating;
    const matchesNewArrival = !isNewArrival || item.isNewArrival;
    const matchesTrending = !isTrending || item.isTrending;

    return (
      withinCategory &&
      withinPriceRange &&
      meetsRating &&
      matchesNewArrival &&
      matchesTrending
    );
  });

  return (
    <Container className="py-12 lg:py-24">
      {/* Heading Section */}
      <div className="text-center mb-10 space-y-6">
        <h1 className="text-4xl font-extrabold text-gray-800 md:text-5xl">
          All Tree Collection
        </h1>
        <Image
          src={heading}
          alt="Popular Tree Collection"
          className="mx-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-semibold text-center mb-6">
            Filter Products
          </h2>
          <div className="space-y-4">
            {/* Category Filter */}
            <h1 className="text-xl font-medium">Category</h1>
            {["All", "Featured", "Bestselling", "Latest"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`w-full text-center py-2 rounded-lg transition-colors duration-300 ${
                  selectedCategory === category
                    ? "bg-green-500 text-white shadow-md"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}

            {/* New Arrival Filter */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isNewArrival}
                onChange={() => setIsNewArrival(!isNewArrival)}
                className="w-5 h-5"
              />
              <label className="text-gray-700 font-medium">New Arrivals</label>
            </div>

            {/* Trending Filter */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={isTrending}
                onChange={() => setIsTrending(!isTrending)}
                className="w-5 h-5"
              />
              <label className="text-gray-700 font-medium">Trending</label>
            </div>

            {/* Price Range Filter */}
            <div className="space-y-2">
              <h1 className="text-xl font-medium">Price Range</h1>
              <div className="flex items-center space-x-4">
                <input
                  type="number"
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([+e.target.value, priceRange[1]])
                  }
                  className="w-20 border border-gray-300 rounded-lg p-2"
                  min="0"
                />
                <span className="text-gray-700">to</span>
                <input
                  type="number"
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([priceRange[0], +e.target.value])
                  }
                  className="w-20 border border-gray-300 rounded-lg p-2"
                  min={priceRange[0]}
                />
              </div>
            </div>

            {/* Rating Filter */}
            <div className="space-y-2">
              <h1 className="text-xl font-medium">Minimum Rating</h1>
              <input
                type="number"
                value={minRating}
                onChange={(e) => setMinRating(+e.target.value)}
                className="w-full border border-gray-300 rounded-lg p-2"
                min="0"
                max="5"
                step="0.1"
              />
            </div>
          </div>
        </div>

        {/* Products Section */}
        <div className="col-span-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filterProducts.map((item, index) => (
              <FilterMiniCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ShopPage;
