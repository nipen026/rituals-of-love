import Image from "next/image";
import Link from "next/link";
import { GiTwirlyFlower } from "react-icons/gi";

const Pricing = () => {
  return (
    <>
      <div className="container py-[50px]">
        <div>
          <p className="text-[20px] text-center text-[#738ea5]">Pricing</p>
          <h2 className="text-[40px] max-[1024px]:text-[24px] text-center py-5 font-bold text-[#002642]">
            WEDDING PACKAGES
          </h2>
        </div>
        <div className="flex  justify-center items-center gap-[30px]">
          <div className="w-[100px] h-[1px] bg-[#738ea5]"></div>
          <div>
            <Image
              src={"/assets/images/section-title.png"}
              width={76}
              height={56}
              alt="title"
            />
          </div>
          <div className="w-[100px] h-[1px] bg-[#738ea5]"></div>
        </div>
        <div className="grid  grid-cols-3 max-[1024px]:grid-cols-1 max-[952px]:grid-cols-1 gap-4 pt-[50px] p-4">
        <Link href={'/Contactus'}>
          <div className="border-2 relative rounded-lg text-white p-4 max-[1024px]:mt-5 animate__animated wow animate__bounceInUp">
            <div className="absolute -top-[50px] left-[35%] max-lg:left-[42%] max-[562px]:left-[35%]  w-[100px] h-[100px] bg-white shadow-round rounded-full p-1">
              <Image
                src={"/assets/images/img-2.jpg"}
                width={70}
                height={70}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="pt-[50px] pb-[20px] border-b-2">
              <h4 className="text-[30px] text-[#002642] text-center font-bold">
                BASIC PACKAGE
              </h4>
            </div>
            <div className="py-[20px]">
              <ul className="text-center">
                <li className="text-[18px] justify-center text-[#7b7b7b] flex gap-3 items-center pb-[15px]">
                  {" "}
                  Decoration
                </li>
                <li className="text-[18px] justify-center text-[#7b7b7b] flex gap-3 items-center pb-[15px]">
                  {" "}
                  Catering Services
                </li>
                <li className="text-[18px] justify-center text-[#7b7b7b] flex gap-3 items-center pb-[15px]">
                  Photography - ( 2 Photographers)
                </li>
                <li className="text-[18px] justify-center text-[#7b7b7b] flex gap-3 items-center pb-[15px]">
                  Invitation Cards
                </li>
              </ul>
            </div>
          </div>
          </Link>
          <Link href={'/Contactus'}>
          <div className="border-2 relative rounded-lg text-white p-4 max-[1024px]:mt-10 animate__animated wow animate__bounceInUp">
            <div className="absolute -top-[50px] left-[35%] max-lg:left-[42%] max-[562px]:left-[35%] w-[100px] h-[100px] bg-white shadow-round rounded-full p-1">
              <Image
                src={"/assets/images/img-2.jpg"}
                width={70}
                height={70}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="pt-[50px] pb-[20px] border-b-2">
              <h4 className="text-[30px] text-[#002642] text-center font-bold">
                STANDARD PACKAGE{" "}
              </h4>
            </div>
            <div className="py-[20px]">
              <ul className="text-center">
                <li className="text-[18px] justify-center text-[#7b7b7b] flex gap-3 items-center pb-[15px]">
                  {" "}
                  Decoration
                </li>
                <li className="text-[18px] justify-center text-[#7b7b7b] flex gap-3 items-center pb-[15px]">
                  {" "}
                  Catering Services
                </li>
                <li className="text-[18px] justify-center text-[#7b7b7b] flex gap-3 items-center pb-[15px]">
                  Photography - ( 4 Photographers)
                </li>
                <li className="text-[18px] justify-center text-[#7b7b7b] flex gap-3 items-center pb-[15px]">
                  Invitation Cards
                </li>
                <li className="text-[18px] justify-center text-[#7b7b7b] flex gap-3 items-center pb-[15px]">
                  Anchor
                </li>
                <li className="text-[18px] justify-center text-[#7b7b7b] flex gap-3 items-center pb-[15px]">
                  Place
                </li>
              </ul>
            </div>
          </div>
          </Link>
          <div className="border-2 bg-[#d7d7d7] relative rounded-lg text-white p-4 max-[1024px]:mt-10 animate__animated wow animate__bounceInUp">
            <div className="absolute -top-[50px] left-[35%]  max-[562px]:left-[35%] max-lg:left-[42%] w-[100px] h-[100px] bg-white shadow-round rounded-full p-1">
              <Image
                src={"/assets/images/img-2.jpg"}
                width={70}
                height={70}
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="pt-[50px] pb-[20px] border-b-2">
              <h4 className="text-[30px] text-[#002642] text-center font-bold">
                LUXURY PACKAGES
              </h4>
              <p className="text-[#7b7b7b] text-[14px] pt-1 text-center">
                DESTINATION VIBES
              </p>
              <p className="text-[#7b7b7b] text-[14px] pt-1 text-center">
                ( Comming Soon - This Packege now not available )
              </p>
            </div>
            <div className="py-[20px]">
              <ul className="text-center">
                <li className="text-[18px] justify-center text-[#7b7b7b] flex gap-3 items-center pb-[15px]">
                  Decoration
                </li>
                <li className="text-[18px] justify-center text-[#7b7b7b] flex gap-3 items-center pb-[15px]">
                  Catering Services
                </li>
                <li className="text-[18px] justify-center text-[#7b7b7b] flex gap-3 items-center pb-[15px]">
                  Photography - ( 4 Photographers)
                </li>
                <li className="text-[18px] justify-center text-[#7b7b7b] flex gap-3 items-center pb-[15px]">
                  Invitation Cards
                </li>
                <li className="text-[18px] justify-center text-[#7b7b7b] flex gap-3 items-center pb-[15px]">
                  Anchor
                </li>
                <li className="text-[18px] justify-center text-[#7b7b7b] flex gap-3 items-center pb-[15px]">
                  Place
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
