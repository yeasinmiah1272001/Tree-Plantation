"use client";
import React, { useState, useRef, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import img1 from "../assets/31.webp";
import img2 from "../assets/32.webp";
import img3 from "../assets/31.webp";

const Banner: React.FC = () => {
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    slides: 3, // Number of slides
    loop: true, // Enable looping
  });

  // Auto-slide logic
  useEffect(() => {
    if (slider) {
      timerRef.current = setInterval(() => {
        slider.current?.next();
      }, 4000); // Auto-slide every 4 seconds
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [slider]);

  const slides = [
    {
      image: img1,
      title: "New Perfect Plant Collection",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration...",
      buttonText: "Explore Now",
    },
    {
      image: img2,
      title: "New Perfect Plant Collection",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration...",
      buttonText: "Explore Now",
    },
    {
      image: img3,
      title: "New Perfect Plant Collection",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration...",
      buttonText: "Explore Now",
    },
  ];

  return (
    <div className="keen-slider h-[500px] w-full relative" ref={sliderRef}>
      {slides.map((slide, index) => (
        <div key={index} className="keen-slider__slide relative">
          {/* Background Image with Zoom-Out Animation */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <Image
              src={slide.image}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 animate-zoom-out"
            />
          </div>

          {/* Content Overlay */}
          <div className="absolute right-10 top-1/2 max-w-2xl transform -translate-y-1/2 p-6">
            <h2 className="text-4xl font-bold text-gray-900">{slide.title}</h2>
            <p className="mt-2 text-gray-700">{slide.description}</p>
            <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
              {slide.buttonText}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
