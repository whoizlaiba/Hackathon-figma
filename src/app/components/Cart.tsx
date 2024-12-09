'use client'

import React from 'react'
import Image from 'next/image'
import { FaHeart, FaTrashAlt } from 'react-icons/fa' // Importing from react-icons

export default function Cart() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12">
      <div className="max-w-5xl w-full bg-white p-6 space-y-8">
        {/* Free Delivery Section */}
        <div className="bg-gray-100 p-6 rounded-lg md:w-2/3">
          <h2 className="text-lg font-bold mb-2">Free delivery</h2>
          <p className="text-sm text-gray-600 mb-4">Applies to orders of ₹ 14,000.00 or more.</p>
          <a href="#" className="text-sm text-black underline">View details</a>
        </div>

        {/* Bag Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Bag Items */}
          <div className="md:col-span-2 space-y-8">
            <h2 className="text-2xl font-bold">Bag</h2>
            {/* Item 1 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b">
              <Image
                src="/outfitone.png"
                alt="Nike Dri-FIT ADV TechKnit Ultra"
                width={120}
                height={120}
                className="rounded-md mb-4 sm:mb-0"
              />
              <div className="ml-0 sm:ml-6 flex-1 space-y-2">
                <h3 className="font-medium text-lg text-gray-800">
                  Nike Dri-FIT ADV TechKnit Ultra
                </h3>
                <p className="text-gray-600">Men&#39s Short-Sleeve Running Top</p>
                <p className="text-gray-500">Ashen Slate/Cobalt Bliss</p>
                <p className="text-gray-500">Size: L | Quantity: 1</p>
                <div className="flex mt-4">
                  <button className="text-gray-500 hover:text-black mr-4">
                    <FaHeart size={24} /> {/* Replaced lucide-react Heart with react-icons FaHeart */}
                  </button>
                  <button className="text-gray-500 hover:text-black">
                    <FaTrashAlt size={24} /> {/* Replaced lucide-react Trash2 with react-icons FaTrashAlt */}
                  </button>
                </div>
              </div>
              <div className="text-right mt-4 sm:mt-0">
                <p className="font-medium text-lg">₹ 3,895.00</p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 border-b">
              <Image
                src="/best1.png"
                alt="Nike Air Max 97 SE"
                width={120}
                height={120}
                className="rounded-md mb-4 sm:mb-0"
              />
              <div className="ml-0 sm:ml-6 flex-1 space-y-2">
                <h3 className="font-medium text-lg text-gray-800">Nike Air Max 97 SE</h3>
                <p className="text-gray-600">Men&#39s Shoes</p>
                <p className="text-gray-500">Flat Pewter/Light Bone/Black/White</p>
                <p className="text-gray-500">Size: 8 | Quantity: 1</p>
                <div className="flex mt-4">
                  <button className="text-gray-500 hover:text-black mr-4">
                    <FaHeart size={24} /> {/* Replaced lucide-react Heart with react-icons FaHeart */}
                  </button>
                  <button className="text-gray-500 hover:text-black">
                    <FaTrashAlt size={24} /> {/* Replaced lucide-react Trash2 with react-icons FaTrashAlt */}
                  </button>
                </div>
              </div>
              <div className="text-right mt-4 sm:mt-0">
                <p className="font-medium text-lg">₹ 16,995.00</p>
              </div>
            </div>
          </div>

          {/* Summary Section */}
          <div className="rounded-lg p-6 space-y-6">
            <h2 className="text-2xl font-medium">Summary</h2>
            <div className="flex justify-between">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-medium">₹ 20,890.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600">Estimated Delivery & Handling</p>
              <p className="font-medium">Free</p>
            </div>
            <div className="flex justify-between text-xl font-medium pt-4 border-t">
              <p>Total</p>
              <p>₹ 20,890.00</p>
            </div>
            <button className="w-full bg-black text-white font-medium py-4 rounded-[30px] mt-6">
              Member Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
