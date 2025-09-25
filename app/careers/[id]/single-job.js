
// import { AllJobsAPI } from "@/utils/APICalling";
// import SingleJob from "./SingleJob";

// // Required for static export with dynamic routes
// export async function generateStaticParams() {
//   try {
//     // Fetch all jobs to get their IDs
//     const res = await AllJobsAPI();
//     const jobs = res.data.allJobPosts || [];
    
//     // Return array of params for each job
//     return jobs.map((job) => ({
//       id: job.Id.toString(),
//     }));
//   } catch (error) {
//     console.error('Error generating static params:', error);
//     // Return empty array if API fails
//     return [];
//   }
// }

// // Generate metadata for each page
// export async function generateMetadata({ params }) {
//   try {
//     const { SpecificJobAPI } = await import("@/utils/APICalling");
//     const res = await SpecificJobAPI(params.id);
//     const jobDetails = res.data.post;
    
//     return {
//       title: `${jobDetails.jobTitle} | Analogue Careers`,
//       description: `Apply for ${jobDetails.jobTitle} position at Analogue IT Solutions`,
//     };
//   } catch (error) {
//     return {
//       title: 'Job Details | Analogue Careers',
//       description: 'View job details and apply for positions at Analogue IT Solutions',
//     };
//   }
// }

// export default function Page() {
//   return <SingleJob />;
// }