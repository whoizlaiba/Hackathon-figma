import React from "react";
import Image from "next/image";
const Join: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white px-4 w-full h-fit">
      <div className="bg-white w-full max-w-md p-6 rounded-lg ">
        <div className="text-center mb-6">
          <Image
            src="/logo.png"
            alt="Nike Logo"
            height={100}
            width={100}
            className="w-12 mx-auto"
          />
          <h1 className="text-xl font-bold mt-2">BECOME A NIKE MEMBER</h1>
          <p className="text-sm text-gray-600 mt-2">
            Create your Nike Member profile and get<br></br> first access to the very
            best of Nike <br></br>products, inspiration, and community.
          </p>
        </div>
        <form>
          <div className="space-y-4">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <input
              type="date"
              placeholder="Date of Birth"
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
            <p className="text-sm text-gray-500">
              Get a Nike Member Reward every year on your Birthday.
            </p>
            <select
              className="w-full px-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-600"
              defaultValue="India"
            >
              <option>India</option>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Australia</option>
            </select>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="mr-2"
                />
                Female
              </label>
            </div>
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Sign up for emails to get updates from Nike on products, offers,
              and your Member benefits.
            </label>
            <p className="text-xs text-gray-500 text-center mt-2">
              By creating an account, you agree to Nike&#39;s
              <a href="#" className="underline text-gray-600">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className="underline text-gray-600">
                Terms of Use
              </a>
              .
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white py-2 mt-4 rounded-md hover:bg-gray-600 focus:outline-none"
          >
            JOIN US
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already a Member?{" "}
          <a href="#" className="text-black underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default Join;