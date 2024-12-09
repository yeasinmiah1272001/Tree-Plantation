import Image from "next/image";
import React from "react";
import Icon from "./Icon";
import { TreeBlogItem } from "../../type";

const FilterMiniCard = ({ item }: { item: TreeBlogItem }) => {
  return (
    <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Product Image */}
      <Image
        src={item.images[0].url}
        alt={item.title}
        width={300}
        height={300}
        className="object-cover w-full h-48"
      />
      {/* Product Overlay */}
      <Icon item={item} />
    </div>
  );
};

export default FilterMiniCard;
