import Link from "next/link";
import React from "react";
import { FaEye, FaHeart } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { TreeBlogItem } from "../../type";

import AddToCartBtn from "./AddToCartBtn";
import { useSession } from "next-auth/react";

const Icon = ({ item }: { item: TreeBlogItem }) => {
  const { data: session } = useSession();

  const redirectTo = (path: string) => {
    if (session) {
      return path;
    } else {
      return "/api/auth/signin";
    }
  };

  return (
    <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <div className="flex gap-3">
        <AddToCartBtn item={item} />

        {/* View Button */}
        <Link
          href={redirectTo(`/singlepage/${item.id}`)}
          className="text-xl font-bold bg-green-300 p-2 rounded-md text-black"
        >
          <FaEye />
        </Link>

        {/* Edit Button */}
        <Link
          href={redirectTo(`/singlepage/${item.id}`)}
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
