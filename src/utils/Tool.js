import axios from "axios";

export const HelloLeadsAPI = async (values, countryCode) => {
  const { dialCode } = countryCode;
  const dialCodePrefix = `+${dialCode}`;

const cleanPhone = values.phoneNumber.replace("+", "");
const mobileNumber = cleanPhone.slice(dialCode.length);

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

  return await axios.post(url, NeedTOPass, { headers });
};
