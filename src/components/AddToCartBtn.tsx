"use client";
import React from "react";
import toast from "react-hot-toast";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { StateType, TreeBlogItem } from "../../type";
import { addTocart } from "@/redux/treeSlice";

const AddToCartBtn = ({ item }: { item: TreeBlogItem }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state: StateType) => state.tree);
  console.log("cart", cart);
  const handleAddToCart = () => {
    const isItemInServiceList = cart.find(
      (serviceItem: TreeBlogItem) => serviceItem.id === item.id
    );

    if (isItemInServiceList) {
      toast.error(`${item.title} is already in your service list!`);
    } else {
      dispatch(addTocart(item));
      toast.success(`${item.title} added to your service list!`);
    }
  };
  return (
    <span
      onClick={handleAddToCart}
      className="text-xl font-bold bg-green-300 p-2 rounded-md text-black"
    >
      <FaCartShopping />
    </span>
  );
};

export default AddToCartBtn;
