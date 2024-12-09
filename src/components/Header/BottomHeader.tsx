import { navigationLinks } from "@/constant";
import Link from "next/link";
import React from "react";

const BottomHeader = () => {
  return (
    <nav className="p-2 hidden md:flex md:p-4 border border-b border-gray-300">
      <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 text-sm md:text-xl mx-auto justify-center items-center uppercase max-w-screen-lg">
        {navigationLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.path}>
              <p className="text-lg font-semibold hover:text-amber-500">
                {link.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BottomHeader;
