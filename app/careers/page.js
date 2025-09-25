// "use client"
// import React, { useEffect, useState } from "react";
// import { useRouter } from "next/router";
// import Head from "next/head";

// import { AllJobsAPI, SingleJobsAPI } from "@/utils/APICalling";
// import { toast } from "react-toastify";

// export default function Career() {
//   const [categoryitems, setCategoryitems] = useState();
//   const [selectedcategory, setSelectedCategory] = useState(null);
//   const [JobItems, setJobItems] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     const API_CAlling = async () => {
//       try {
//         const res = await AllJobsAPI();
//         console.log("here we go", res.data);
//         setCategoryitems(res.data.categoriesWithJobPostCount);
//         setJobItems(res.data.allJobPosts);
//       } catch (error) {
//         toast.error("Failed to fetch data. Please try again.");
//       }
//     };
//     API_CAlling();
//   }, []);

//   const handleSpecificCategory = async (category) => {
//     setSelectedCategory(category);
//     try {
//       const res = await SingleJobsAPI(category);
//       setJobItems(res.data.jobPosts);
//     } catch (error) {
//       toast.error("Failed to fetch data. Please try again.");
//     }
//   };

//   const handleSingleJob = (jobId) => {
//     router.push(`/careers/${jobId}`);
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <>
//       <Head>
//         <title>Careers | Analogue</title>
//       </Head>
      
//       <div className="text-center">
//         <h1 className="text-sm">COME JOIN US</h1>
//         <h1 className="my-2 text-3xl text-blue-600 font-bold ">
//           Career Openings
//         </h1>
//         <p className="m-3 mx-auto px-5 2xl:w-[30%] font-sans ">
//           We're always looking for creative, talented self- starters to join the
//           AITS family. Check out our open roles below and fill out an
//           application.
//         </p>
//       </div>

//       <div className="grid grid-cols-4 mx-6 sm:grid-cols-1 md:grid-cols-1 xl:mx-[15%] 2xl:mx-[15%] mb-5 ">
//         <div className="">
//           <h1 className="sm:text-center underline font-bold text-lg">
//             Category
//           </h1>
//           <ul className="sm:flex sm:flex-wrap sm:justify-between md:grid md:py-2 md:grid-cols-5  2xl:ml-1">
//             {categoryitems &&
//               categoryitems.map((items, index) => {
//                 return (
//                   <li
//                     key={index}
//                     className={`sm:m-2 sm:p-2 hover:sm-border-b hover:sm-border-blue-500 2xl:p-1 xl:mr-6 2xl:mr-6  hover:text-blue-600 cursor-pointer ${
//                       selectedcategory === items.category
//                         ? "text-blue-800 font-semibold"
//                         : "text-black"
//                     }`}
//                   >
//                     <div>
//                       <a
//                         className=" "
//                         onClick={() => handleSpecificCategory(items.category)}
//                       >
//                         {items.category} ({items.jobPostCount})
//                       </a>
//                     </div>
//                   </li>
//                 );
//               })}
//           </ul>
//         </div>

//         <div className="col-span-3">
//           <h1 className="sm:pl-5 sm:underline">All Jobs</h1>
//           {JobItems &&
//             JobItems.map((items, index) => {
//               return (
//                 <a
//                   className="flex justify-between items-center my-2 border p-2 sm:mx-3 md:mx-0 hover:bg-gray-50 cursor-pointer"
//                   onClick={() => handleSingleJob(items.Id)}
//                   key={index}
//                 >
//                   <div className="w-auto md:w-[40%] mdl:w-[40%] lg:w-[40%] xl:w-[40%] 2xl:w-[40%] 3xl:w-[40%] ">
//                     <h5 className="sm:text-sm 2xl:text-lg sm:text-left font-semibold md:w-auto sm:w-[18vh]">
//                       {items.jobTitle}
//                     </h5>
//                   </div>
//                   <div>
//                     <div className="text-gray-500 sm:text-sm sm:text-left">
//                       Experience
//                     </div>
//                     <h6 className="font-semibold sm:text-sm sm:text-left">
//                       {items.experience} Years
//                     </h6>
//                   </div>
//                   <button
//                     className="px-4 sm:px-2 sm:p-1  sm:text-sm rounded-full bg-blue-600 p-2 text-white"
//                     onClick={() => handleSingleJob(items.Id)}
//                   >
//                     Apply
//                   </button>
//                 </a>
//               );
//             })}
//         </div>
//       </div>

//     </>
//   );
// }

"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";

import { AllJobsAPI, SingleJobsAPI } from "@/utils/APICalling";
import { toast } from "react-toastify";

