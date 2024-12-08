import Image from "next/image";
import img1 from "../assets/103.png";
import Container from "./Container";

const Landscaping = () => {
  return (
    <div className="py-10 bg-[#DCFFAB]">
      <Container className="">
        <Image alt="img" src={img1} />
      </Container>
    </div>
  );
};

export default Landscaping;
