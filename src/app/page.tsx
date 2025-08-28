"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const tshirts = [
    {
      id: 1,
      name: "Ronaldo 7",
      price: "$19.99",
      image: "/image1.png",
      colors: ["red", "blue", "black", "white"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 2,
      name: "Ronaldo 7",
      price: "$24.99",
      image: "/image2.png",
      colors: ["green", "yellow", "black", "white"],
      sizes: ["S", "M", "L", "XL"],
    },
    {
      id: 3,
      name: "Ronaldo 7",
      price: "$21.99",
      image: "/image3.png",
      colors: ["purple", "orange", "grey", "white"],
      sizes: ["S", "M", "L","XL"],
    },
    {
      id: 4,
      name: "Ronaldo 7",
      price: "$25.99",
      image: "/image5.png",
      colors: ["purple", "Black", "green", "blue"],
      sizes: ["S", "M", "L","XL"],
    },
  ];

  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string>("");

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      {/* Header */}
      <header className="w-full flex justify-between items-center bg-white shadow-md p-4 rounded-2xl">
        <h1 className="text-2xl font-bold text-gray-900">Verve Wear👕</h1>
        <nav className="space-x-6">
          <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Shop</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between mt-12 w-full max-w-6xl">
        <div className="text-left max-w-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Trendy T-Shirts for Every Mood
          </h2>
          <p className="mt-4 text-lg text-gray-600">
           Show your team spirit in style with our comfortable and durable jerseys. Perfect for game days, workouts, or casual wear, they combine sporty performance with a fashionable look.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700">
            Shop Now
          </button>
        </div>

        <div className="mt-8 md:mt-0 w-64 h-64 relative">
          <Image
            src="/image4.png"
            alt="T-shirt"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* T-shirt Cards */}
      <section className="mt-16 w-full max-w-6xl grid md:grid-cols-3 gap-8">
        {tshirts.map((shirt) => (
          <div
            key={shirt.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col items-center"
          >
            <div className="w-full h-64 relative">
              <Image
                src={shirt.image}
                alt={shirt.name}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-gray-900">{shirt.name}</h3>
            <p className="mt-2 text-gray-600">{shirt.price}</p>

            {/* Colors */}
            <div className="mt-4 w-full">
              <p className="text-gray-700 font-medium mb-2">Colors:</p>
              <div className="flex gap-2">
                {shirt.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full border-2 border-gray-300`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>

            {/* Sizes */}
            <div className="mt-4 w-full">
              <p className="text-gray-700 font-medium mb-2">Sizes:</p>
              <div className="flex gap-2">
                {shirt.sizes.map((size) => (
                  <button
                    key={size}
                    className={`px-3 py-1 border rounded-2xl ${
                      selectedSize === size ? "bg-blue-600 text-white" : "bg-gray-100"
                    }`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-2xl shadow-md hover:bg-blue-700">
              Buy Now
            </button>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="mt-16 w-full bg-white p-6 rounded-2xl text-center shadow-md">
        <p className="text-gray-600">&copy; 2025 Ronaldo Tees. All rights reserved.</p>
      </footer>
    </div>
  );
}
