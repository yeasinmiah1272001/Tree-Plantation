"use client";
import Container from "../Container";
import Image from "next/image";
import logo from "../../assets/logo.svg";
import { FaShoppingBag, FaUser } from "react-icons/fa";
import Link from "next/link";
import SearchBar from "../SearchBar";

import HeaderCartIcon from "../HeaderCartIcon";
import { signIn, signOut, useSession } from "next-auth/react";

const TopHeader = () => {
  const { data: session } = useSession();
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
            <div className="rounded-full p-2">
              {session?.user ? (
                <Image
                  className="h-12 rounded-full"
                  src={session.user.image!}
                  alt="logo"
                  height={50}
                  width={50}
                />
              ) : (
                <FaUser onClick={() => signIn()} size={24} />
              )}
            </div>
            <div className="hidden sm:block cursor-pointer">
              {session?.user ? (
                <div onClick={() => signOut()}>
                  <h3 className="font-medium">My Account</h3>
                  <p className="text-xl text-black">Logout</p>
                </div>
              ) : (
                <div onClick={() => signIn()}>
                  <h3 className="font-medium">My Account</h3>
                  <p className="text-xs text-gray-500">Login / Register</p>
                </div>
              )}
            </div>
          </div>

          {/* My Cart */}
          <HeaderCartIcon />
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
