import Link from "next/link";
import React from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { TreeBlogItem } from "../../type";

const Icon = ({ item }: { item: TreeBlogItem }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="flex gap-3">
        <span className="text-xl font-bold bg-green-300 p-2 rounded-md text-black">
          <FaCartShopping />
        </span>

        <Link
          href={{
            pathname: `/singlepage/${item.id}`,
          }}
          className="text-xl font-bold bg-green-300 p-2 rounded-md text-black"
        >
          <FaEye />
        </Link>
        <Link
          href={{
            pathname: `/singlepage/${item.id}`,
          }}
          className="text-xl font-bold bg-green-300 p-2 rounded-md text-black"
        >
          <MdEdit />
        </Link>
      </div>

      {/* Heart icon and offer */}
      <span className="absolute top-3 left-3">
        <FaHeart size={30} className="text-green-400" />
      </span>
      <span className="absolute top-3 right-3 bg-green-200 border-gray-400 text-black p-1 px-2 rounded-md">
        {item.offer}
      </span>
    </div>
  );
};

export default Icon;
