import Image from "next/image";

const Description = () => {
  return (
    <>
      <div>
        <div className=""></div>
        <div className="container py-[50px]">
         <div className="grid grid-cols-2 max-[952px]:grid-cols-1">
         <div className=" max-[952px]:w-full max-[1024px]:w-full flex justify-center relative">
            <div className="absolute bottom-[20px] -left-[30px]" data-aos="fade-right">
                <Image src={'/assets/images/shape.png'} width={150} height={150} alt="shape"/>
            </div>
            <div className="bg-description-image">
              <div className="w-full h-full">
                <img
                  src="/assets/images/dharmik-1.JPG"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="wow bg-description-image-2 animate__animated wow   animate__fadeIn" >
                <div className="w-full h-full">
                  <img
                    src="/assets/images/dharmik-2.JPG"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" max-[952px]:w-full">
            <div data-aos="fade-up">
                <Image src={'/assets/images/thumb.png'} width={'100'} height={'100'}/>
            </div>
            <div>
                <h2 className="text-[40px] py-5 font-bold text-[#002642] animate__animated wow   animate__flipInX">
                Planner of Your Perfect Wedding
                </h2>
                <p className="my-3 text-[#848892] text-[16px] animate__animated wow   animate__lightSpeedInRight">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                <p className="my-5 text-[#848892] text-[16px] animate__animated wow   animate__lightSpeedInRight">Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
            </div>
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default Description;
