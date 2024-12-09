import React from "react";
import Container from "./Container";

import Image from "next/image";
import img1 from "../assets/103.png";

const Banner = () => {
  return (
    <div className="bg-[#DCFFAB] py-24">
      <Container className="">
        <Image className="lg:p-20" src={img1} alt="image" />
      </Container>
    </div>
  );
};

export default Banner;
