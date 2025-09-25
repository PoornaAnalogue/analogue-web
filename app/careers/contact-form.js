"use client"
import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { AppingJobAPI } from "@/utils/APICalling";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ApplySchema } from "@/app/careers/validation-schema";

export default function ContactForm({ jobDetails }) {
  if (!jobDetails) {
    return <div className="text-white text-center">Loading...</div>;
  }

  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState();

  const onSubmit = async (values, { resetForm }) => {
    try {
      const res = await AppingJobAPI(values);
      if (res.status === 200) {
        toast.success(res.data.message, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        router.push("/careers");
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
        resetForm();
        document.getElementById("resume").value = "";
      }
    } catch (error) {
      setErrorMessage(error);
      let message = "An error occurred";
      if (error.response) {
        if (error.response.status === 422) {
          message = error.response.data.message;
        }
      } else if (error.request && error.request.status === 0) {
        message = error.request.data.message;
      }
      setErrorMessage(message);
      toast.error(message, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  const {
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    touched,
    errors,
    resetForm,
    handleBlur,
  } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      roleApplyingFor: "",
      resume: "",
      jobPostId: "",
    },
    validationSchema: ApplySchema,
    onSubmit,
  });
  useEffect(() => {
    setFieldValue("roleApplyingFor", jobDetails.jobTitle);
    setFieldValue("jobPostId", jobDetails._id);
  }, [jobDetails, setFieldValue]);

  return (
    <div className="bg-[#0c1836] bg-repeat bg-cover w-[46%] mx-auto rounded-3xl h-fit px-7 sm:w-[90%] lg:w-[60%] xl:w-[70%] md:w-[80%] xl:mb-9">
      <div className="rounded-3xl text-white h-auto p-[5vh] sm:p-[2vh]">
        <h6 className="text-2xl font-medium my-2 sm:text-xl">
          Fill The Contact Form
        </h6>
        <p className="text-gray-300 my-2 sm:text-base">
          Feel free to contact with us, we don&apos;t spam your email
        </p>
        <form onSubmit={handleSubmit} className="space-y-4" autoComplete="off">
  <div className="grid grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 gap-4">
    {/* Row 1: Name and Email */}
    <div className="my-2">
      <label htmlFor="name" className="block text-sm font-medium">
        Your Name *
      </label>
      <input
        type="text"
        name="name"
        id="name"
        value={values.name}
        onChange={(e) => {
          const inputValue = e.target.value;
          const trimmedValue = inputValue.replace(/^\s+/, "");
          handleChange("name")(trimmedValue);
        }}
        onBlur={handleBlur("name")}
        className="w-full bg-transparent border-b border-gray-700 outline-none hover:border-blue-700 text-white focus:border-blue-700 mt-1"
      />
      {touched.name && errors.name && (
        <p className="text-sm text-red-600 mt-1">{errors.name}</p>
      )}
    </div>
    <div className="my-2">
      <label htmlFor="email" className="block text-sm font-medium">
        Your Email *
      </label>
      <input
        type="text"
        name="email"
        id="email"
        value={values.email}
        onChange={(e) => {
          const inputValue = e.target.value;
          const isValidEmail =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/i.test(
              inputValue
            );
          if (
            !inputValue.includes(" ") &&
            (inputValue.length < 4 || !isValidEmail)
          ) {
            handleChange("email")(inputValue);
          } else if (isValidEmail) {
            handleChange("email")(inputValue);
          }
        }}
        onBlur={handleBlur("email")}
        className="w-full bg-transparent border-b border-gray-700 outline-none hover:border-blue-700 text-white focus:border-blue-700 mt-1"
      />
      {touched.email && errors.email && (
        <p className="text-sm text-red-600 mt-1">{errors.email}</p>
      )}
    </div>
    {/* Row 2: Phone Number and Role Applying For */}
    <div className="my-2">
      <label htmlFor="phoneNumber" className="block text-sm font-medium">
        Your Mobile Number *
      </label>
      <input
        type="tel"
        name="phoneNumber"
        id="phoneNumber"
        value={values.phoneNumber}
        onBlur={handleBlur("phoneNumber")}
        onChange={(e) => {
          const newValue = e.target.value.replace(/[^0-9]/g, "");
          if (newValue.length <= 10) {
            handleChange("phoneNumber")(newValue);
          }
        }}
        className="w-full bg-transparent border-b border-gray-700 outline-none hover:border-blue-700 text-white focus:border-blue-700 mt-1"
      />
      {touched.phoneNumber && errors.phoneNumber && (
        <p className="text-sm text-red-600 mt-1">{errors.phoneNumber}</p>
      )}
    </div>
    <div className="my-2">
      <label
        htmlFor="roleApplyingFor"
        className="block text-sm font-medium"
      >
        Role Applying For *
      </label>
      <input
        type="text"
        name="roleApplyingFor"
        id="roleApplyingFor"
        value={values.roleApplyingFor}
        onChange={(e) => handleChange("roleApplyingFor")(e.target.value)}
        readOnly
        className="w-full bg-transparent border-b border-gray-700 outline-none text-gray-600 mt-1"
      />
    </div>
    {/* Row 3: Resume (spanning 2 columns) */}
    <div className="my-2 col-span-2 sm:col-span-1">
      <label htmlFor="resume" className="block text-sm font-medium">
        Upload Resume *
      </label>
      <div className="border-b border-gray-700 hover:border-blue-700 mt-1 ">
        <input
          type="file"
          name="resume"
          id="resume"
          onBlur={handleBlur("resume")}
          onChange={(e) => {
            const file = e.currentTarget.files[0];
            setFieldValue("resume", file);
          }}
          className="my-2 text-white"
        />
      </div>
      {touched.resume && errors.resume && (
        <p className="text-sm text-red-600 mt-1">{errors.resume}</p>
      )}
    </div>
  </div>
  <button
    type="submit"
    className="bg-blue-700 px-10 py-3 font-semibold rounded-3xl hover:bg-blue-800 transition-colors"
  >
    Submit
  </button>
  <input
    type="text"
    name="jobPostId"
    id="jobPostId"
    value={values.jobPostId}
    onChange={(e) => handleChange("jobPostId")(e.target.value)}
    readOnly
    className="hidden"
  />
</form>
      </div>
    </div>
  );
}