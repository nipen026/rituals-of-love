import { MdEmail } from "react-icons/md";
import { IoCall,IoLocation  } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer class="text-gray-600 body-font bg-[#edf3f8] py-3">
        <div class="container border-[1px] rounded-lg border-[#cde0ef]  px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span class="ml-3 text-xl">Tailblocks</span>
            </a>
            <p class="mt-2 text-sm text-gray-500">
              Air plant banjo lyft occupy retro adaptogen indego
            </p>
          </div>
          <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 class=" text-[20px] font-semibold text-[#002642]  mb-3">
              INFORMATION
              </h2>
              <nav class="list-none mb-10">
                <li className="pb-2">
                  <a href="/" class="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li className="pb-2">
                  <a href="/About" class="text-gray-600 hover:text-gray-800">About Us</a>
                </li >
                <li className="pb-2">
                  <a href="/Gallery" class="text-gray-600 hover:text-gray-800">Our Gallery</a>
                </li>
                <li className="pb-2">
                  <a href="Contactus" class="text-gray-600 hover:text-gray-800">Contact Us</a>
                </li>
              </nav>
            </div>
            <div class="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 class=" text-[20px] font-semibold text-[#002642]  mb-3">
              CONTACT
              </h2>
              <nav class="list-none mb-10">
                <li className="pb-2">
                  <a class=" text-gray-600 hover:text-gray-800">Would you have any enquiries.Please feel free to contuct us</a>
                </li>
                <li className="pb-2">
                  <a class="flex items-center gap-2 text-gray-600 hover:text-gray-800"><MdEmail/> info.ritualsoflove@gmail.com</a>
                </li>
                <li className="pb-2">
                  <a class="flex items-center gap-2 text-gray-600 hover:text-gray-800"><IoCall/> +91 84698-38559</a>
                </li>
                <li className="pb-2">
                  <a class="flex items-center gap-2 text-gray-600 hover:text-gray-800"><IoLocation /> Surat , Gujrat , India</a>
                </li>
              </nav>
            </div>
            
           
           
          </div>
        </div>
        <div class="bg-gray-100">
          <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p class="text-gray-500 text-sm text-center sm:text-left">
              © 2020 Tailblocks —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                class="text-gray-600 ml-1"
                target="_blank"
              >
                @knyttneve
              </a>
            </p>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a class="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                </svg>
              </a>
              <a class="ml-3 text-gray-500">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="0"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;