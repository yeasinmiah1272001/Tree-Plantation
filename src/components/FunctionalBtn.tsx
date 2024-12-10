import React, { useEffect, useState } from "react";
import AddToCartBtn from "./AddToCartBtn";
import { StateType, TreeBlogItem } from "../../type";
import { useDispatch, useSelector } from "react-redux";
import { decressQuantity, incressQuantity } from "@/redux/treeSlice";
import toast from "react-hot-toast";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FunctionalBtn = ({ singleData }: { singleData: TreeBlogItem }) => {
  const { cart } = useSelector((state: StateType) => state.tree);
  const dispatch = useDispatch();

  const [existingProduct, setExistingProduct] = useState<TreeBlogItem | null>(
    null
  );

  useEffect(() => {
    const availableProduct = cart.find((item) => item.id === singleData.id);
    setExistingProduct(availableProduct || null);
  }, [cart, singleData.id]);

  const handleIncress = () => {
    if (singleData) {
      dispatch(incressQuantity(singleData.id));
      toast.success(`${singleData.title} incress success`);
    }
  };

  const handleDecress = () => {
    if (existingProduct?.quantity && existingProduct.quantity > 1) {
      // Check if quantity is defined
      dispatch(decressQuantity(singleData.id));
      toast.success(`${singleData.title} decress success`);
    }
  };

  return (
    <div className="flex items-center space-x-4 mb-6">
      {existingProduct ? (
        <div className="flex items-center border border-gray-300 rounded-lg">
          <button
            onClick={handleDecress}
            disabled={existingProduct.quantity! <= 1} // Disable when quantity is 1 or undefined
            className={`px-4 py-2 flex items-center justify-center ${
              existingProduct.quantity! <= 1
                ? "cursor-not-allowed text-gray-400"
                : "hover:bg-gray-100 text-gray-700"
            }`}
          >
            <AiOutlineMinus size={18} />
          </button>
          <input
            type="text"
            value={existingProduct.quantity}
            readOnly
            className="w-12 text-center border-l border-r border-gray-300 focus:outline-none"
          />
          <button
            onClick={handleIncress}
            className="px-4 py-2 hover:bg-gray-100 text-gray-700 flex items-center justify-center"
          >
            <AiOutlinePlus size={18} />
          </button>
        </div>
      ) : (
        <button className="text-black bg-green-300 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-green-400">
          <AddToCartBtn item={singleData} />
        </button>
      )}
    </div>
  );
};

export default FunctionalBtn;
