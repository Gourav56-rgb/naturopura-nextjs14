"use client";

import React from "react";

const Sidebar = () => {
  return (
    <div className={""}>
      {/* TOP LOGO */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 `}
      >
        {/* <Image
          src="https://s3-inventorymanagement.s3.us-east-2.amazonaws.com/logo.png"
          alt="edstock-logo"
          width={27}
          height={27}
          className="rounded w-8"
        /> */}
        <div className="flex justify-between items-start">
          {/* Left Side - Breakfast Text */}
          <div>
            <h1 className="font-bold text-2xl">+ Breakfast</h1>
            <h1 className="font-bold text-2xl">+ Breakfast</h1>
            <h1 className="font-bold text-2xl">+ Breakfast</h1>
            <h1 className="font-bold text-2xl">+ Breakfast</h1>
            <h1 className="font-bold text-2xl">+ Breakfast</h1>
            <h1 className="font-bold text-2xl">+ Breakfast</h1>
            <h1 className="font-bold text-2xl">+ Breakfast</h1>
            <h1 className="font-bold text-2xl">+ Breakfast</h1>
            <h1 className="font-bold text-2xl">+ Breakfast</h1>
            <h1 className="font-bold text-2xl">+ Breakfast</h1>
          </div>

          {/* Right Side - Image */}
          <div className="ml-4">
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&webp=true&resize=300,272" // Replace with the actual image path
              alt="Breakfast"
              className="w-10 h-8 object-cover rounded-lg" // Adjust size as needed
            />
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&webp=true&resize=300,272" // Replace with the actual image path
              alt="Breakfast"
              className="w-10 h-8 object-cover rounded-lg" // Adjust size as needed
            />
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&webp=true&resize=300,272" // Replace with the actual image path
              alt="Breakfast"
              className="w-10 h-8 object-cover rounded-lg" // Adjust size as needed
            />
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&webp=true&resize=300,272" // Replace with the actual image path
              alt="Breakfast"
              className="w-10 h-8 object-cover rounded-lg" // Adjust size as needed
            />
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&webp=true&resize=300,272" // Replace with the actual image path
              alt="Breakfast"
              className="w-10 h-8 object-cover rounded-lg" // Adjust size as needed
            />
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&webp=true&resize=300,272" // Replace with the actual image path
              alt="Breakfast"
              className="w-10 h-8 object-cover rounded-lg" // Adjust size as needed
            />
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&webp=true&resize=300,272" // Replace with the actual image path
              alt="Breakfast"
              className="w-10 h-8 object-cover rounded-lg" // Adjust size as needed
            />
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&webp=true&resize=300,272" // Replace with the actual image path
              alt="Breakfast"
              className="w-10 h-8 object-cover rounded-lg" // Adjust size as needed
            />
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&webp=true&resize=300,272" // Replace with the actual image path
              alt="Breakfast"
              className="w-10 h-8 object-cover rounded-lg" // Adjust size as needed
            />
            <img
              src="https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&webp=true&resize=300,272" // Replace with the actual image path
              alt="Breakfast"
              className="w-10 h-8 object-cover rounded-lg" // Adjust size as needed
            />
          </div>
        </div>

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          //   onClick={toggleSidebar}
        >
          {/* <Menu className="w-4 h-4" /> */}
        </button>
      </div>

      {/* LINKS */}
      {/* <div className="flex-grow mt-8">
        <SidebarLink
          href="/dashboard"
          icon={Layout}
          label="Dashboard"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/inventory"
          icon={Archive}
          label="Inventory"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/products"
          icon={Clipboard}
          label="Products"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/users"
          icon={User}
          label="Users"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/settings"
          icon={SlidersHorizontal}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="/expenses"
          icon={CircleDollarSign}
          label="Expenses"
          isCollapsed={isSidebarCollapsed}
        />
      </div> */}

      {/* FOOTER */}
    </div>
  );
};

export default Sidebar;
