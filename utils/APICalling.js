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
