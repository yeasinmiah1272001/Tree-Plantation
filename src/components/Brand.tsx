import React from "react";
import Marquee from "react-fast-marquee";
import img1 from "../assets/49.webp";
import img2 from "../assets/50.webp";
import img3 from "../assets/51.webp";
import img4 from "../assets/52.webp";
import img5 from "../assets/53.webp";
import img6 from "../assets/54.webp";
import Container from "./Container";
import Image from "next/image";

const Brand: React.FC = () => {
  const brands = [img1, img2, img3, img4, img5, img6];

  return (
    <Container className="">
      <div className="py-10 bg-gray-50">
        <Marquee gradient={false} speed={40} className="flex gap-8">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand}
              alt={`Brand ${index + 1}`}
              className="h-20 object-contain"
            />
          ))}
        </Marquee>
      </div>
    </Container>
  );
};

export default Brand;
