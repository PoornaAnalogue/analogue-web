// pages/index.js
"use client";

import { useState } from "react";
// import { blogsdata } from '../data/blogsdata';
import Link from "next/link";
import Image from "next/image";

const BlogCard = ({ title, description, imageUrl, date, author, slug }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="  max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden  hover:shadow-lg transition-shadow duration-300  ">
      <div
        className="relative py-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Image
          src={imageUrl}
          width={200}
          height={150}
          alt={title}
          className={` w-full h-70  transition-transform duration-300 object-contain ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
      </div>

      <div className="p-3 px-6 flex w-full">
        <div className="">
          <h3 className="text-gray-800 text-lg xss:text-sm  sm:text-base md:text-lg 2xl:text-[1.1rem] leading-5 font-medium mb-2">
            {title}
          </h3>
          <p className="text-gray-600 text-xs xss:text-xs sm:text-sm lg:text-subbody 3xl:text-base mb-4 leading-5 ">
            {description}
          </p>
          <div className="flex items-center text-gray-500 text-xs mb-4">
            <span className="mr-2">📅 {date}</span>
            <span>👤 {author}</span>
          </div>
        </div>
        <div className="w-[300px] flex items-center justify-end ">
          <Link href={`/blog/${slug}`}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default BlogCard;
