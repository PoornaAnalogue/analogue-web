// import axios from "axios";

// export const BASE_URL = "https://carrer.analogueitsolutions.com";

// // ✅ Quotation API
// export const TestForm = async (values) => {
//   try {
//     const formData = new FormData();
//     formData.append("name", values.name);
//     formData.append("email", values.email);
//     formData.append("phoneNumber", values.phoneNumber);
//     formData.append("subject", values.subject);
//     formData.append("reachUs", values.reachUs);
//     formData.append("message", values.message);

//     const response = await axios.post(`${BASE_URL}/quote`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("❌ Error in TestForm:", error.response?.data || error);
//     throw error;
//   }
// };

// // ✅ Fetch specific job by ID
// export const SingleJobsAPI = async (jobID) => {
//   try {
//     const response = await axios.get(`${BASE_URL}/singlejob/${jobID}`);
//     return response.data;
//   } catch (error) {
//     console.error("❌ Error in SpecificJobAPI:", error.response?.data || error);
//     throw error;
//   }
// };

// // ✅ Apply for a job
// export const AllJobsAPI = async (values) => {
//   try {
//     const formData = new FormData();
//     formData.append("name", values.name);
//     formData.append("email", values.email);
//     formData.append("phoneNumber", values.phoneNumber);
//     formData.append("roleApplyingFor", values.roleApplyingFor);
//     formData.append("jobPostId", values.jobPostId);
//     formData.append("resume", values.resume);

//     const response = await axios.post(`${BASE_URL}/job`, formData, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("❌ Error in AppingJobAPI:", error.response?.data || error);
//     throw error;
//   }
// };

import axios from "axios";

export const BASE_URL = "https://carrer.analogueitsolutions.com";

// ✅ Quotation API
export const TestForm = async (values) => {
  try {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phoneNumber", values.phoneNumber);
    formData.append("subject", values.subject);
    formData.append("reachUs", values.reachUs);
    formData.append("message", values.message);

    const response = await axios.post(`${BASE_URL}/quote`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (error) {
    console.error("❌ Error in TestForm:", error.response?.data || error);
    throw error;
  }
};

// ✅ CAREER ENDPOINTS - Properly organized

// Fetch all jobs and categories (for career page)
export const AllJobsAPI = async () => {
  return await axios.get(`https://carrer.analogueitsolutions.com/career`);
};

// Fetch jobs by specific category
export const SingleJobsAPI = async (category) => {
  return await axios.get(`${BASE_URL}/job/${category}`);
};

// Fetch specific job by ID
export const SpecificJobAPI = async (jobID) => {
  return await axios.get(`${BASE_URL}/singlejob/${jobID}`);
};

// Apply for a job
export const AppingJobAPI = async (values) => {
  const formData = new FormData();
  formData.append("name", values.name);
  formData.append("email", values.email);
  formData.append("phoneNumber", values.phoneNumber);
  formData.append("roleApplyingFor", values.roleApplyingFor);
  formData.append("jobPostId", values.jobPostId);
  formData.append("resume", values.resume);

  return await axios.post(`${BASE_URL}/job`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

// Audit Report API
export const AduitReport = async (values) => {
  return await axios.post(`${BASE_URL}/audit`, values);
};

// Get Quotation API
export const GetQuotation = async (values) => {
  return await axios.post(`${BASE_URL}/quote`, values);
};

// HelloLeads API
export const HelloLeadsAPI = async (values, countryCode) => {
  const { dialCode } = countryCode;
  const dialCodePrefix = `+${dialCode}`;

  const mobileNumber = values.phoneNumber.slice(dialCode.length);

  const NeedTOPass = {
    first_name: values.name,
    email: values.email,
    country: countryCode.name,
    mobile_code: dialCodePrefix,
    mobile: mobileNumber,
    interests: values.subject,
    tags: values.reachUs,
    notes: values.message,
    list_key: "67f806860ee44bb48da646e6a6e3992c",
  };

  const url = "https://app.helloleads.io/index.php/private/api/leads";

  const headers = {
    "hls-key": "1a4e79173f88f23a5068659de80fffea",
    Xemail: "digital.analouge1@gmail.com",
  };

  try {
    const response = await axios.post(url, NeedTOPass, { headers });
    return response.data;
  } catch (error) {
    console.error("Error while fetching quotation:", error);
    throw error;
  }
};