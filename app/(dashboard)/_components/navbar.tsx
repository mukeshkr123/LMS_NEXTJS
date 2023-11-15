import React from "react";
import { Mobilesidebar } from "./mobilesidebar";

const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm  ">
      <Mobilesidebar />
    </div>
  );
};

export default Navbar;
