"use client";
import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { useSelector } from "react-redux";
import { StateType } from "../../type";
import CartModal from "./CartModal";
import { signIn, useSession } from "next-auth/react";

const HeaderCartIcon = () => {
  const { cart } = useSelector((state: StateType) => state.tree);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session } = useSession();

  const handleCartClick = () => {
    if (session?.user) {
      setIsModalOpen(true); // Open the cart modal if the user is logged in
    } else {
      signIn(); // Redirect to the login page if the user is not logged in
    }
  };

  return (
    <>
      <div
        className="flex gap-2 items-center cursor-pointer"
        onClick={handleCartClick}
      >
        <div className="bg-green-300 rounded-md p-2">
          <FaShoppingBag size={24} />
        </div>
        <div className="hidden sm:block">
          <h3 className="font-medium">My Cart</h3>
          <p className="text-sm text-red-500">
            ({cart.length ? cart.length : "0"})
          </p>
        </div>
      </div>
      {isModalOpen && (
        <CartModal onClose={() => setIsModalOpen(false)} cartItems={cart} />
      )}
    </>
  );
};

export default HeaderCartIcon;
