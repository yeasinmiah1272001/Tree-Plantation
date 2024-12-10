import React, { useEffect, useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import { StateType, TreeBlogItem } from "../../type";
import { useSelector } from "react-redux";

const FunctionalBtn = ({ singleData }: { singleData: TreeBlogItem }) => {
  const { cart } = useSelector((state: StateType) => state.tree);

  const [existingProduct, setExistingProduct] = useState<TreeBlogItem | null>(
    null
  );

  useEffect(() => {
    const availableProduct = cart.find((item) => item.id === singleData.id);
    setExistingProduct(availableProduct || null);
  }, [cart, singleData.id]);

  return (
    <div className="flex items-center space-x-4 mb-6">
      {existingProduct ? (
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button className="px-4 py-2 hover:bg-gray-100">-</button>
          <input
            type="text"
            value="2" // Update this value dynamically if needed
            readOnly
            className="w-12 text-center border-l border-r border-gray-300 focus:outline-none"
          />
          <button className="px-4 py-2 hover:bg-gray-100">+</button>
        </div>
      ) : (
        <button className="text-black bg-green-300 px-4 py-2 rounded-lg flex items-center space-x-2">
          <AddToCartBtn item={singleData} />
        </button>
      )}
    </div>
  );
};

export default FunctionalBtn;
