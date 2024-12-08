import Container from "./Container";
import img1 from "../assets/99.webp";
import Image from "next/image";
import img2 from "../assets/100.webp";
import img3 from "../assets/1001.webp";

const IndoorePlant = () => {
  return (
    <Container className="py-10">
      <div className="grid gap-4 lg:grid-cols-9 lg:grid-rows-6 sm:grid-cols-2 sm:grid-rows-auto grid-rows-auto">
        {/* Large Image */}
        <div className="lg:col-span-3 lg:row-span-6 sm:col-span-2 relative group overflow-hidden">
          <Image
            className="group-hover:scale-110 duration-300 transition-transform"
            src={img1}
            alt="image"
          />
          <div className="absolute left-28  top-8 mx-auto items-center justify-center text-center">
            <h3 className="text-gray-600 text-xl font-medium">
              New Collection
            </h3>
            <h1 className="text-black text-2xl font-bold">Indoore Plant</h1>
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
            <button className="mt-4 px-2 rounded-full py-2 p-1  bg-[#ABD373] hover:bg-green-500 text-white text-xs font-semibold   shadow-md transition duration-300">
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
            <h3 className="text-gray-600 text-xl font-medium">Fresh Flowers</h3>
            <h1 className="text-black text-2xl font-bold">Hanging Planter</h1>
            <button className="mt-4 px-2 rounded-full py-2 p-1  bg-[#ABD373] hover:bg-green-500 text-white text-xs font-semibold   shadow-md transition duration-300">
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
            <h3 className="text-gray-600 text-xl font-medium">Fresh Flowers</h3>
            <h1 className="text-black text-2xl font-bold">Hanging Planter</h1>
            <button className="mt-4 px-2 rounded-full py-2 p-1  bg-[#ABD373] hover:bg-green-500 text-white text-xs font-semibold   shadow-md transition duration-300">
              SHOP NOW
            </button>
          </div>
        </div>

        <div className="lg:col-span-3 lg:row-span-3 sm:col-span-1 relative group overflow-hidden">
          <Image
            className="group-hover:scale-110 duration-300 transition-transform"
            src={img2}
            alt="image"
          />
          <div className="absolute top-6 left-4">
            <h3 className="text-gray-600 text-xl font-medium">
              Collection Of Cactus
            </h3>
            <h1 className="text-black text-2xl font-bold">Plant Port</h1>
            <button className="mt-4 px-2 rounded-full py-2 p-1  bg-[#ABD373] hover:bg-green-500 text-white text-xs font-semibold   shadow-md transition duration-300">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Wide Image */}
      </div>
    </Container>
  );
};

export default IndoorePlant;
