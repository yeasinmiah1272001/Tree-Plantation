import React from "react";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa";

const Reviews: React.FC = () => {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      feedback: "Absolutely amazing service! Everything was perfect.",
      rating: 5,
    },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "The quality of the products is outstanding. Highly recommend!",
      rating: 4,
    },
    {
      id: 4,
      name: "Emily Davis",
      feedback: "Very satisfied with my purchase. Great attention to detail.",
      rating: 5,
    },
    {
      id: 6,
      name: "Emily Davis",
      feedback: "Very satisfied with my purchase. Great attention to detail.",
      rating: 5,
    },
    {
      id: 5,
      name: "Chris Johnson",
      feedback:
        "Good service, but delivery took slightly longer than expected.",
      rating: 3,
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
        What Our Customers Say
      </h2>
      <Marquee direction="right" gradient={false} speed={50} className="px-4">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white shadow-lg rounded-lg p-6 mx-4 w-64 text-center hover:shadow-xl transition-shadow duration-300"
          >
            {/* User image placeholder */}
            <div className="w-16 h-16 mx-auto rounded-full bg-gray-200 mb-4 flex items-center justify-center text-xl font-bold text-gray-500">
              {review.name.charAt(0)}
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {review.name}
            </h3>
            {/* Star Rating */}
            <div className="flex justify-center my-2 text-yellow-400">
              {Array.from({ length: review.rating }).map((_, index) => (
                <FaStar key={index} />
              ))}
            </div>
            {/* Feedback */}
            <p className="text-gray-600 text-sm italic">
              &quot;{review.feedback}&quot;
            </p>
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Reviews;
