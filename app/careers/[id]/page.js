// 'use client';

// import React, { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { toast } from "react-toastify";

// import { SpecificJobAPI } from "@/utils/APICalling";

// export default function SingleJob() {
//   const [jobDetails, setJobDetails] = useState(null);
//   const [loading, setLoading] = useState(true);
  
//   const params = useParams();

//   useEffect(() => {
//     const SingleApi = async () => {
//       try {
//         setLoading(true);
//         const res = await SpecificJobAPI(params.id);
//         setJobDetails(res.data.post);
//       } catch (error) {
//         toast.error("Failed to fetch data. Please try again.");
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     if (params.id) {
//       SingleApi();
//     }
//   }, [params.id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
//           <p className="text-lg">Loading job details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (!jobDetails) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h1 className="text-2xl font-bold text-red-600 mb-4">Job Not Found</h1>
//           <p className="text-lg">The requested job could not be found.</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 py-8">
//       <div className="grid sm:grid-cols-1 md:grid-cols-1 sm:w-[90%] place-items-center mx-auto w-[75%] mb-5 mdl:w-[85%] md:w-[90%]">
//         <div className="m-2 bg-white rounded-lg p-6 shadow-sm">
//           <p className="text-3xl font-semibold text-blue-600">
//             {jobDetails.jobTitle}
//           </p>
//           <p className="text-lg font-medium my-2">
//             Educational and Skills Requirement
//           </p>
//           <p className="">{jobDetails.jobDescription}</p>
//           <ul className="list-disc pl-5 my-2">
//             <li>
//               Education Qualification: {jobDetails.education}
//             </li>
//             <li>
//               Skills Required: {jobDetails.skills}
//             </li>
//           </ul>
//           <p className="text-lg font-medium my-2">Salary</p>
//           <ul className="list-disc pl-5">
//             <li>
//               Salary: {jobDetails.salary} BDT (Depends on Skills and Experience)
//             </li>
//           </ul>
//           <p className="text-lg font-medium my-2">Working Hours</p>
//           <ul className="list-disc pl-5">
//             <li>{jobDetails.workingHours} Per Day</li>
//           </ul>
//           <p className="text-xl font-medium my-2">Working Days</p>
//           <ul className="list-disc pl-5">
//             <li>Weekly: {jobDetails.workingDays} Days</li>
//           </ul>
//         </div>
        
//         <div className="bg-[#EFF1F5] rounded-md mt-6 w-full sm:w-[85%] sm:mt-5 p-5 lg:w-full mdl:w-full md:w-full xl:w-full">
//           <p className="text-center text-blue-600 text-lg font-semibold">
//             Job Summary
//           </p>
//           <div className="grid sm:grid-cols-1 sm:place-items-start grid-cols-3 place-items-center gap-6 mt-5">
//             <div className="flex my-2">
//               <div className="w-[8vh] flex items-center justify-center">
//                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                   <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//               </div>
//               <div className="ml-3">
//                 <p className="text-gray-600">Location</p>
//                 <p>{jobDetails.location}</p>
//               </div>
//             </div>
            
//             <div className="flex my-2">
//               <div className="w-[8vh] flex items-center justify-center">
//                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                   <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//               </div>
//               <div className="ml-3">
//                 <p className="text-gray-600">Job Type</p>
//                 <p>{jobDetails.type}</p>
//               </div>
//             </div>
            
//             <div className="flex my-2">
//               <div className="w-[8vh] flex items-center justify-center">
//                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                   <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//               </div>
//               <div className="ml-3">
//                 <p className="text-gray-600">Experience</p>
//                 <p>{jobDetails.experience} years</p>
//               </div>
//             </div>
            
//             <div className="flex my-2">
//               <div className="w-[8vh] flex items-center justify-center">
//                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                   <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
//                   </svg>
//                 </div>
//               </div>
//               <div className="ml-3">
//                 <p className="text-gray-600">Vacancy</p>
//                 <p>{jobDetails.vacancies}</p>
//               </div>
//             </div>
            
//             <div className="flex my-2">
//               <div className="w-[8vh] flex items-center justify-center">
//                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                   <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
//                   </svg>
//                 </div>
//               </div>
//               <div className="ml-3">
//                 <p className="text-gray-600">Contact</p>
//                 <a 
//                   href={`tel:${jobDetails.contactNumber}`}
//                   className="text-blue-600 hover:underline"
//                 >
//                   {jobDetails.contactNumber}
//                 </a>
//               </div>
//             </div>
            
//             <div className="flex my-2">
//               <div className="w-[8vh] flex items-center justify-center">
//                 <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
//                   <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
//                     <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
//                   </svg>
//                 </div>
//               </div>
//               <div className="ml-3">
//                 <p className="text-gray-600">Mail</p>
//                 <a 
//                   href={`mailto:${jobDetails.contactMail}`}
//                   className="text-blue-600 hover:underline break-all"
//                 >
//                   {jobDetails.contactMail}
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//     </div>
//   );
// }





import ContactForm from "@/app/careers/contact-form";
import { AllJobsAPI, SpecificJobAPI } from "@/utils/APICalling";
import Image from "next/image";

// This MUST be exported for static export to work
export async function generateStaticParams() {
  try {
    console.log('Generating static params...');
    const res = await AllJobsAPI();
    const jobs = res.data.allJobPosts || [];
    
    console.log('Found jobs:', jobs.length);
    
    return jobs.map((job) => ({
      id: job.Id.toString(),
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

// Optional: Generate metadata for each page
// export async function generateMetadata({ params }) {
//   try {
//     const res = await SpecificJobAPI(params.id);
//     const jobDetails = res.data.post;
    
//     return {
//       title: `${jobDetails?.jobTitle || 'Job Details'} | Analogue Careers`,
//       description: `Apply for ${jobDetails?.jobTitle || 'this'} position at Analogue IT Solutions`,
//     };
//   } catch (error) {
//     return {
//       title: 'Job Details | Analogue Careers',
//       description: 'View job details and apply for positions at Analogue IT Solutions',
//     };
//   }
// }

// The main page component
export default async function JobPage({ params }) {
  let jobDetails = null;
  let error = null;

  try {
    const res = await SpecificJobAPI(params.id);
    jobDetails = res.data.post;
  } catch (err) {
    error = err;
  }

  if (error || !jobDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Job Not Found</h1>
          <p className="text-lg">The requested job could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* heading */}
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
                    Apply Now
                  </h1>
                  <p className="text-xs xss:text-xs xs:text-base sm:text-lg text-black leading-loose text-center mt-2 sm:mt-3">
                    Career | Analogue
                  </p>
                </div>
              </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-1 sm:w-[90%] place-items-center mx-auto w-[75%] mb-5 mdl:w-[85%] md:w-[90%]">
        <div className="m-2 bg-white rounded-lg p-6 shadow-sm">
          <p className="text-3xl font-semibold text-blue-600">
            {jobDetails.jobTitle}
          </p>
          <p className="text-lg font-semibold my-2">
            Educational and Skills Requirement
          </p>
          <p className="">{jobDetails.jobDescription}</p>
          <ul className="list-disc pl-5 my-2">
            <li>
              Education Qualification: {jobDetails.education}
            </li>
            <li>
              Skills Required: {jobDetails.skills}
            </li>
          </ul>
          <p className="text-lg font-semibold my-2">Salary</p>
          <ul className="list-disc pl-5">
            <li>
              Salary: {jobDetails.salary} BDT (Depends on Skills and Experience)
            </li>
          </ul>
          <p className="text-lg font-semibold my-2">Working Hours</p>
          <ul className="list-disc pl-5">
            <li>{jobDetails.workingHours} Per Day</li>
          </ul>
          <p className="text-xl font-semibold my-2">Working Days</p>
          <ul className="list-disc pl-5">
            <li>Weekly: {jobDetails.workingDays} Days</li>
          </ul>
        </div>
        
        <div className="bg-[#EFF1F5] rounded-md mt-6 w-full sm:w-[85%] xss:mt-5 lg:p-5 lg:w-full lg:w-full md:w-full xl:w-full">
          <p className="text-center text-blue-600 text-lg font-semibold">
            Job Summary
          </p>
          <div className="grid xss:grid-cols-1 sm:grid-cols-2 xss:items-start xl:grid-cols-3 xl:px-10 xss:place-items-start grid-cols-3 place-items-center gap-1  xl:gap-10 xl:mt-5">
            <div className="flex my-2">
              <div className="w-[8vh] flex items-center justify-center">
                <div className="w-8 h-8 xss:w-10 xss:h-10 2xl:w-20 h-auto rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 xss:w-7 xss:h-7 xl:w-10 xl:h-10 2xl:w-10 2xl:h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-gray-600">Location</p>
                <p>{jobDetails.location}</p>
              </div>
            </div>
            
            <div className="flex my-2">
              <div className="w-[8vh] flex items-center justify-center">
                <div className="w-8 h-8 xss:w-10 xss:h-10 2xl:w-20 h-auto rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 xss:w-7 xss:h-7 xl:w-10 xl:h-10 2xl:w-10 2xl:h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-gray-600">Job Type</p>
                <p>{jobDetails.type}</p>
              </div>
            </div>
            
            <div className="flex my-2">
              <div className="w-[8vh] flex items-center justify-center">
                <div className="w-8 h-8 xss:w-10 xss:h-10 2xl:w-20 h-auto rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 xss:w-7 xss:h-7 xl:w-10 xl:h-10 2xl:w-10 2xl:h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-gray-600">Experience</p>
                <p>{jobDetails.experience} years</p>
              </div>
            </div>
            
            <div className="flex my-2">
              <div className="w-[8vh] flex items-center justify-center">
                <div className="w-8 h-8 xss:w-10 xss:h-10 2xl:w-20 h-auto rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 xss:w-7 xss:h-7 xl:w-10 xl:h-10 2xl:w-10 2xl:h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-gray-600">Vacancy</p>
                <p>{jobDetails.vacancies}</p>
              </div>
            </div>
            
            <div className="flex my-2">
              <div className="w-[8vh] flex items-center justify-center">
                <div className="w-8 h-8 xss:w-10 xss:h-10 2xl:w-20 h-auto rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 xss:w-7 xss:h-7 xl:w-10 xl:h-10 2xl:w-10 2xl:h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-gray-600">Contact</p>
                <a 
                  href={`tel:${jobDetails.contactNumber}`}
                  className="text-blue-600 hover:underline"
                >
                  {jobDetails.contactNumber}
                </a>
              </div>
            </div>
            
            <div className="flex my-2">
              <div className="w-[8vh] flex items-center justify-center">
                <div className="w-8 h-8 xss:w-10 xss:h-10 2xl:w-20 h-auto rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 xss:w-7 xss:h-7 xl:w-10 xl:h-10 2xl:w-10 2xl:h-10 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
              </div>
              <div className="ml-3">
                <p className="text-gray-600">Mail</p>
                <a 
                  href={`mailto:${jobDetails.contactMail}`}
                  className="text-blue-600 hover:underline break-all"
                >
                  {jobDetails.contactMail}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <ContactFormWrapper jobDetails={jobDetails} />
    </div>
  );
}

// Client component wrapper for ContactForm
function ContactFormWrapper({ jobDetails }) {
  return (
    <div className="mt-8">
      <div className="mt-8 max-w-4xl mx-auto">
      <h3 className="text-xl font-semibold text-blue-600 mb-4 text-center">
        Apply for this position
      </h3>
      <ContactForm jobDetails={jobDetails} />
    </div>
    </div>
  );
}