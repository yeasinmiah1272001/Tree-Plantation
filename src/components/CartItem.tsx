"use client";
import { useDispatch, useSelector } from "react-redux";
import { StateType } from "../../type";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import FunctionalBtn from "./FunctionalBtn";
import PriceContainer from "./PriceContainer";
import { deleteCount } from "@/redux/treeSlice";
import toast from "react-hot-toast";

const CartItem = () => {
  const { cart } = useSelector((state: StateType) => state.tree);
  const dispatch = useDispatch();

  // Check if the cart is empty
  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        <div className="bg-white shadow-md rounded-md p-4 text-center">
          <p className="text-lg">Your cart is empty.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="flex flex-col lg:flex-row lg:space-x-6">
        {/* Cart Items List */}
        <div className="bg-white shadow-md rounded-md p-4 flex-1">
          <div className="flex items-center justify-between border-b pb-4 mb-4">
            <h2 className="text-lg font-semibold">Item</h2>
            <h2 className="text-lg font-semibold">Quantity</h2>
            <h2 className="text-lg font-semibold">Price</h2>
            <h2 className="text-lg font-semibold">Remove</h2>
          </div>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-4 border-b last:border-none"
            >
              {/* Image and Title */}
              <div className="flex items-center space-x-4">
                <Image
                  src={item.images[0].url}
                  alt="image"
                  height={80}
                  width={80}
                  className="rounded-md"
                />
                <h3 className="text-md font-medium">{item.title}</h3>
              </div>
              {/* Quantity Controls */}
              <div>
                <FunctionalBtn singleData={item} />
              </div>
              {/* Price */}
              <div>
                <PriceContainer singleData={item} />
              </div>
              {/* Remove Button */}
              <button
                onClick={() =>
                  dispatch(
                    deleteCount(item.id),
                    toast.success(`${item.title} removed successfully`)
                  )
                }
                className="text-red-500 hover:text-red-700"
              >
                <IoClose size={24} />
              </button>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="bg-gray-100 shadow-md rounded-md p-4 w-full lg:w-1/3">
          <h2 className="text-2xl font-semibold mb-4">Cart Summary</h2>
          <div className="flex justify-between py-2">
            <span className="text-lg">Subtotal</span>
            <span className="text-lg font-medium">{/* Total Price */}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-lg">Shipping</span>
            <span className="text-lg font-medium">{/* Shipping Cost */}</span>
          </div>
          <div className="flex justify-between py-2 border-t mt-4 pt-4">
            <span className="text-xl font-bold">Total</span>
            <span className="text-xl font-bold">{/* Total Amount */}</span>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
