import { navigationLinks } from "@/constant";
import Link from "next/link";
import React from "react";

const BottomHeader = () => {
  return (
    <nav className="p-2 border border-b border-gray-300">
      <ul className="flex space-x-7 text-sm md:text-xl md:space-x-20 mx-auto justify-center uppercase">
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
