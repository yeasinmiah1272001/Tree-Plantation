"use client";
import Container from "./Container";
import heading from "../assets/hedimg.png";
import Image from "next/image";
import { useState } from "react";
import { treeBlog } from "@/constant";
import { FaEye, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";

const PopularProducts = () => {
  const [selectedProducts, setSelectedProducts] = useState("All");
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filterProducts =
    selectedProducts === "All"
      ? treeBlog
      : treeBlog.filter((item) => item.category === selectedProducts);

  return (
    <Container className="py-10">
      {/* Title Section */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
          Popular Tree Collection
        </h1>
        <div className="mt-4">
          <Image
            src={heading}
            alt="Popular Tree Collection Image"
            className="mx-auto object-cover"
          />
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-8 flex justify-center gap-6">
        {["All", "Featured", "Bestselling", "Latest"].map((category) => (
          <button
            className={`px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-300 ease-in-out ${
              selectedProducts === category
                ? "bg-green-500 text-white shadow-lg"
                : "border border-gray-400 text-gray-600 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedProducts(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <Swiper
        slidesPerView={2}
        spaceBetween={15} // Reduced gap between slides
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        className="mt-10"
      >
        {filterProducts.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="group mx-auto relative overflow-hidden border border-gray-300 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out"
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            {/* Product Image */}
            <div className="relative w-full h-64">
              <Image
                src={
                  hoveredProduct === index
                    ? item.images[2].url
                    : item.images[0].url
                }
                alt="product image"
                height={300}
                width={300}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredProduct === index ? "scale-105" : "scale-100"
                }`}
              />
            </div>

            {/* Icons and offer */}
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-3">
                <span className="text-xl font-bold bg-green-300 p-2 rounded-md text-black">
                  <FaCartShopping />
                </span>

                <span className="text-xl font-bold bg-green-300 p-2 rounded-md text-black">
                  <FaEye />
                </span>
                <span className="text-xl font-bold bg-green-300 p-2 rounded-md text-black">
                  <MdEdit />
                </span>
              </div>

              {/* Heart icon and offer */}
              <span className="absolute top-3 left-3">
                <FaHeart size={30} className="text-green-400" />
              </span>
              <span className="absolute top-3 right-3 bg-green-200 border-gray-400 text-black p-1 px-2 rounded-md">
                {item.offer}
              </span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination Section */}
      <div className="swiper-pagination mt-6"></div>
    </Container>
  );
};

export default PopularProducts;
