"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { StateType } from "../../type";

const CartSummary = () => {
  const { cart } = useSelector((state: StateType) => state?.tree);
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    // Calculate subtotal
    const calculatedSubtotal = cart.reduce(
      (sum, item) => sum + item?.price * item?.quantity!,
      0
    );
    setSubtotal(calculatedSubtotal);

    // Calculate discount
    const calculatedDiscount = cart.reduce(
      (sum, item) => sum + (item?.old_price - item?.price) * item?.quantity!,
      0
    );
    setDiscount(calculatedDiscount);

    // Calculate total
    setTotal(calculatedSubtotal - calculatedDiscount);
  }, [cart]);

  return (
    <div className="bg-gray-100 shadow-md rounded-md p-4 w-full lg:w-1/3">
      <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>
      <div className="flex justify-between py-2">
        <span className="text-lg">Subtotal:</span>
        <span className="text-lg font-medium">${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between py-2">
        <span className="text-lg">Discount:</span>
        <span className="text-lg font-medium">${discount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between py-2 border-t mt-4 pt-4">
        <span className="text-xl font-bold">Total:</span>
        <span className="text-xl font-bold">${total.toFixed(2)}</span>
      </div>
      <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartSummary;
