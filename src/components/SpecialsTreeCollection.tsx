"use client";

import React, { useState } from "react";
import Container from "./Container";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { treeBlog } from "@/constant";
import { FaEye, FaHeart } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import heading from "../assets/hedimg.png";

const SpecialsTreeCollection = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <Container className="">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
          Special Tree Collection
        </h1>
        <div className="mt-4">
          <Image
            src={heading}
            alt="Popular Tree Collection Image"
            className="mx-auto object-cover"
          />
        </div>
      </div>
      <Swiper
        slidesPerView={2}
        spaceBetween={15}
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
        {treeBlog.map((item, index) => (
          <SwiperSlide
            key={item.id}
            className="group relative border border-gray-300 rounded-lg bg-white shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out overflow-hidden"
            onMouseEnter={() => setHoveredProduct(index)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            {/* Product Image */}
            <div className="relative w-full h-64">
              <Image
                src={
                  hoveredProduct === index
                    ? item.images[1]?.url || item.images[1].url
                    : item.images[2].url
                }
                alt={`Product ${item.title}`}
                height={300}
                width={300}
                className={`w-full h-full object-cover transition-transform duration-1000 ${
                  hoveredProduct === index
                    ? "scale-105 duration-1000"
                    : "scale-100 duration-1000"
                }`}
              />
            </div>

            {/* Overlay Icons */}
            <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex gap-3">
                <span className="text-xl bg-green-300 p-2 rounded-md text-black">
                  <FaCartShopping />
                </span>
                <span className="text-xl bg-green-300 p-2 rounded-md text-black">
                  <FaEye />
                </span>
                <span className="text-xl bg-green-300 p-2 rounded-md text-black">
                  <MdEdit />
                </span>
              </div>
            </div>

            {/* Heart Icon & Offer Tag */}
            <span className="absolute  top-3 left-3">
              <FaHeart size={30} className="text-green-400" />
            </span>
            <span className="absolute top-3 right-3 bg-green-200 border border-gray-400 text-black p-1 px-2 rounded-md">
              {item.offer}
            </span>

            {/* Product Details */}
            <div className="p-5 space-y-2">
              {/* Rating as Progress */}
              <div>
                <p className="text-sm font-medium text-gray-600 mb-1">
                  Rating:
                </p>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 animate-pulse rounded-full"
                    style={{ width: `${item.rating * 20}%` }} // Assuming rating is out of 5
                  ></div>
                </div>
              </div>
              {/* Price */}
              <p className="text-lg font-semibold text-gray-800">
                ${item.price}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default SpecialsTreeCollection;