export default function Career() {
  const [categoryitems, setCategoryitems] = useState();
  const [selectedcategory, setSelectedCategory] = useState(null);
  const [JobItems, setJobItems] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const API_CAlling = async () => {
      try {
        const res = await AllJobsAPI();
        console.log("here we go", res.data);
        setCategoryitems(res.data.categoriesWithJobPostCount);
        setJobItems(res.data.allJobPosts);
      } catch (error) {
        toast.error("Failed to fetch data. Please try again.");
      }
    };
    API_CAlling();
  }, []);

  const handleSpecificCategory = async (category) => {
    setSelectedCategory(category);
    try {
      const res = await SingleJobsAPI(category);
      setJobItems(res.data.jobPosts);
    } catch (error) {
      toast.error("Failed to fetch data. Please try again.");
    }
  };

  const handleSingleJob = (jobId) => {
    router.push(`/careers/${jobId}`);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>Careers | Analogue</title>
      </Head>

      {/* heading section */}
           <div className="relative flex justify-center w-full bg-white">
                     <Image
                       src="/AbstractDesign.png"
                       width={480}
                       height={180}
                       alt="Abstract design background"
                       className="object-contain w-full h-auto max-w-[300px] xss:max-w-[320px] xs:max-w-[360px] sm:max-w-[480px] md:max-w-[550px] "
                       sizes="(max-width: 320px) 300px, (max-width: 360px) 320px, (max-width: 480px) 360px, (max-width: 640px) 450px, (max-width: 768px) 640px, 768px"
                     />
                     <div className="absolute top-12 xss:top-10 xs:top-10 sm:top-20 md:top-15 bg-white px-4">
                       <h1 className="text-xl xss:text-2xl xs:text-3xl sm:text-4xl md:text-[2.5rem] font-bold text-violet-950 text-center">
                         Careers
                       </h1>
                       <p className="text-xs xss:text-xs xs:text-base sm:text-lg 2xl:text-sm text-black leading-loose text-center mt-2 sm:mt-3">
                         COME JOIN US
                       </p>
                     </div>
                   </div>

      <div className="text-center">
        <h1 className="my-2 text-3xl text-blue-600 font-bold ">
          Career Openings
        </h1>
        <p className="m-3 mx-auto px-5 ">
          We're always looking for creative, talented self- starters to join the
          AITS family. Check out our open roles below and fill out an
          application.
        </p>
      </div>

      <div className="grid py-18 grid-cols-4 mx-6 sm:grid-cols-1 md:grid-cols-1 xl:grid-cols-4 xl:mx-[15%] 2xl:mx-[10%] mb-5 ">
        <div className="">
  <h1 className="sm:text-left underline font-bold text-lg ">
    Category
  </h1>
  <ul className="sm:flex sm:flex-wrap sm:justify-between md:grid md:py-2 xl:py-0 md:grid-cols-5 xl:grid-cols-1">
    {categoryitems &&
      categoryitems.map((items, index) => {
        return (
          <li
            key={index}
            className={`sm:m-2 sm:p-2 xl:m-0 xl:p-0 hover:sm:border-blue-500 2xl:p-1 xl:mr-6 2xl:mr-6 hover:text-blue-600 cursor-pointer ${
              selectedcategory === items.category
                ? "text-blue-800 font-semibold"
                : "text-black"
            }`}
          >
            <div className="">
              <a
                className=""
                onClick={() => handleSpecificCategory(items.category)}
              >
                {items.category} ({items.jobPostCount})
              </a>
            </div>
          </li>
        );
      })}
  </ul>
</div>

        <div className="col-span-3">
          <h1 className="sm:pl-2 font-semibold">All Jobs</h1>
          {JobItems &&
            JobItems.map((items, index) => {
              return (
                <a
                  className="flex justify-between items-center my-2 border border-gray-300 rounded-md p-2 sm:mx-3 md:mx-0 hover:bg-blue-50 cursor-pointer"
                  onClick={() => handleSingleJob(items.Id)}
                  key={index}
                >
                  <div className="w-auto md:w-[40%] mdl:w-[40%] lg:w-[40%] xl:w-[40%] 2xl:w-[40%] 3xl:w-[40%] ">
                    <h5 className="sm:text-sm 2xl:text-lg sm:text-left font-semibold md:w-auto sm:w-[18vh]">
                      {items.jobTitle}
                    </h5>
                  </div>
                  <div>
                    <div className="text-gray-500 sm:text-sm sm:text-left">
                      Experience
                    </div>
                    <h6 className="font-semibold sm:text-sm xl:text-[1rem] sm:text-left">
                      {items.experience} Years
                    </h6>
                  </div>
                  <button
                    className="px-4 sm:px-2 sm:p-1 xl:px-5 xl:py-2 sm:text-sm rounded-3xl bg-blue-600 p-2 text-white"
                    onClick={() => handleSingleJob(items.Id)}
                  >
                    Apply
                  </button>
                </a>
              );
            })}
        </div>
      </div>

    </>
  );
}
