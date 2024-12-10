import Container from "@/components/Container";
import React from "react";
import {
  FaTree,
  FaPen,
  FaBook,
  FaLeaf,
  FaGlobe,
  FaMountain,
} from "react-icons/fa"; // Additional icons for variety

const Gallery: React.FC = () => {
  const galleryItems = [
    {
      id: 1,
      icon: <FaTree className="text-green-500 text-4xl" />,
      title: "Tree Planting Blog",
      description:
        "Learn about the importance of tree planting and its impact on the environment.",
    },
    {
      id: 2,
      icon: <FaPen className="text-blue-500 text-4xl" />,
      title: "Writing Nature Stories",
      description:
        "Discover how to write stories that capture the beauty of nature.",
    },
    {
      id: 3,
      icon: <FaBook className="text-brown-500 text-4xl" />,
      title: "Nature Reading List",
      description:
        "Check out a list of must-read books on nature and environmental conservation.",
    },
    {
      id: 4,
      icon: <FaTree className="text-green-500 text-4xl" />,
      title: "Sustainable Forests",
      description:
        "Read about the importance of sustainable forest management.",
    },
    {
      id: 5,
      icon: <FaLeaf className="text-green-600 text-4xl" />,
      title: "Leaf Identification Guide",
      description:
        "Learn how to identify different types of leaves in your local environment.",
    },
    {
      id: 6,
      icon: <FaGlobe className="text-blue-600 text-4xl" />,
      title: "Global Conservation Efforts",
      description:
        "Explore the worldwide efforts being made to preserve our natural habitats.",
    },
    {
      id: 7,
      icon: <FaMountain className="text-gray-600 text-4xl" />,
      title: "Mountain Exploration",
      description:
        "A blog about hiking and exploring the world's most beautiful mountains.",
    },
    {
      id: 8,
      icon: <FaTree className="text-green-500 text-4xl" />,
      title: "Urban Greening Projects",
      description:
        "Discover how cities are incorporating more greenery into urban spaces.",
    },
    {
      id: 9,
      icon: <FaPen className="text-blue-500 text-4xl" />,
      title: "The Art of Nature Writing",
      description:
        "Tips and techniques for writing compelling nature-inspired stories.",
    },
    {
      id: 10,
      icon: <FaBook className="text-brown-500 text-4xl" />,
      title: "Eco-Friendly Living",
      description:
        "A guide to living sustainably and reducing your carbon footprint.",
    },
    {
      id: 11,
      icon: <FaLeaf className="text-green-600 text-4xl" />,
      title: "Plant-Based Diets for the Planet",
      description:
        "Learn how a plant-based diet can help combat climate change.",
    },
    {
      id: 12,
      icon: <FaGlobe className="text-blue-600 text-4xl" />,
      title: "Protecting Marine Life",
      description:
        "An exploration of the ways to protect our oceans and marine biodiversity.",
    },
    // Add more items as needed
  ];

  return (
    <Container className="py-28">
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold text-center my-8">
          Tree & Nature Blog Gallery
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-lg shadow-lg p-6 bg-white transition-transform transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-center font-bold text-lg mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-700 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
