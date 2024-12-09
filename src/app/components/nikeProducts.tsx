





























import React from 'react';
import Image from 'next/image';

// The nikeProducts array
export const nikeProducts = [
  {
    id: 1,
    tags: "Just In",
    title: "Nike Air Force 1 Mid '07",
    description: "Men's Shoes",
    color: "1 Colour",
    price: "MRP : ₹ 10 795.00",
    imagesUrls: "/p1.png",
  },
  {
    id: 2,
    tags: "Just In",
    title: "Nike Court Vision Low Next Nature",
    description: "Men's Shoes",
    color: "1 Colour",
    price: "MRP : ₹ 4 995.00",
    imagesUrls: "/p2.png",
  },
  {
    id: 3,
    tags: "Just In",
    title: "Nike Air Force 1 PLT.AF.ORM",
    description: "Women's Shoes",
    color: "1 Colour",
    price: "MRP : ₹ 8 695.00",
    imagesUrls: "/p3.png",
  },
  {
    id: 4,
    tags: "Just In",
    title: "Nike Air Force 1 React",
    description: "Men's Shoes",
    color: "1 Colour",
    price: "MRP : ₹ 13 295.00",
    imagesUrls: "/p4.png",
  },
  {
    id: 5,
    tags: "Promo Exclusion",
    title: "Air Jordan 1 Elevate Low",
    description: "Women's Shoes",
    color: "1 Colour",
    price: "MRP : ₹ 11 895.00",
    imagesUrls: "/p5.png",
  },
  {
    id: 6,
    tags: "Just In",
    title: "Nike Standard Issue",
    description: "Women's Basketball Jersey",
    color: "1 Colour",
    price: "MRP : ₹ 2 895.00",
    imagesUrls: "/p6.png",
  },
  {
    id: 7,
    tags: "Promo Exclusion",
    title: "Nike Dunk Low Retro SE",
    description: "Men's Shoes",
    color: "1 Colour",
    price: "MRP : ₹ 9 695.00",
    imagesUrls: "/p7.png",
  },
  {
    id: 8,
    tags: "Sustainable Materials",
    title: "Nike Dri-FIT UV Hyverse",
    description: "Men's Short Sleeve Graphic Fitness Top",
    color: "1 Colour",
    price: "MRP : ₹ 2 495.00",
    imagesUrls: "/p8.png",
  },
  {
    id: 9,
    tags: "Just In",
    title: "Nike Court Vision Low",
    description: "Men's Shoes",
    color: "1 Colour",
    price: "MRP : ₹ 5 695.00",
    imagesUrls: "/p9.png",
  },
];

const Sidebar = () => (
  <aside className="hidden md:block w-1/5 p-4 space-y-8">
    {/* Sidebar Title */}
    <h2 className="text-xl font-medium text-slate-800 mb-4">New(500)</h2>

    {/* Categories Section */}
    
    <div>
      <ul className="space-y-3">
        {[
          "Shoes",
          "Sports Bras",
          "Tops & T-Shirts",
          "Hoodies & Sweatshirts",
          "Jackets",
          "Trousers & Tights",
          "Shorts",
          "Tracksuits",
          "Jumpsuits & Rompers",
          "Skirts & Dresses",
          "Socks",
          "Accessories & Equipment",
        ].map((item, index) => (
          <li
            key={index}
            className="text-slate-800 font-medium leading-tight hover:underline cursor-pointer"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>

    {/* Gender Selection Section */}
    <div className="relative border-t border-b border-slate-200 py-4">
      <h3 className="text-lg font-medium mb-3">Gender</h3>
      <div className="space-y-2">
        {["Men", "Women", "Unisex"].map((gender, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={gender.toLowerCase()}
              className="form-checkbox h-4 w-4 text-slate-800 bg-slate-200 border-gray-300 rounded-sm focus:ring-slate-500"
            />
            <label
              htmlFor={gender.toLowerCase()}
              className="ml-2 text-slate-800 font-medium cursor-pointer"
            >
              {gender}
            </label>
          </div>
        ))}
      </div>
    </div>

    {/* Kids Section */}
    <div className="border-b border-slate-200 py-4">
      <h3 className="text-lg font-medium mb-3">Kids</h3>
      <div className="space-y-2">
        {["Girls", "Boys"].map((kid, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={kid.toLowerCase()}
              className="form-checkbox h-4 w-4 text-slate-800 bg-slate-200 border-gray-300 rounded-sm focus:ring-slate-500"
            />
            <label
              htmlFor={kid.toLowerCase()}
              className="ml-2 text-slate-800 font-medium cursor-pointer"
            >
              {kid}
            </label>
          </div>
        ))}
      </div>
    </div>

    {/* Shop By Price Section */}
    <div className="border-b border-slate-200 py-4">
      <h3 className="text-lg font-medium mb-3">Shop By Price</h3>
      <div className="space-y-2">
        {[
          "Under ₹2500.00",
          "₹2501.00 - ₹5000.00",
        ].map((price, index) => (
          <div key={index} className="flex items-center">
            <input
              type="checkbox"
              id={`price-${index}`}
              className="form-checkbox h-4 w-4 text-slate-800 bg-slate-200 border-gray-300 rounded-sm focus:ring-slate-500"
            />
            <label
              htmlFor={`price-${index}`}
              className="ml-2 text-slate-800 font-medium cursor-pointer"
            >
              {price}
            </label>
          </div>
        ))}
      </div>
    </div>
  </aside>
);

const ProductList = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 p-6">
    {nikeProducts.map((product) => (
      <div key={product.id} className="bg-white p-4 flex flex-col items-center">
        <div className="w-full h-[348px] md:h-[348px] lg:h-[348px] overflow-hidden mb-4">
          <Image
            src={product.imagesUrls}
            alt={product.title}
            width={1000}
            height={100}
            className="object-cover w-full h-full"
          />
        </div>
        <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
          {product.title}
        </h3>
        <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
          {product.color}
        </h3>
        <p className="text-gray-500 text-center">{product.description}</p>
        <p className="text-gray-800 font-medium text-center mt-2">
          {product.price}
        </p>
      </div>
    ))}
  </div>
);

const MainPage = () => (
  <div className="flex flex-col md:flex-row">
    {/* Sidebar on the left */}
    <Sidebar />

    {/* Product List */}
    <div className="w-full md:w-4/5 p-4">
      <ProductList />
    </div>
  </div>
);

export default MainPage;







