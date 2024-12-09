import React from "react";
import TopHeader from "./TopHeader";
import BottomHeader from "./BottomHeader";

const Header = () => {
  return (
    <div className="fixed top-0 bg-white z-50 w-full">
      <TopHeader />
      <BottomHeader />
    </div>
  );
};

export default Header;
