import Banner from "@/components/Banner";
import Featured from "@/components/Featured";
import HouseShapePlant from "@/components/HouseShapePlant";
import NewCollection from "@/components/NewCollection";
import PopularProducts from "@/components/PopularProducts";
import SpecialsTreeCollection from "@/components/SpecialsTreeCollection";
import Reviews from "@/components/Reviews";
import Brand from "@/components/Brand";
import IndoorePlant from "@/components/IndoorePlant";
import Landscaping from "@/components/Landscaping";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Featured />
      <NewCollection />
      <PopularProducts />
      <HouseShapePlant />
      <SpecialsTreeCollection />
      <IndoorePlant />
      <Landscaping />
      <Brand />
      <Reviews />
    </div>
  );
};

export default HomePage;
