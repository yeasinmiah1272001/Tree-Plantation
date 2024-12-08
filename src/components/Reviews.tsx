import { FaQuoteRight } from "react-icons/fa"; // For the quote icon
import Marquee from "react-fast-marquee";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import Image from "next/image";
import Container from "./Container";
import heading from "../assets/hedimg.png";

const testimonials = [
  {
    name: "Phoenix Baker",
    role: "Client",
    image: img1,
    content:
      "Lorem ipsum dolor sit amet, conse adipisic elit, sed do eiusmod tempo incididunt ut labore et dolore. magna",
  },
  {
    name: "Sarah Wilson",
    role: "Client",
    image: img2,
    content:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    name: "Michael Chen",
    role: "Client",
    image: img3,
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
  },
  {
    name: "Emma Thompson",
    role: "Client",
    image: img1,
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  {
    name: "David Rodriguez",
    role: "Client",
    image: img2,
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
  },
];

const Reviews: React.FC = () => {
  return (
    <Container className="">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-extrabold text-gray-900 md:text-4xl">
          Client Review
        </h1>
        <div className="mt-4">
          <Image
            src={heading}
            alt="Popular Tree Collection Image"
            className="mx-auto object-cover"
          />
        </div>
      </div>

      <div className="w-full overflow-hidden py-10">
        <Marquee gradient={false} speed={40} className="py-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="mx-4 w-[350px] relative overflow-hidden bg-white shadow-lg rounded-lg"
            >
              <div className="p-6">
                <div className="absolute top-0 right-0 w-32 h-32">
                  <div className="absolute top-0 right-0 w-full h-full hover:bg-gray-400 duration-300 bg-[#A6D388] rounded-bl-[100%] flex items-start justify-end p-4">
                    <FaQuoteRight className="text-white text-xl" />
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="w-16 h-16 border-4 border-[#A6D388] rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <p className="text-gray-600">{testimonial.content}</p>
                </div>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </Container>
  );
};

export default Reviews;
