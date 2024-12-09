"use client";
import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsCartPlus, BsTruck } from "react-icons/bs";
import { BiRefresh } from "react-icons/bi";
import { TreeBlogItem } from "../../type";
import Image from "next/image";

const SinglePageContent = ({ singleData }: { singleData: TreeBlogItem }) => {
  const [mainImage, setMainImage] = useState(singleData?.images[0]?.url);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col lg:flex-row">
        {/* Left Section: Image Gallery */}
        <div className="w-full  lg:w-1/3 flex flex-col  space-y-4">
          <Image
            src={mainImage}
            alt="Gamepad"
            height={400}
            width={400}
            className="w-full h-auto rounded-lg border"
          />
          <div className="grid grid-cols-4 gap-2">
            {singleData?.images?.map((image, index) => (
              <Image
                key={index}
                src={image.url}
                alt={`Thumbnail ${index + 1}`}
                height={400}
                width={400}
                className={`w-full h-auto rounded-lg border cursor-pointer hover:scale-105 transition ${
                  mainImage === image.url ? "border-pink-500" : ""
                }`}
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="w-full lg:w-2/3 lg:pl-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {singleData?.title || "Havic HV G-92 Gamepad"}
          </h1>

          <div className="flex items-center space-x-2 mb-4">
            {Array.from({ length: 5 }).map((_, i) =>
              i < 4 ? (
                <AiFillStar key={i} className="text-yellow-500" />
              ) : (
                <AiOutlineStar key={i} className="text-yellow-500" />
              )
            )}
            <span className="text-gray-600">(150 Reviews)</span>
          </div>

          <p className="text-xl font-semibold text-gray-800 mb-4">
            $ {singleData.price}
          </p>
          <p className="text-xl font-semibold text-gray-800  mb-4">
            {singleData.stock ? (
              <span className="text-green-600">
                In Stock {singleData.stock}
              </span>
            ) : (
              <span className="text-red-600">Out of Stock</span>
            )}
          </p>
          <p className="text-xl  mb-4">
            <span className="text-green-600">
              {" "}
              Special offer: {singleData.offer}
            </span>
          </p>

          <p className="text-gray-600 mb-6">{singleData.description}</p>

          {/* color and size */}
          {/* <div>
            <div className="mb-4">
              <span className="block font-medium text-gray-800 mb-2">
                Colors:
              </span>
              <div className="flex space-x-4">
                <button className="w-6 h-6 rounded-full bg-black border border-gray-300"></button>
                <button className="w-6 h-6 rounded-full bg-pink-500 border border-gray-300"></button>
              </div>
            </div>

            <div className="mb-6">
              <span className="block font-medium text-gray-800 mb-2">
                Size:
              </span>
              <div className="flex space-x-2">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          </div> */}

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded-lg">
              <button className="px-4 py-2 hover:bg-gray-100">-</button>
              <input
                type="text"
                value="2"
                readOnly
                className="w-12 text-center border-l border-r border-gray-300 focus:outline-none"
              />
              <button className="px-4 py-2 hover:bg-gray-100">+</button>
            </div>
            <button className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 flex items-center space-x-2">
              <BsCartPlus />
              <span>Buy Now</span>
            </button>
          </div>

          {/* Delivery & Return */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <BsTruck className="text-gray-500" />
              <span className="text-gray-600">Free Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <BiRefresh className="text-gray-500" />
              <span className="text-gray-600">
                Free 30 Days Return Delivery
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePageContent;
