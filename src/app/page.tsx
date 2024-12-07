import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import NewCollection from "@/components/NewCollection";
import PopularProducts from "@/components/PopularProducts";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Featured />
      <NewCollection />
      <PopularProducts />
    </div>
  );
};

export default HomePage;
