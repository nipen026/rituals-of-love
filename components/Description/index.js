import Image from "next/image";
import Link from "next/link";

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
                <p className="my-3 text-[#848892] text-[16px] animate__animated wow   animate__lightSpeedInRight">Your wedding day is one of the most important moments of your life, and our expert wedding planning services are here to ensure it is perfect in every way. We specialize in creating personalized and unforgettable wedding experiences, tailored to your unique vision. From the initial consultation to the final send-off, our dedicated team handles every detail with precision and care, allowing you to focus on enjoying your special day.</p>
                <div className=" wow animate__jackInTheBox animate__animated mt-5" >
                        <Link href={'/About'}>
                        <button style={{transition:'all 0.5s'}} className="hover:text-[#002642] bg-[#002642] text-white w-[170px] font-semibold h-[60px] hover:bg-[white] hover:border-2 hover:border-[#002642] hover:rounded-lg">More Information</button>
                        </Link>
                    </div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </>
  );
};

export default Description;
