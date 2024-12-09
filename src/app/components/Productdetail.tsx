

import { FaCartPlus } from "react-icons/fa"; // Importing the FaCartPlus icon from react-icons
import Image from "next/image";

export default function Productdetail() {
  return (
    <div className="flex justify-between p-5 sm:p-10">
      {/* Left Section with Image */}
      <div className="w-1/2 flex justify-center items-center">
        <Image
          src="/pink.png" // Fixed typo in asset path (changed "assests" to "assets")
          alt="Product"
          className="w-auto h-auto max-w-full max-h-[650px]"
          height={100} // Adjust sizing to fit your layout
          width={1000}
        />
      </div>

      {/* Right Section with Text and Button */}
      <div className="w-1/2 flex justify-center items-start">
        <div className="flex justify-center items-start flex-col gap-3 p-10">
          <h2 className="text-4xl font-bold uppercase text-left">
            Nike Air Force 1 
            PLT.AF.ORM
          </h2>
          <p className="text-sm leading-5 w-[60%] pt-3 pb-2 text-left">
            Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.
          </p>
          {/* Price Text Above Button */}
          <p className="text-2xl font-bold text-left pt-3 pb-2">
            ₹ 8,695.00
          </p>
          {/* Replace Button component with a standard HTML button */}
          <button className="flex items-center   w-[150px] justify-center gap-3 bg-black text-white font-medium py-2 rounded-[30px] hover:bg-gray-700 transition-colors">
            <FaCartPlus 
            className=" inline "/> Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
