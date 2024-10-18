"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, IndianRupee, Star } from "lucide-react";
import Sidebar from "../(components)/Sidebar";
import img1 from "@/assets/farm fresh.png";
import img2 from "@/assets/fresh-squeezed-orange-juice-16.jpg";

const Dashboard = () => {
  return (
    <>
      <div className="relative mt-[-197px]">
        <Image
          width={1920}
          height={1080}
          src={img1}
          alt="Breakfast Image"
          className="object-contain w-full aspect-[1.34]"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-green-800 z-10 text-9xl">
          <div className="mr-[800px] rounded-md">
            <span>Farm fresh</span>
            <br /> {/* Line break to place 'locally grown' below */}
            <span className="text-black">locally grown</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-300 mt-[-196px] w-screen h-screen flex items-center justify-center overflow-auto">
        <div className="mt-[-150px] grid grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          <div className="relative w-96 h-96">
            <Image
              width={300}
              height={300}
              alt="Orange Juice"
              src={img2}
              className="rounded-lg bg-gray-100 object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex flex-col justify-start items-start p-4">
              <div className="text-green-500 font-bold text-lg">
                NEW ARRIVALS
              </div>
              <div className="text-black text-sm mt-1">Freshly Drink</div>
              <div className="text-black text-sm mt-1">Orange Juice</div>
            </div>
          </div>

          <Image
            width={300}
            height={300}
            alt="Top down view of walnut card tray with embedded magnets and card groove."
            src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-02.jpg"
            className="rounded-lg bg-gray-100 object-cover w-96 h-96"
          />
          <Image
            width={300}
            height={300}
            alt="Side of walnut card tray with card groove and recessed card area."
            src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-03.jpg"
            className="rounded-lg bg-gray-100 object-cover w-96 h-96"
          />
          <Image
            width={300}
            height={300}
            alt="Walnut card tray filled with cards and card angled in dedicated groove."
            src="https://tailwindui.com/plus/img/ecommerce-images/product-feature-03-detail-04.jpg"
            className="rounded-lg bg-gray-100 object-cover w-96 h-96"
          />
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
      <Sidebar />
      <div className="grid grid-cols-3 gap-5 ml-[600px] mt-[-310px]">
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
      </div>
      <div className="relative ml-[650px] mt-[100px]">
        {/* Image Section */}
        <Image
          width={600}
          height={600}
          alt=""
          src="https://www.euroschoolindia.com/wp-content/webp-express/webp-images/uploads/2023/04/ways-to-eat-more-fruit.jpg.webp"
          className="rounded-lg bg-gray-100"
        />

        {/* Overlay Text and Button */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 space-y-4">
          <p className="text-white text-lg font-medium bg-black/50 px-2 py-1 rounded-md">
            Free Shipping ON ORDER UPTO $100
          </p>
          <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-4 py-2.5">
            <Link href={""}>Shop now</Link>
          </button>
        </div>
      </div>

      <div className="relative ml-[650px] mt-[100px]">
        {/* Image Section */}
        <Image
          width={600}
          height={600}
          alt=""
          src="https://www.euroschoolindia.com/wp-content/webp-express/webp-images/uploads/2023/04/ways-to-eat-more-fruit.jpg.webp"
          className="rounded-lg bg-gray-100"
        />

        {/* Overlay Text and Button */}
        <div className="absolute inset-0 flex flex-col justify-center items-start p-6 space-y-4">
          <p className="text-white text-lg font-medium bg-black/50 px-2 py-1 rounded-md">
            Save up to 50% ON YOUR FIRST ORDER
          </p>
          <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-4 py-2.5">
            <Link href={""}>Shop now</Link>
          </button>
        </div>
      </div>

      <div className="ml-[650px] mt-[50px]">Drinks, tea & coffee</div>
      <div className="relative ml-[650px]">
        {/* Image Section */}
        <Image
          width={700}
          height={700}
          alt=""
          src="https://img.freepik.com/premium-photo/cup-coffee-with-leaves-spoon-wooden-table_865967-366186.jpg?w=740"
          className="rounded-lg bg-gray-100"
        />

        {/* Overlay Text and Badge */}
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 p-4 text-center">
          <p className="text-white text-xl font-semibold bg-black/50 px-4 py-2 rounded-md">
            Delicious Milk Tea with Lipton cup No added sugar
          </p>
          <div className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-4 py-2.5">
            100% fresh
          </div>
        </div>
      </div>
      <div className="relative ml-[650px] mt-5">
        {/* Image Section */}
        <Image
          width={700}
          height={700}
          alt=""
          src="https://img.freepik.com/free-photo/iced-coffee-tall-glass-with-cream-topped-with-iced-coffee-decorated-with-coffee-beans_1150-22920.jpg?t=st=1728906150~exp=1728909750~hmac=1781d37cd751d11d591a2e206494ec4f971eb6a1f8d9c1ce8665941caf42f13e&w=740"
          className="rounded-lg bg-gray-100"
        />

        {/* Overlay Text and Badge */}
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 p-4 text-center">
          <p className="text-white text-xl font-semibold bg-black/50 px-4 py-2 rounded-md">
            Coffee Offers Cold Brew Iced Coffee
          </p>
          <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-4 py-2.5">
            <Link href={"/coffee"}>Shop now</Link>
          </button>
        </div>
      </div>
      <div className="relative ml-[650px] mt-5">
        {/* Image Section */}
        <Image
          width={700}
          height={700}
          alt=""
          src="https://zanducare.com/cdn/shop/articles/Zanducare_38.png?v=1709878906&width=1000"
          className="rounded-lg bg-gray-100"
        />

        {/* Overlay Text and Badge */}
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 p-4 text-center">
          <p className="text-white text-xl font-semibold bg-black/50 px-4 py-2 rounded-md">
            Soft Drinks Lemon Juice 500ml
          </p>
          <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-4 py-2.5">
            <Link href={"/juice"}>Shop now</Link>
          </button>
        </div>
      </div>
      <div className="ml-[650px] mt-[50px] underline">
        <Link href={""}>
          View all
          <ArrowRight className="ml-[55px] mt-[-25px]" />
        </Link>
      </div>
      <Sidebar />
      <div className="grid grid-cols-3 gap-5 ml-[600px] mt-[-310px]">
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/51Oyr9hIsOL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Tata Gold</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/416Xf7ZAd7L._SX300_SY300_QL70_FMwebp_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">NESCAFE Coffee Powder</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/41i5GW3YsuL._SX679_PIbundle-48,TopRight,0,0_AA679SH20_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Bisleri Water</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/41R3V7fK-3L._SX342_SY445_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Pomegranate Juice</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
      </div>
      <div className="ml-[650px] mt-[50px]">
        <Link href={""}>Natural Honey</Link>
      </div>
      <div className="relative ml-[650px]">
        {/* Image Section */}
        <Image
          width={700}
          height={700}
          alt=""
          src="https://cdn.shopify.com/s/files/1/0065/5602/4921/files/How_can_you_tell_the_difference_between_good_and_bad_honey.png?v=1686482111"
          className="rounded-lg bg-gray-100"
        />

        {/* Overlay Text and Button */}
        <div className="absolute inset-0 flex flex-col justify-center items-center space-y-4 p-4 text-center">
          <p className="text-white text-2xl font-semibold bg-black/50 px-6 py-2 rounded-md">
            Best Deal of the Week
          </p>
          <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-6 py-2.5">
            <Link href="/honey">Buy now</Link>
          </button>
        </div>
      </div>
      <Sidebar />
      <div className="grid grid-cols-3 gap-5 ml-[600px] mt-[-280px]">
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/41OQH1ST2dL._SX300_SY300_QL70_FMwebp_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Dabur Honey</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/41JjKD+4NVL._SY300_SX300_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Organic Honey</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/41y3+yO54hL._SY300_SX300_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Patanjali Honey</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/41R0CMLEmhL._SX300_SY300_QL70_FMwebp_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Zandu Pure Honey</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://m.media-amazon.com/images/I/71AuTPJ0veL._SX679_.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lays</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
            (5)
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
      </div>
      <button className="text-white mt-5 ml-[930px] bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
        <Link href={"/honey"}>View Products</Link>
      </button>
      <div className="text-black mt-5 ml-[930px] focus:ring-4 focus:outline-none font-medium rounded-lg text-sm py-2.5">
        GET WHAT YOU WANT
      </div>
      <div className="ml-[600px]">
        <Image
          width={200}
          height={400}
          alt=""
          src="https://5.imimg.com/data5/VU/MR/MY-24751011/purple-grapes-1000x1000.jpg"
          className="rounded-lg bg-gray-100"
        />
      </div>
      <div className="mt-[-200px] ml-[850px]">
        <Image
          width={200}
          height={400}
          alt=""
          src="https://cdn.shopaccino.com/rootz/products/picture1-12865436519083_l.jpg?v=492?param=1"
          className="rounded-lg bg-gray-100"
        />
      </div>
      <div className="mt-[-200px] ml-[1100px]">
        <Image
          width={200}
          height={400}
          alt=""
          src="https://4.imimg.com/data4/XP/GY/MY-27758951/green-capsicum-1000x1000.jpg"
          className="rounded-lg bg-gray-100"
        />
      </div>
      <div className="ml-[700px]">
        100% FRESH AND HEALTHY SPROUTS, VEGETABLES & lot more
      </div>
      <Sidebar />
      <div className="grid grid-cols-3 gap-5 ml-[600px] mt-[-280px]">
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://www.chandigarhayurvedcentre.com/wp-content/uploads/2021/03/APPLE.png"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Apple</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>

          <div className="flex">
            <IndianRupee /> 20
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://images.everydayhealth.com/images/diet-nutrition/how-many-calories-are-in-a-banana-1440x810.jpg?sfvrsn=be4504bc_4"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Banana</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="flex">
            <IndianRupee /> 20
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://fruitboxco.com/cdn/shop/products/asset_19_400x.jpg?v=1594383262"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Guava</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="flex">
            <IndianRupee /> 20
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://www.earthytales.in/uploads/products/3x/327c076eb2dc327535b959378a5d3624.jpg?v=031020241"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Cherry</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="flex">
            <IndianRupee /> 20
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://www.bigbasket.com/media/uploads/p/l/40122445_6-fresho-grapes-green-residue-free.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Grape</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="flex">
            <IndianRupee /> 20
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://www.fervalle.com/wp-content/uploads/2022/07/transparent-orange-apple5eacfeae85ac29.7815306015883956945475-300x300.png"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Orange</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="flex">
            <IndianRupee /> 20
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://cdn.shopaccino.com/rootz/products/picture1-12865436519083_l.jpg?v=492?param=1"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Dragon Fruit</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="flex">
            <IndianRupee /> 20
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://cdn.britannica.com/18/176518-050-5AB1E61D/lychee-fruits-Southeast-Asia.jpg?w=300"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lychee</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="flex">
            <IndianRupee /> 20
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://media.istockphoto.com/id/579754040/photo/red-berry-strawberry.jpg?s=612x612&w=0&k=20&c=o8m7UEe6NEVqyTO1bEZU5A6fKl3Zu43NLQ23JrlLQgM="
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Strawberry</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="flex">
            <IndianRupee /> 20
          </div>
          <div className="cursor-pointer flex gap-1 ml-5">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
      </div>
      <div className="relative mt-5 ml-[630px] w-[300px] h-[100px]">
        <Image
          width={300}
          height={100}
          alt=""
          src="https://happyharvestfarms.com/blog/wp-content/uploads/2024/01/Vegetables-3.jpg"
          className="rounded-lg bg-gray-100 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-2 bg-black/50 rounded-lg">
          <p className="text-sm font-semibold">
            Fresh Vegetables Always get adiues nature day course for common
          </p>
          <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-3 py-2.5">
            <Link href={"/vegetables"}>Shop now</Link>
          </button>
        </div>
      </div>

      <div className="relative mt-5 ml-[1000px] w-[300px] h-[100px]">
        <Image
          width={300}
          height={100}
          alt=""
          src="https://healthybuddha.in/image/cache/catalog/Sooji/basmati-rice-500x515.jpeg"
          className="rounded-lg bg-gray-100 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-2 bg-black/50 rounded-lg">
          <p className="text-sm font-semibold">
            Agricultural Vegetables Always get adiues nature day course for
            common
          </p>
          <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-3 py-2.5">
            <Link href={"/agriculture"}>Shop now</Link>
          </button>
        </div>
      </div>

      <div className="relative mt-[300px] ml-[1000px] w-[300px] h-[100px]">
        <Image
          width={300}
          height={100}
          alt=""
          src="https://simplyfresh.info/wp-content/uploads/2015/09/simply-handlingdairy-300x207.jpg"
          className="rounded-lg bg-gray-100 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-2 bg-black/50 rounded-lg">
          <p className="text-sm font-semibold">
            Dairy Vegetables Always get adiues nature day course for common
          </p>
          <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-3 py-2.5">
            <Link href={"/dairy"}>Shop now</Link>
          </button>
        </div>
      </div>

      <div className="relative mt-[-400px] ml-[630px] w-[300px] h-[100px]">
        <Image
          width={300}
          height={100}
          alt=""
          src="https://blog.cabi.org/wp-content/uploads/sites/5/2018/01/spices-1024x783.jpg"
          className="rounded-lg bg-gray-100 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-2 bg-black/50 rounded-lg">
          <p className="text-sm font-semibold">
            Organic Vegetables Always get adiues nature day course for common
          </p>
          <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-3 py-2.5">
            <Link href={"/spices"}>Shop now</Link>
          </button>
        </div>
      </div>
      <div className="relative mt-[425px] ml-[700px] w-[300px] h-[300px]">
        <Image
          width={300}
          height={300}
          alt=""
          src="https://5.imimg.com/data5/SELLER/Default/2024/1/378879267/DJ/VN/VT/200058092/fresh-mango-1000x1000.jpeg"
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-3 bg-black/40 rounded-lg p-4">
          <p className="text-sm font-semibold">
            Summer Fresh Mango Conveniently innovate user-centric benefits
            architectures rapidly build mortar testing manufacture distinctively
          </p>
          <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-4 py-2.5">
            <Link href={"/mango"}>View products</Link>
          </button>
        </div>
      </div>

      <div className="relative mt-[-290px] ml-[1030px] w-[300px] h-[300px]">
        <Image
          width={300}
          height={300}
          alt=""
          src="https://www.healthxchange.sg/sites/hexassets/Assets/food-nutrition/pineapple-health-benefits-and-ways-to-enjoy.jpg"
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-3 bg-black/50 rounded-lg p-4">
          <p className="text-sm font-semibold">
            Winter Fresh Pineapple Conveniently innovate user-centric benefits
            architectures rapidly build mortar testing manufacture distinctively
          </p>
          <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-4 py-2.5">
            <Link href={"/pineapple"}>View products</Link>
          </button>
        </div>
      </div>

      <div className="relative mt-[100px] ml-[1030px] w-[300px] h-[300px]">
        <Image
          width={300}
          height={300}
          alt=""
          src="https://media.istockphoto.com/id/579754040/photo/red-berry-strawberry.jpg?s=612x612&w=0&k=20&c=o8m7UEe6NEVqyTO1bEZU5A6fKl3Zu43NLQ23JrlLQgM="
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white space-y-3 bg-black/50 rounded-lg p-4">
          <p className="text-sm font-semibold">
            Autumn Fresh Strawberry Conveniently innovate user-centric benefits
            architectures rapidly build mortar testing manufacture distinctively
          </p>
          <button className="text-white bg-[#ACB631] font-medium rounded-lg text-sm px-4 py-2.5 focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50">
            <Link href={"/strawberry"}>View products</Link>
          </button>
        </div>
      </div>

      <div className="relative mt-[-250px] ml-[700px] w-[300px] h-[300px]">
        <Image
          width={300}
          height={300}
          alt="Spring Fresh Blackberry"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Blackberries_%28Rubus_fruticosus%29.jpg/250px-Blackberries_%28Rubus_fruticosus%29.jpg"
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black/50 space-y-3 rounded-lg p-4">
          <p className="text-sm font-semibold">
            Spring Fresh Blackberry Conveniently innovate user-centric benefits
            architectures rapidly build mortar testing manufacture distinctively
          </p>
          <button className="text-white bg-[#ACB631] font-medium rounded-lg text-sm px-4 py-2.5 focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50">
            <Link href={"/blackberry"}>View products</Link>
          </button>
        </div>
      </div>
      <div className="ml-[650px] mt-[50px]">Organic Fertilizer</div>
      <div className="relative ml-[550px]">
        <Image
          width={500}
          height={200}
          alt="Fertilizers"
          src="https://www.ecepl.com/wp-content/uploads/2024/04/Earthcare-41-1024x576.jpg"
          className="rounded-lg h-[500px] bg-gray-100"
        />

        {/* Overlay content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-2 bg-black/ rounded-lg">
          <button
            type="button"
            className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-10 py-2.5"
          >
            <Link href="/fertilizers">Know more</Link>
          </button>
        </div>
      </div>

      <div className="relative ml-[1060px] mt-[-500px]">
        <Image
          width={270}
          height={200}
          alt="Korean Ramen"
          src="https://kellogggarden.com/wp-content/uploads/2018/06/Hands-Holding-Soil-300x200.jpg"
          className="rounded-lg bg-gray-100"
        />

        {/* Overlay content */}
      </div>

      <div className="relative ml-[1060px] mt-[10px]">
        <Image
          width={275}
          height={200}
          alt="Korean Ramen"
          src="https://media.istockphoto.com/id/637583458/photo/hands-holding-and-caring-a-green-young-plant.jpg?s=612x612&w=0&k=20&c=vayQ471oZW7dTCeDJos5h4wH7SZqL4cbD-F-pZxj114="
          className="rounded-lg bg-gray-100"
        />

        {/* Overlay content */}
      </div>
      <div className="mt-[200px] ml-[600px]">
        <Image
          width={200}
          height={200}
          src="https://cdn.mos.cms.futurecdn.net/JvUBWzUho5ngxRNvK8Hf9i-1024-80.jpg.webp"
          alt=""
          className=""
        />
      </div>
      <div className="mt-[-133px] ml-[830px]">
        <Image
          width={200}
          height={200}
          src="https://cdn.mos.cms.futurecdn.net/JvUBWzUho5ngxRNvK8Hf9i-1024-80.jpg.webp"
          alt=""
          className=""
        />
      </div>
      <div className="mt-[-135px] ml-[1065px]">
        <Image
          width={200}
          height={200}
          src="https://cdn.mos.cms.futurecdn.net/JvUBWzUho5ngxRNvK8Hf9i-1024-80.jpg.webp"
          alt=""
          className=""
        />
      </div>
      <div className="ml-[850px]">Soil Conditioner</div>
      <div className="mt-5 ml-[600px]">
        <Image
          width={200}
          height={200}
          src="https://m.media-amazon.com/images/I/51CSqx1w9SS._SX300_SY300_QL70_FMwebp_.jpg"
          alt=""
          className=""
        />
      </div>
      <div className="mt-[-185px] ml-[830px]">
        <Image
          width={200}
          height={200}
          src="https://m.media-amazon.com/images/I/51CSqx1w9SS._SX300_SY300_QL70_FMwebp_.jpg"
          alt=""
          className=""
        />
      </div>
      <div className="mt-[-255px] ml-[1065px]">
        <Image
          width={200}
          height={200}
          src="https://m.media-amazon.com/images/I/51CSqx1w9SS._SX300_SY300_QL70_FMwebp_.jpg"
          alt=""
          className=""
        />
      </div>
      <div className="mt-[80px] ml-[850px]">Pesticides</div>
      <button
        type="button"
        className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-10 py-2.5 ml-[810px]"
      >
        <Link href="/pesticides">Know more</Link>
      </button>
      <div className="relative ml-[600px] mt-10 w-[400px] h-[350px]">
        <Image
          width={400}
          height={350}
          src="https://www.skorganicfarms.com/cdn/shop/collections/seeds_1296x.jpg?v=1550061858"
          alt="Agriculture SEEDS"
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center text-white bg-black/50 rounded-lg">
          <h2 className="text-xl font-semibold">Agriculture SEEDS</h2>
        </div>
      </div>

      <div className="relative ml-[1060px] mt-[-345px] w-[200px] h-[350px]">
        <Image
          width={200}
          height={350}
          src="https://www.alkarty.com/images/product/resized/500-500/03-07-2021industries-garden-sanitizer-chemical-pressure-sprayer-pump-original-imafwhzyzwsjgkzn.jpeg"
          alt="Farming & Gardening"
          className="object-cover rounded-lg"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 text-center text-white bg-black/50 rounded-lg p-4">
          <h2 className="text-lg font-semibold">Farming & Gardening</h2>
          <button
            type="button"
            className="text-black bg-[#ACB631] font-medium rounded-lg text-sm px-10 py-2.5 focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50"
          >
            <Link href="/farming">Know more</Link>
          </button>
        </div>
      </div>
      <div className="ml-[650px] mt-[50px]">Recommendations</div>
      <div className="ml-[650px] mt-[50px]">
        New arrival | Best Selling | Most popular | On Sales | All
      </div>
      <div className="grid grid-cols-3 gap-5 ml-[600px] mt-5">
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://5.imimg.com/data5/SELLER/Default/2023/8/332766634/BV/LK/TV/119986806/500-gram-frozen-chicken-500x500.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Chicken</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>

          <div className="flex">
            <IndianRupee /> 500
          </div>
        </div>

        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://www.bluetribefoods.com/cdn/shop/products/Pepperonifront1500x1500whitebackground_1024x1024.jpg?v=1704718440"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Pepperoni</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="flex">
            <IndianRupee /> 800
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://images-cdn.ubuy.co.in/663b390a85df32464c346e75-minute-maid-pink-lemonade-20-oz-bottle.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Minute Maid</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="flex">
            <IndianRupee /> 50
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://www.earthytales.in/uploads/products/3x/327c076eb2dc327535b959378a5d3624.jpg?v=031020241"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Cherry</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://www.bigbasket.com/media/uploads/p/l/40122445_6-fresho-grapes-green-residue-free.jpg"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Grape</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://www.fervalle.com/wp-content/uploads/2022/07/transparent-orange-apple5eacfeae85ac29.7815306015883956945475-300x300.png"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Orange</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://cdn.shopaccino.com/rootz/products/picture1-12865436519083_l.jpg?v=492?param=1"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Dragon Fruit</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://cdn.britannica.com/18/176518-050-5AB1E61D/lychee-fruits-Southeast-Asia.jpg?w=300"
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Lychee</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Image
            width={150}
            height={100}
            alt=""
            src="https://media.istockphoto.com/id/579754040/photo/red-berry-strawberry.jpg?s=612x612&w=0&k=20&c=o8m7UEe6NEVqyTO1bEZU5A6fKl3Zu43NLQ23JrlLQgM="
            className="h-[150px] rounded-lg bg-gray-100"
          />
          <p className="text-center mt-[-20px]">Strawberry</p>
          <div className="flex gap-4 mt-[-11px] ml-5">
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to cart
            </button>
            <button className="text-white bg-[#ACB631] focus:ring-4 focus:outline-none focus:ring-[#f3ff63]/50 font-medium rounded-lg text-sm px-1 py-2.5">
              Add to wishlist
            </button>
          </div>
          <div className="flex">
            <IndianRupee /> 20
          </div>
        </div>
      </div>
      <div className="ml-[650px] mt-[50px]">Your Recent Viewed</div>
      <div className="ml-[1250px] mt-[-25px] underline">
        <Link href={""}>
          View all
          <ArrowRight className="ml-[55px] mt-[-25px]" />
        </Link>
      </div>
      <div className="ml-[680px] mt-5">
        <Image
          width={600}
          height={400}
          alt=""
          src="https://www.bluetribefoods.com/cdn/shop/products/Pepperonifront1500x1500whitebackground_1024x1024.jpg?v=1704718440"
          className="rounded-lg bg-gray-100"
        />
      </div>
    </>
  );
};

export default Dashboard;
