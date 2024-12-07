import Container from "./Container";
import img1 from "../assets/36.webp";
import Image from "next/image";

const NewCollection = () => {
  return (
    <Container className="md:flex gap-10 py-10 items-center w-full justify-between">
      <div className="w-full md:w-1/2">
        <Image
          src={img1}
          alt="House Shape Plant"
          className="rounded-lg  object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 space-y-5 md:space-y-8">
        <h3 className="text-gray-500 text-2xl font-semibold">
          New Collection 2024
        </h3>
        <h1 className="text-4xl font-extrabold text-black">
          House Shape Plant
        </h1>
        <p className="text-xl font-medium text-gray-700">
          The growth of a plant involves several stages. First, a plot of land
          is selected. The land is then dug well with the help of a spade. The
          soil is ground into dust, and both biological and chemical manure are
          added. Seeds are collected from the market and sown on the bed.
        </p>
        <button className="mt-4 px-6 py-3 border border-gray-400 bg-transparent hover:bg-green-500 text-black text-lg font-semibold rounded-md shadow-md  transition duration-300">
          SHOP NOW
        </button>
      </div>
    </Container>
  );
};

export default NewCollection;
