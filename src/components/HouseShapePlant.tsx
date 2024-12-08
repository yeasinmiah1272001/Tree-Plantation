import Container from "./Container";
import img1 from "../assets/1.jpg";
import Image from "next/image";
import img2 from "../assets/490x230-1.jpg";
import img3 from "../assets/490x230-2.jpg";
import img4 from "../assets/bnr2-4.jpg";

const HouseShapePlant = () => {
  return (
    <Container className="">
      <div className="grid gap-4 lg:grid-cols-9 lg:grid-rows-6 sm:grid-cols-2 sm:grid-rows-auto grid-rows-auto">
        {/* Large Image */}
        <div className="lg:col-span-3 lg:row-span-6 sm:col-span-2 relative group overflow-hidden">
          <Image
            className="group-hover:scale-110 duration-300 transition-transform"
            src={img1}
            alt="image"
          />
          <div className="absolute top-6 left-4">
            <h3 className="text-gray-600 text-xl font-medium">
              Only On Our Store!
            </h3>
            <h1 className="text-black text-2xl font-bold">House Shape Plant</h1>
            <button className="mt-4 px-4 py-2 border border-gray-400 bg-transparent hover:bg-green-500 text-black text-sm font-semibold rounded-md shadow-md transition duration-300">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Smaller Images */}
        <div className="lg:col-span-3 lg:row-span-3 sm:col-span-1 relative group overflow-hidden">
          <Image
            className="group-hover:scale-110 duration-300 transition-transform"
            src={img2}
            alt="image"
          />
          <div className="absolute top-6 left-4">
            <h3 className="text-gray-600 text-xl font-medium">Upto 40% off</h3>
            <h1 className="text-black text-2xl font-bold">Office Plant</h1>
            <button className="mt-4 px-4 py-2 border border-gray-400 bg-transparent hover:bg-green-500 text-black text-sm font-semibold rounded-md shadow-md transition duration-300">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="lg:col-span-3 lg:row-span-3 sm:col-span-1 relative group overflow-hidden">
          <Image
            className="group-hover:scale-110 duration-300 transition-transform"
            src={img3}
            alt="image"
          />
          <div className="absolute top-6 left-4">
            <h3 className="text-gray-600 text-xl font-medium">Fresh Flower</h3>
            <h1 className="text-black text-2xl font-bold">Hanging Planter</h1>
            <button className="mt-4 px-4 py-2 border border-gray-400 bg-transparent hover:bg-green-500 text-black text-sm font-semibold rounded-md shadow-md transition duration-300">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Wide Image */}
        <div className="lg:col-span-6 lg:row-span-3 sm:col-span-2 relative group overflow-hidden">
          <Image
            className="group-hover:scale-110 duration-300 transition-transform"
            src={img4}
            alt="image"
          />
          <div className="absolute top-6 right-10 text-right">
            <h3 className="text-gray-600 text-xl font-medium">
              Collection Of Cactus
            </h3>
            <h1 className="text-black text-2xl font-bold">
              Ceramic Pot & Plant
            </h1>
            <button className="mt-4 px-4 py-2 border border-gray-400 bg-transparent hover:bg-green-500 text-black text-sm font-semibold rounded-md shadow-md transition duration-300">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HouseShapePlant;
