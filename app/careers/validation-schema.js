import { object, string, mixed } from "yup";
import   "yup-phone-lite";

export const ApplySchema = object().shape({
  name: string().required("Name is required"),
  email: string()
    .email("Invalid email address")
    .required("Email is required"),
  phoneNumber: string()
    .required("Mobile number is required")
    .phone("IN", "Mobile number must be a valid 10-digit number")
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
  roleApplyingFor: string().required("Role is required"),
  resume: mixed()
    .required("File is required")
    .test(
      "fileType",
      "Unsupported file format. Upload only PDF format",
      (value) => value && value.type === "application/pdf"
    )
    .test(
      "fileSize",
      "File too large. Upload less than 10MB",
      (value) => value && value.size <= 10 * 1024 * 1024 // 10MB limit
    ),
  jobPostId: string().required(),
});

export const getAuditReport = object().shape({
  websiteUrl: string()
    .url("Please enter a valid URL")
    .required("Website URL is required"),
  phoneNumber: string()
    .required("Mobile number is required")
    .phone("IN", "Mobile number must be a valid 10-digit number")
    .matches(/^[0-9]{10}$/, "Mobile number must be 10 digits"),
});

const phoneSchema = () =>
  string().phone(null, "Mobile number must be between 8 and 18 digits").required("Mobile number is required");

export const getQuote = (country) =>
  object().shape({
    name: string()
      .test(
        "no-leading-spaces",
        "Name cannot start with a space",
        (value) => value && value.trimStart() === value
      )
      .required("Name is required"),
    email: string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: phoneSchema().matches(/^\d{8,18}$/, "Mobile number is invalid"),
    subject: string().required("Subject is required"),
    reachUs: string()
      .oneOf(
        ["google", "facebook", "instagram", "linkdin", "googlemap", "others"],
        "Select a valid option to reach us"
      )
      .required("Please select the field"),
    message: string()
      .min(10, "Message must be at least 10 characters long")
      .required("Message is required"),
  });