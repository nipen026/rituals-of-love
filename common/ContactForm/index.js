import Image from "next/image";
import { FaRegCircle } from "react-icons/fa";
import * as Yup from "yup";
import { Formik, Field, Form, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

const ContactForm = () => {
  const [loading,setLoading] = useState(false)
  const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    contactNumber: Yup.string()
      .matches(/^[0-9]+$/, "Contact Number must be a number")
      .required("Contact Number is required"),
    weddingDate:Yup.string().required("Wedding Date is required"),
    address: Yup.string().required("Address is required"),
    plan: Yup.string().required("Please select a plan"),
  });

  console.log(process.env.NEXT_PUBLIC_BASE_URL);
  const handleSubmit = (values) => {
    setLoading(true)
    axios
      .post(`${baseURL}/api/inquiries`, values)
      .then((res) => {
        console.log(res);
        if (res.status === 201) {
          setLoading(false);
          toast.success("We Will Contact Soon !!");
          setTimeout(() => {
            window.location.reload();
          }, [2000]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    // Here you can send data to the server or perform other actions
  };
  return (
    <>
      <div className="py-[50px] relative">
        <Toaster />
        <div className="absolute bottom-0 h-auto max-lg:z-[100] max-lg:w-[300px] max-[562px]:hidden">
          <Image
            src={"/assets/images/footer-1.png"}
            alt="footer-1"
            width={350}
            height={350}
            className="object-cover max-lg:w-full"
          />
        </div>
        <div className="absolute top-[50px] max-xl:right-[100px] right-[170px] h-auto max-[562px]:hidden">
          <Image
            src={"/assets/images/footer-2.png"}
            alt="footer-1"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <div className="contact-form ">
          <div className="bg-white h-full py-5">
            <div>
              <div className="">
                <div className="flex justify-center">
                  <Image
                    src={"/assets/images/footer-title-image.png"}
                    className=""
                    width={100}
                    height={100}
                    alt="footer-title"
                  />
                </div>
                <h2 className="text-[40px] max-[1024px]:text-[32px] text-center py-5 font-bold text-[#002642]">
                  CONTACT US
                </h2>
              </div>
              <div className="flex pb-5 justify-center text-[#002642] items-center gap-[30px]">
                <div className="w-[100px] max-[1024px]:w-[50px] h-[1px] bg-[#738ea5]"></div>
                <div>
                  <FaRegCircle />
                </div>
                <div className="w-[100px] max-[1024px]:w-[50px] h-[1px] bg-[#738ea5]"></div>
              </div>
            </div>
            {/* <div className="container">
              <div className="relative pb-4">
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  class="w-full bg-transparent bg-opacity-50 border-b-2 border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative pb-4">
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  class="w-full bg-transparent bg-opacity-50 border-b-2 border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative pb-4">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="your@example.com"
                  class="w-full bg-transparent bg-opacity-50 border-b-2 border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative pb-4">
                <input
                  type="text"
                  id="contactNumber"
                  name="contactNumber"
                  placeholder="Contact Number"
                  class="w-full bg-transparent bg-opacity-50 border-b-2 border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="relative pb-4">
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="Block No. , Area , City , State , Country"
                  class="w-full bg-transparent bg-transparent border-b-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div class="mb-4">
                <label
                  for="plans"
                  class="block text-gray-700 text-sm font-bold mb-2"
                >
                  Select Plan:
                </label>
                <select
                  id="plans"
                  name="plans"
                  class="w-full bg-transparent bg-opacity-50 border-b-2 border-gray-300  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                >
                  <option value="basic">Basic</option>
                  <option value="premium">Advance</option>
                  <option value="destination">Luxury</option>
                </select>
              </div>
              <div class="flex items-center justify-center pt-3">
                <button
                style={{transition:'all 0.5s'}}
                  class="bg-[#86a0b6] hover:bg-[#002642] text-white font-bold py-[15px] px-[40px]  focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </div> */}
            <Formik
              initialValues={{
                firstName: "",
                lastName: "",
                email: "",
                contactNumber: "",
                weddingDate:"",
                address: "",
                plan: "",
              }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="container">
                <div className="relative pb-4">
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="First Name"
                    className="w-full bg-transparent bg-opacity-50 border-b-2 border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="relative pb-4">
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Last Name"
                    className="w-full bg-transparent bg-opacity-50 border-b-2 border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="relative pb-4">
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    placeholder="your@example.com"
                    className="w-full bg-transparent bg-opacity-50 border-b-2 border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="relative pb-4">
                  <Field
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    placeholder="Contact Number"
                    className="w-full bg-transparent bg-opacity-50 border-b-2 border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="contactNumber"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="relative pb-4">
                <label
                    htmlFor="plan"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Wedding Date:
                  </label>
                  <Field
                    type="date"
                    id="weddingDate"
                    name="weddingDate"
                    placeholder="Wedding Date"
                    className="w-full bg-transparent bg-opacity-50 border-b-2 border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="weddingDate"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="relative pb-4">
                  <Field
                    type="text"
                    id="address"
                    name="address"
                    placeholder="Block No., Area, City, State, Country"
                    className="w-full bg-transparent bg-opacity-50 border-b-2 border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <ErrorMessage
                    name="address"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="plan"
                    className="block text-gray-700 text-sm font-bold mb-2"
                  >
                    Select Plans:
                  </label>
                  <Field
                    as="select"
                    id="plan"
                    name="plan"
                    className="w-full bg-transparent bg-opacity-50 border-b-2 border-gray-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  >
                    <option value="">Select a plan</option>
                    <option value="Basic">Basic Plan</option>
                    <option value="Premium">Standard Plan</option>
                    <option value="Destination">Luxury Plan</option>
                  </Field>
                  <ErrorMessage
                    name="plans"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="flex items-center justify-center pt-3">
                  <button
                  disabled={loading === true}
                    // onClick={()=>{setLoading(true)}}
                    style={{ transition: "all 0.5s" }}
                    className={loading ? "Submit-btn btn--loading  hover:bg-[#fff] hover:text-[#002642] hover:border-[#002642] border-2 hover:rounded-lg bg-[#002642] text-white font-bold py-[15px] px-[40px] focus:outline-none focus:shadow-outline" : "Submit-btn  hover:bg-[#fff] hover:text-[#002642] hover:border-[#002642] border-2 hover:rounded-lg bg-[#002642] text-white font-bold py-[15px] px-[40px] focus:outline-none focus:shadow-outline"}
                    type="submit"
                  >
                    Submit
                    <span>
                      <b></b>
                      <b></b>
                      <b></b>
                    </span>
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
