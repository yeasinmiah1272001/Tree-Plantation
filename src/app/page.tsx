import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import HouseShapePlant from "@/components/HouseShapePlant";
import NewCollection from "@/components/NewCollection";
import PopularProducts from "@/components/PopularProducts";
import SpecialsTreeCollection from "@/components/SpecialsTreeCollection";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Featured />
      <NewCollection />
      <PopularProducts />
      <HouseShapePlant />
      <SpecialsTreeCollection />
    </div>
  );
};

export default HomePage;
