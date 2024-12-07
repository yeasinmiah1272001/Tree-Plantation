import React from "react";
import Container from "../Container";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { FaSearch, FaShoppingBag, FaUser } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-white p-2 w-full border-b-2">
      <Container className="flex justify-between items-center gap-5">
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Image className="h-8" src={logo} alt="logo" />
        </div>

        {/* Search Bar */}
        <div className="hidden relative sm:flex w-full max-w-[400px] mx-auto">
          <input
            className="bg-gray-200 w-full p-2 rounded-lg outline-none border border-gray-300"
            type="text"
            placeholder="Search"
          />
          <span className="absolute top-3 right-4">
            <FaSearch />
          </span>
        </div>

        {/* User and Cart Sections */}
        <div className="md:flex hidden  items-center space-x-5">
          {/* My Account */}
          <div className="flex gap-2 items-center">
            <div className="bg-green-300 rounded-md p-2">
              <FaUser size={24} />
            </div>
            <div className="hidden sm:block">
              <h3 className="font-medium">My Account</h3>
              <p className="text-xs text-gray-500">Login / Register</p>
            </div>
          </div>

          {/* My Cart */}
          <div className="flex gap-2 items-center">
            <div className="bg-green-300 rounded-md p-2">
              <FaShoppingBag size={24} />
            </div>
            <div className="hidden sm:block">
              <h3 className="font-medium">My Cart</h3>
              <p className="text-xs text-gray-500">(0) items</p>
            </div>
          </div>
        </div>

        {/* Mobile View - Search Bar, User, Cart */}
        <div className="flex sm:hidden items-center gap-5">
          {/* User */}
          <div className="flex gap-2 items-center">
            <div className="bg-green-300 rounded-md p-2">
              <FaUser size={24} />
            </div>
          </div>
          {/* Cart */}
          <div className="flex gap-2 items-center">
            <div className="bg-green-300 rounded-md p-2">
              <FaShoppingBag size={24} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopHeader;
