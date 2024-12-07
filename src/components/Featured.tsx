import React from "react";
import Container from "./Container";
import img1 from "../assets/33.webp";
import img2 from "../assets/34.webp";
import img3 from "../assets/35.webp";
import Image from "next/image";

const Featured = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-3 gap-5 py-10">
      <div className="relative overflow-hidden group transition">
        <Image
          className=" group-hover:scale-110 transition-transform duration-300 "
          src={img1}
          alt="image"
        />
        <div className="absolute top-1/4 ml-4 space-y-2">
          <h2 className="text-xl font-semibold">Fresh Flower</h2>
          <h1 className="text-2xl font-bold">Hanging plant</h1>
          <button className="underline">Shop Now</button>
        </div>
      </div>
      <div className="relative overflow-hidden group transition">
        <Image
          className=" group-hover:scale-110 transition-transform duration-300 "
          src={img2}
          alt="image"
        />
        <div className="absolute top-1/4 ml-4 space-y-2">
          <h2 className="text-xl font-semibold">SALE OFF</h2>
          <h1 className="text-2xl font-bold">Modern Plant</h1>
          <button className="underline">Shop Now</button>
        </div>
      </div>
      <div className="relative overflow-hidden group transition">
        <Image
          className=" group-hover:scale-110 transition-transform duration-300 "
          src={img3}
          alt="image"
        />
        <div className="absolute top-1/4 ml-4 space-y-2">
          <h2 className="text-xl font-semibold">JUST FOR YOU</h2>
          <h1 className="text-2xl font-bold">Indoor Plants</h1>
          <button className="underline">Shop Now</button>
        </div>
      </div>
    </Container>
  );
};

export default Featured;
