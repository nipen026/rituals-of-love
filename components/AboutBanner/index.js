import Image from "next/image";

const AboutBanner = () => {
  return (
    <>
      <div>
        <div className=""></div>
        <div className="container py-[50px]">
          <div className="grid grid-cols-2  gap-[30px] max-md:grid-cols-1 ">
            <div className="  flex justify-center relative">
              <div className="absolute bottom-[20px] -left-[30px]">
                <Image
                  src={"/assets/images/shape.png"}
                  width={150}
                  height={150}
                  alt="shape"
                />
              </div>
              <div className="bg-description-image animate__animated wow   animate__bounceInLeft">
                <div className="w-full h-full">
                  <img
                    src="/assets/images/vatsal-1.JPG"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className=" ">
              <div>
                <Image
                  src={"/assets/images/thumb.png"}
                  width={"100"}
                  height={"100"}
                />
              </div>
              <div>
                <h2 className="text-[40px] py-5 font-bold text-[#002642] animate__animated wow   animate__flipInX">
                  Planner of Your Perfect Wedding
                </h2>
                <p className="my-3 text-[#848892] text-[16px] animate__animated wow   animate__lightSpeedInRight">
                Our comprehensive services include venue selection, catering, floral design, photography, and more. We work closely with you to understand your preferences and bring your dream wedding to life. With our extensive network of trusted vendors and our creative expertise, we guarantee a seamless and stress-free planning process. Let us make your wedding day a beautiful and memorable celebration of love and joy. Contact us today to start planning the wedding of your dreams.
                </p>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutBanner;
