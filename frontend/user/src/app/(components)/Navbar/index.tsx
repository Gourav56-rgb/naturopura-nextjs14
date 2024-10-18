"use client";

import Link from "next/link";
import React from "react";
import { Search, ShoppingCart } from "lucide-react";
import Image from "next/image";
import img2 from "@/assets/logo 1.png";

const Navbar = () => {
  return (
    <nav className="bg-white border-b-2 border-gray-200 px-[250px] py-3 z-50 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/"}>
          <Image src={img2} width={100} height={100} alt="" />
        </Link>
        {/* Left Side - Search Input */}
        <div className="relative w-full md:w-60 mr-4">
          <input
            type="search"
            placeholder="Search for products"
            className="pl-4 pr-10 py-2 w-full border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-blue-500"
          />
          <div className="absolute cursor-pointer inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <Search className="text-gray-400" />
          </div>
        </div>
        {/* Right Side - Logo/Brand */}
        <button
          type="button"
          className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-10 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mt-1 mr-[200px]"
        >
          <Link href={"/login"}>Login</Link>
        </button>
        <Link href={"/cart"}>
          <ShoppingCart />
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
