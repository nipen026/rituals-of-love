import { MdEmail } from "react-icons/md";
import { IoCall,IoLocation  } from "react-icons/io5";
import Image from "next/image";
import { IoLogoWhatsapp } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="text-gray-600 body-font bg-[#edf3f8] py-3">
        <div className="container border-[1px] rounded-lg border-[#cde0ef]  px-5 py-5 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className=" lg:w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <Image src={'/assets/images/Background.png'} width={200} height={150} alt="logo" className="max-lg:w-[100px] "/>
            </a>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="xl:w-1/3 md:w-1/2 sm:w-1/1 w-full px-4">
              <h2 className=" text-[20px] font-semibold text-[#002642]  mb-3">
              INFORMATION
              </h2>
              <nav className="list-none mb-10">
                <li className="pb-2">
                  <a href="/" className="text-gray-600 hover:text-gray-800">Home</a>
                </li>
                <li className="pb-2">
                  <a href="/About" className="text-gray-600 hover:text-gray-800">About Us</a>
                </li >
                <li className="pb-2">
                  <a href="/Gallery" className="text-gray-600 hover:text-gray-800">Our Gallery</a>
                </li>
                <li className="pb-2">
                  <a href="/blog" className="text-gray-600 hover:text-gray-800">Blog</a>
                </li>
                <li className="pb-2">
                  <a href="Contactus" className="text-gray-600 hover:text-gray-800">Contact Us</a>
                </li>
              </nav>
            </div>
            <div className="xl:w-1/3 md:w-1/2 sm:w-1/1 w-full px-4">
              <h2 className=" text-[20px] font-semibold text-[#002642]  mb-3">
              CONTACT
              </h2>
              <nav className="list-none mb-10">
                <li className="pb-2">
                  <a href='/Contactus' className=" text-gray-600 hover:text-gray-800">Would you have any enquiries.Please feel free to contuct us</a>
                </li>
                <li className="pb-2">
                  <a href="/Contactus" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 max-lg:justify-center"><MdEmail/> info.ritualsoflove@gmail.com</a>
                </li>
                <li className="pb-2">
                  <a href="https://wa.me/+918469838559?text=Hello%20I%20am%20intersted%20in%20your%20sevices" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 max-lg:justify-center"><IoCall/> +91 84698-38559</a>
                </li>
                <li className="pb-2">
                  <a href="/Contactus" className="flex items-center gap-2 text-gray-600 hover:text-gray-800 max-lg:justify-center"><IoLocation /> Surat , Gujrat , India</a>
                </li>
              </nav>
            </div>
            <div className="xl:w-1/3 hidden xl:block w-full px-4">
              <h2 className=" text-[20px] font-semibold text-[#002642]  mb-3">
              Our memories
              </h2>
              <div className="grid grid-cols-3">
                <Link href={'/Gallery'}>
                <div className="w-[60px] h-[60px]">
                  <Image src={'/assets/images/dharmik-1.JPG'} className="w-full h-full object-cover rounded-lg" width={60} height={60} alt="wedding planners memories"/>
                </div>
                </Link>
                <Link href={'/Gallery'}>
                <div className="w-[60px] h-[60px]">
                  <Image src={'/assets/images/dharmik-2.JPG'} className="w-full h-full object-cover rounded-lg" width={60} height={60} alt="wedding planners memories"/>
                </div>
                </Link>
                <Link href={'/Gallery'}>
                <div className="w-[60px] h-[60px]">
                  <Image src={'/assets/images/dharmik-3.JPG'} className="w-full h-full object-cover rounded-lg" width={60} height={60} alt="wedding planners memories"/>
                </div>
                </Link>
              </div>
              <div className="grid grid-cols-3 mt-4">
              <Link href={'/Gallery'}>
                <div className="w-[60px] h-[60px]">
                  <Image src={'/assets/images/vatsal-1.JPG'} className="w-full h-full object-cover rounded-lg" width={60} height={60} alt="wedding planners memories"/>
                </div>
                </Link>
                <Link href={'/Gallery'}>
                <div className="w-[60px] h-[60px]">
                  <Image src={'/assets/images/vatsal-2.jpeg'} className="w-full h-full object-cover rounded-lg" width={60} height={60} alt="wedding planners memories"/>
                </div>
                </Link>
                <Link href={'/Gallery'}>
                <div className="w-[60px] h-[60px]">
                  <Image src={'/assets/images/vatsal-3.jpeg'} className="w-full h-full object-cover rounded-lg" width={60} height={60} alt="wedding planners memories"/>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-100">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 2024 Rituals of love —
              <a
                href="https://twitter.com/knyttneve"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                @Khant-nipen
              </a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a href="https://www.facebook.com/profile.php?id=61563268825119" target="_blank" className="text-gray-500">
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a target="_blank" href="https://wa.me/+918469838559?text=Hello%20I%20am%20intersted%20in%20your%20sevices" className="ml-3 text-[20px] text-gray-500">
                <IoLogoWhatsapp/>
              </a>
              <a href="https://www.instagram.com/event_planner_in_india/" className="ml-3 text-gray-500">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
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