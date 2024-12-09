import React from "react";
import Container from "../Container";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { FaShoppingBag, FaUser } from "react-icons/fa";
import Link from "next/link";
import SearchBar from "../SearchBar";

const TopHeader = () => {
  return (
    <div className="bg-white p-2 w-full border-b-2">
      <Container className="flex justify-between items-center gap-5">
        {/* Logo Section */}
        <Link href={"/"}>
          <div className="flex-shrink-0">
            <Image className="h-8" src={logo} alt="logo" />
          </div>
        </Link>
        {/* Search Bar */}
        <SearchBar />
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
