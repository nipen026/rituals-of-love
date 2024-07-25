import Image from "next/image";
import { FaRegCircle } from "react-icons/fa";

const ContactForm = () => {
  return (
    <>
      <div className="py-[50px] relative">
        <div className="absolute bottom-0 h-auto">
            <Image src={'/assets/images/footer-1.png'} alt="footer-1" width={350} height={350} className="object-cover"/>
        </div>
        <div className="absolute top-[50px] right-[170px] h-auto">
            <Image src={'/assets/images/footer-2.png'} alt="footer-1" width={200} height={200} className="object-cover"/>
        </div>
        <div className="contact-form">
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
                <h2 className="text-[40px] text-center py-5 font-bold text-[#002642]">
                  CONTACT US
                </h2>
              </div>
              <div className="flex pb-5 justify-center text-[#002642] items-center gap-[30px]">
                <div className="w-[100px] h-[1px] bg-[#738ea5]"></div>
                <div>
                  <FaRegCircle />
                </div>
                <div className="w-[100px] h-[1px] bg-[#738ea5]"></div>
              </div>
            </div>
            <div className="container">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
