


// const BestAir: React.FC = () => {
//   return (
//     <div>
//       <div className="flex justify-between items-center py-5">
//         {/* Title */}
//         <h1 className="font-semibold md:text-xl sm:text-2xl lg:text-3xl text-center">
//           Best of Air Max
//         </h1>

//         {/* Carousel Controls (just placeholders for now) */}
//         <div className="flex space-x-4">
//           {/* Left Carousel Button */}
//           <h3 className="text-black text-xl font-semibold">Shop</h3>
//           <button className="bg-gray-300 p-2 rounded-full">
//             &#8592; {/* Left arrow icon */}
//           </button>

//           {/* Right Carousel Button */}
//           <button className="bg-gray-300 p-2 rounded-full">
//             &#8594; {/* Right arrow icon */}
//           </button>
//         </div>
//       </div>

//       {/* Grid of Images */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {/* Image 1 with Button */}
//         <div
//           className="relative bg-cover bg-center bg-no-repeat lg:h-[510.36px] lg:w-[441.36px] h-[300px] sm:h-[400px]"
//           style={{ backgroundImage: "url('/shoe1.png')" }}
//         ></div>

//         {/* Image 2 */}
//         <div
//           className="bg-cover bg-center bg-no-repeat lg:h-[510.36px] lg:w-[441.36px] h-[300px] sm:h-[400px]"
//           style={{ backgroundImage: "url('/shoe1.png')" }}
//         ></div>

//         {/* Image 3 with Button */}
//         <div
//           className="relative bg-cover bg-center bg-no-repeat lg:h-[510.36px] lg:w-[441.36px] h-[300px] sm:h-[400px]"
//           style={{ backgroundImage: "url('/shoe2.png')" }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default BestAir;


const BestAir: React.FC = () => {
  return (
    <div>
      <div className="flex justify-between items-center py-5">
        {/* Title */}
        <h1 className="font-semibold md:text-xl sm:text-2xl lg:text-3xl text-center">
          Best of Air Max
        </h1>

        {/* Carousel Controls (just placeholders for now) */}
        <div className="flex space-x-4">
          {/* Left Carousel Button */}
          <h3 className="text-black text-xl font-semibold">Shop</h3>
          <button className="bg-gray-300 p-2 rounded-full">
            &#8592; {/* Left arrow icon */}
          </button>

          {/* Right Carousel Button */}
          <button className="bg-gray-300 p-2 rounded-full">
            &#8594; {/* Right arrow icon */}
          </button>
        </div>
      </div>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Image 1 */}
        <div
          className="relative bg-cover bg-center bg-no-repeat lg:h-[510.36px] sm:h-[400px] h-[300px]"
          style={{ backgroundImage: "url('/shoe1.png')" }}
        ></div>

        {/* Image 2 */}
        <div
          className="relative bg-cover bg-center bg-no-repeat lg:h-[510.36px] sm:h-[400px] h-[300px]"
          style={{ backgroundImage: "url('/shoe1.png')" }}
        ></div>

        {/* Image 3 */}
        <div
          className="relative bg-cover bg-center bg-no-repeat lg:h-[510.36px] sm:h-[400px] h-[300px]"
          style={{ backgroundImage: "url('/shoe2.png')" }}
        ></div>

      
</div>
</div>
    
  );
};

export default BestAir;
