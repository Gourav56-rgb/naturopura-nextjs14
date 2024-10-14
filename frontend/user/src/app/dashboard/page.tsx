"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";

const imageUrls = [
  "https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg",
  "https://www.mystore.in/s/62ea2c599d1398fa16dbae0a/66b229252eeee416e6a03443/wheat-daliya02plane-800x800.jpg",
  "https://m.media-amazon.com/images/I/71LyKlizpuL._SX679_.jpg",
  "https://fattaak.in/cdn/shop/files/1_0013c00a-148b-44a4-ab40-3e951fb16d65.jpg?v=1699522651&width=493",
  "https://www.jiomart.com/images/product/original/491185076/britannia-bourbon-100-g-buy-4-get-1-product-images-o491185076-p491185076-0-202311241526.jpg?im=Resize=(420,420)",
  "https://m.media-amazon.com/images/I/91IDDsuqf-L._SX679_.jpg",
  "https://m.media-amazon.com/images/I/61Ok62A6DDL._SX679_.jpg",
  "https://images-cdn.ubuy.co.in/64e304ed5b499f56275a0db2-del-monte-whole-green-beans-canned.jpg",
  "https://m.media-amazon.com/images/I/411Ej+4A3ML._SY300_SX300_.jpg",
];

const Dashboard = () => {
  return (
    <>
      <div className="relative">
        <Image
          width={500}
          height={500}
          src="https://images.immediate.co.uk/production/volatile/sites/30/2017/08/smoothie-bowl-3a8632c.jpg?quality=90&webp=true&resize=300,272"
          alt="Breakfast Image"
          className="w-[500px] h-[500px] object-cover absolute top-[-350px] right-[80px]"
        />
      </div>
      <div className="bg-white">
        <div className="ml-[600px] max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="h-[500px] w-[700px] grid max-w-2xl grid-cols-2 items-start gap-x-8 gap-y-16 py-24">
            {/* Image 1 */}
            <div className="relative">
              <Image
                width={300}
                height={400}
                alt="Yellow Juice"
                src="https://i0.wp.com/veganreset.com/wp-content/uploads/2023/08/Yellow-Juice-Carrot-Mango-Beet-PIneapple-Kiwi-30-scaled.jpg?resize=683%2C1024&ssl=1"
                className="rounded-lg bg-gray-100"
              />
              {/* Overlay for text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 rounded-lg text-center">
                <p className="text-white text-lg font-bold">NEW ARRIVALS</p>
                <p className="text-white">Freshly Drink Orange Juice</p>
              </div>
            </div>

            {/* Image 2 with Overlay */}
            <div className="relative">
              <Image
                width={350}
                height={350}
                alt="Seafood Tray"
                src="https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_1773695441-min-750x750.jpg"
                className="rounded-lg bg-gray-100"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-black/50 rounded-lg">
                <h2 className="text-white text-xl font-bold">
                  SALE OF 30% Daily Meal Seafoods
                </h2>
                <button
                  type="button"
                  className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-10 py-2.5"
                >
                  <Link href="/seafoods">Shop now</Link>
                </button>
              </div>
            </div>

            {/* Image 3 with Overlay */}
            <div className="relative">
              <Image
                width={300}
                height={400}
                alt="Milk Tray"
                src="https://new.milk.org/wp-content/uploads/2023/09/Homogenized-milk@3x.png"
                className="rounded-lg bg-gray-100"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 bg-black/50 rounded-lg">
                <h2 className="text-white text-xl font-bold">
                  DEVONDALE FULL Cream Milk
                </h2>
                <button
                  type="button"
                  className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-10 py-2.5"
                >
                  <Link href="/milks">Shop now</Link>
                </button>
              </div>
            </div>

            {/* Image 4 */}
            <div className="relative">
              <Image
                width={400}
                height={400}
                alt="Korean Ramen"
                src="https://www.marionskitchen.com/wp-content/uploads/2024/04/20240329_MIW_15-Minute-Creamy-Korean-Ramen_Bangkok-2-scaled-e1718853412616.webp"
                className="rounded-lg bg-gray-100"
              />
              {/* Overlay for text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 rounded-lg text-center">
                <p className="text-white text-lg font-bold">AMERICAN DIET</p>
                <p className="text-white">Ready Meals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-[650px] mt-[500px]">Featured Categories</div>
      <div className="ml-[1250px] mt-[-25px] underline">
        <Link href={""}>
          View all
          <ArrowRight className="ml-[55px] mt-[-25px]" />
        </Link>
      </div>
      <div className="relative ml-[550px]">
        <Image
          width={500}
          height={200}
          alt="Korean Ramen"
          src="https://www.madewithlau.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F2r0kdewr%2Fproduction%2Fb218b5f35241a57873407082d297adaf5434a1b0-1000x668.jpg&w=640&q=75"
          className="rounded-lg h-[500px] bg-gray-100"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-black/ rounded-lg">
          <button
            type="button"
            className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-10 py-2.5"
          >
            <Link href="/vegetables">Shop now</Link>
          </button>

          <p className="text-white mt-2">Fresh</p>
          <p className="text-white">125 items</p>
        </div>
      </div>

      <div className="relative ml-[1060px] mt-[-500px]">
        <Image
          width={270}
          height={200}
          alt="Korean Ramen"
          src="https://www.bigbasket.com/media/uploads/p/l/40037465_1-fresho-white-big-bread-slices-safe-preservative-free.jpg"
          className="rounded-lg bg-gray-100"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-black/30 rounded-lg">
          <button
            type="button"
            className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-10 py-2.5"
          >
            <Link href="/bakery">Shop now</Link>
          </button>

          <p className="text-white">Bakery</p>
          <p className="text-white">29 items</p>
        </div>
      </div>

      <div className="relative ml-[1060px] mt-[10px]">
        <Image
          width={220}
          height={200}
          alt="Korean Ramen"
          src="https://m.media-amazon.com/images/I/71YBmiSj-cL._SX679_.jpg"
          className="rounded-lg bg-gray-100"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-black/30 rounded-lg">
          <button
            type="button"
            className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-10 py-2.5"
          >
            <Link href="/drinks">Shop now</Link>
          </button>

          <p className="text-white">Drinks, tea & coffee</p>
          <p className="text-white">45 items</p>
        </div>
      </div>
      <div className="ml-[650px] mt-[50px]">Food Cupboard</div>
      <div className="relative ml-[600px]">
        <Image
          width={500}
          height={500}
          alt="Korean Ramen"
          src="https://www.savoringitaly.com/wp-content/uploads/2010/12/sweet-and-spicy-nuts-18.jpg"
          className="rounded-lg bg-gray-100"
        />
        {/* Overlay for text and button */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 rounded-lg text-center p-4">
          <p className="text-white text-lg font-bold">
            Sweet Snacks & Nuts Recipes
          </p>
          <p className="text-white">Healthy Recipes</p>
          <button
            type="button"
            className="mt-2 text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-10 py-2.5"
          >
            <Link href="/sweets">Shop now</Link>
          </button>
        </div>
      </div>
      <div className="ml-[650px] mt-[50px] underline">
        <Link href={""}>
          View all
          <ArrowRight className="ml-[55px] mt-[-25px]" />
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-5 ml-[600px] mt-5">
        {imageUrls.map((url, index) => (
          <div key={index}>
            <Image
              width={150}
              height={100}
              alt={`Image ${index + 1}`}
              src={url}
              className="h-[150px] rounded-lg bg-gray-100"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
