import React from "react";
import { Mobilesidebar } from "./mobilesidebar";
import NavbarRoutes from "@/components/navbar-routes";

const Navbar = () => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm  ">
      <Mobilesidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;
