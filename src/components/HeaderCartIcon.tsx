import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
import { StateType } from "../../type";
import CartModal from "./CartModal";

const HeaderCartIcon = () => {
  const { cart } = useSelector((state: StateType) => state.tree);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <div className="bg-green-300 rounded-md p-2">
          <FaShoppingBag size={24} />
        </div>
        <div className="hidden sm:block">
          <h3 className="font-medium">My Cart</h3>
          <p className="text-sm text-red-500">({cart.length || 0} items)</p>
        </div>
      </div>
      {isModalOpen && (
        <CartModal onClose={() => setIsModalOpen(false)} cartItems={cart} />
      )}
    </>
  );
};

export default HeaderCartIcon;
