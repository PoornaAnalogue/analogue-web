'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Responsive_ProductsPage() {
  const router = useRouter();
  const cards = [
    {
      title: "Mahaboob",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg14.png",
      bgColor:"bg-[#E67E20]",
      link: "/mahaboob",
      objectfit : "",
      width: 350
    },
    {
      title: "Allonzy",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg13.png",
      bgColor: "bg-[#44689C]",
      link: "/allonzy",
      objectfit : "",
      width: 350
    },
    {
      title: "Cake Factory",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg12.png",
      bgColor: "bg-[#E6C1D3]",
      link: "/cakefactory",
      objectfit : "",
      width: 350
    },
    {
      title: "Flythru",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg11.png",
      bgColor:"bg-[#164E8E]",
      link: "/mahaboob",
      objectfit : "",
      width: 350
    },
    {
      title: "Care Credle",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg10.png",
      bgColor: "bg-[#6169FF]  ",
      link: "/allonzy",
      objectfit : "object-contain",
      width: 250,
      paddingy : "pt-8",
      res_size : "xss:pl-13"
    },
    {
      title: "My Flat info",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg9.png",
      bgColor: "bg-[#283E71]",
      link: "/cakefactory",
      objectfit : "object-contain",
      width: 250,
      paddingy : "pt-8",
      res_size : "xss:pl-13"
    },
    {
      title: "Yaarishhh",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg8.png",
      bgColor:"bg-[#2A9D8F]",
      link: "/mahaboob",
      objectfit : "object-contain",
      width: 250,
      paddingy : "pt-8",
      res_size : "xss:pl-13"
    },
    {
      title: "Giftyu",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg7.png",
      bgColor: "bg-[#FF6757]",
      link: "/allonzy",
      objectfit : "object-contain",
      width: 350,
      paddingy : "py-7"
    },
    {
      title: "Buykeyz",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg6.png",
      bgColor: "bg-[#3AA9FF]",
      link: "/cakefactory",
      objectfit : "object-contain",
      width: 250,
      paddingy : "pt-8",
      res_size : "xss:pl-13"
    },
    {
      title: "Cinepass",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg5.png",
      bgColor:"bg-[#FFB300]",
      link: "/mahaboob",
      objectfit : "",
      width: 350
    },
    {
      title: "TGNPDCL",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg4.png",
      bgColor: "bg-[#2023BA]",
      link: "/allonzy",
      objectfit : "object-contain",
      width: 250,
      paddingy : "pt-8",
      res_size : "xss:pl-13"
    },
    {
      title: "Poshana",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg3.png",
      bgColor: "bg-[#007A8F]",
      link: "/cakefactory",
      objectfit : "object-contain",
      width: 250,
      paddingy : "pt-8",
      res_size : "xss:pl-13"
    },
    {
      title: "Healr",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg2.svg",
      bgColor:"bg-[#2EDED3]",
      link: "/mahaboob",
      objectfit : "object-cover",
      width: 350,
    },
    {
      title: "Naukari",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg1.png",
      bgColor: "bg-[#E1DBFF]",
      link: "/allonzy",
      objectfit : "",
      width: 350
    },
    {
      title: "Intellect Ignite",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg18.png",
      bgColor: "bg-[#114465]",
      link: "/cakefactory",
      objectfit : "",
      width: 350
    },
    {
      title: "Gavathi Party",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg17.png",
      bgColor:"bg-[#E31E25]",
      link: "/mahaboob",
      objectfit : "object-contain",
      width: 350,
      paddingy : "py-7"
    },
    {
      title: "Zipik",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg16.png",
      bgColor: "bg-[#788F55]",
      link: "/allonzy",
      objectfit : "object-contain",
      width: 350,
      paddingy : "py-7"
    },
    {
      title: "JSE",
      description: "E-commerce App and Static Website",
      image: "/Product-Images/ProductImg15.png",
      bgColor: "bg-[#E2B35B]",
      link: "/cakefactory",
      objectfit : "",
      width: 350
    }
 ];

  const handleClick = (link) => {
    router.push(link);
  };

  return (

    <div className='w-full h-full bg-white'>
    
        <div className="relative flex justify-center w-full bg-white ">
                                  <Image
                                    src="/AdobeTech-Images/Abstract Design.svg"
                                    width={480}
                                    height={180}
                                    alt="Abstract design background"
                                    className="object-contain w-full h-auto max-w-[300px] xss:max-w-[320px] xs:max-w-[360px] sm:max-w-[450px] "
                                    sizes="(max-width: 320px) 300px, (max-width: 360px) 320px, (max-width: 480px) 360px, (max-width: 640px) 450px, (max-width: 768px) 640px, 768px"
                                  />
                                  <div className="absolute top-12 xss:top-10 xs:top-11 sm:top-14 md:top-15 bg-white px-4">
                                    <h1 className="text-xl xss:text-2xl  sm:text-[1.7rem] md:text-[2rem] font-bold text-violet-950 text-center">
                                      Our Products
                                    </h1>
                                    <p className="text-xs xss:text-xs md:text-sm text-black leading-loose text-center  sm:mt-2">
                                      Stories of success
                                    </p>
                                  </div>
        </div>
                    
        <div className="flex justify-center items-center min-h-screen bg-white">
            <div className=" grid grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-8 lg:gap-10  xl:gap-10 2xl:gap-12 3xl:gap-20 xss:m-10 xs:mx-15 sm:mx-25 md:mx-10 lg:mx-20 md:mx-7 xl:mx-13 2xl:mx-19 3xl:mx-40 ">
            {cards.map((card, index) => (
          <div
            key={index}
            className="rounded-xl bg-white shadow-lg  transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => handleClick(card.link)}
          >
            <div className="flex flex-col items-center">
              <div className={`${card.bgColor} rounded-t-3xl flex xs:justify-center justify-end items-center     w-full`}>
                <Image
                  src={card.image}
                  alt={card.title}
                  width={card.width}
                  height={160}
                  className={`h-80 xss:h-45 sm:h-55  xl:h-60 2xl:h-65 ${card.res_size}  ${card.paddingy}  transition-opacity duration-300 hover:opacity-90  ${card.objectfit}`}
                />
              </div>
              <div className="mx-4 mb-2 text-start flex gap-5 p-2  justify-center items-center w-full">
                <div className="flex-1 ">
                  <p className="xss:text-sm sm:text-subbody lg:text-base 3xl:text-base font-bold ml-2 sm:ml-4 text-gray-800  underline decoration-blue-500 underline-offset-9 pb-2 2xl:ml-6">
                    {card.title}
                  </p>
                  <p className="text-gray-600 text-xs xss:text-xs sm:text-sm lg:text-sm 3xl:text-base text-center xss:ml-1 md:ml-2 ">{card.description}</p>
                </div>
                <div className="flex items-center p-3 justify-center w-10 h-10 rounded-full bg-black transition-transform duration-300 hover:translate-x-1">
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d=    "M5 19l14-14M14 5h5v5"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}