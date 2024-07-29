import Image from "next/image";
import { IoMdImages } from "react-icons/io";
import { MdRoomService } from "react-icons/md";
import { GiBowTieRibbon } from "react-icons/gi";
import { LiaMicrophoneAltSolid } from "react-icons/lia";
import { MdPlace } from "react-icons/md";
import { MdCardGiftcard } from "react-icons/md";

const Services = () => {
  return (
    <>
      <div className="my-[50px] max-[1024px]:my-[30px]">
        <div className="container">
          <div className="bg-[#edf3f8] p-[50px] max-[768px]:p-[20px]">
            <div>
              <p className="text-[20px] text-center text-[#738ea5] animate__animated wow   animate__zoomIn">
                Our Services
              </p>
              <h2 className="text-[40px] max-[1024px]:text-[30px] text-center py-5 font-bold text-[#002642] animate__animated wow   animate__zoomIn">
                WHAT WE CAN DO
              </h2>
            </div>
            <div className="flex  justify-center items-center gap-[30px] animate__animated wow   animate__zoomIn">
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
            <div className="flex max-[1024px]:flex-wrap max-[1024px]:gap-3 justify-between mt-5">
              <div className="w-[30%]  max-[768px]:w-full bg-white p-[30px] rounded-lg animate__rotateInUpLeft  animate__animated wow  ">
                <div className="flex items-center justify-center gap-4 ">
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                  <div className="text-[#738ea5] text-[30px]">
                    <IoMdImages />
                  </div>
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                </div>
                <div>
                    <p className="text-[25px] py-3 text-center text-[#002642] font-semibold">Photography</p>
                    <p className="text-[16px]  text-center text-[#848892]">Capture your special moments with our professional photography services. Whether it's a wedding, birthday, or any special event, our team will ensure every moment is preserved beautifully.</p>
                </div>
              </div>
              <div className="w-[30%]  max-[768px]:w-full bg-white p-[30px] rounded-lg animate__rotateInUpLeft  animate__animated wow  ">
                <div className="flex items-center justify-center gap-4 ">
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                  <div className="text-[#738ea5] text-[30px]">
                    <MdRoomService />
                  </div>
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                </div>
                <div>
                    <p className="text-[25px] py-3 text-center text-[#002642] font-semibold">Fine Dining</p>
                    <p className="text-[16px]  text-center text-[#848892]">Experience exquisite dining with our fine dining services. Enjoy a gourmet meal crafted by our top chefs, offering a perfect blend of taste and elegance for any occasion.</p>
                </div>
              </div>
              <div className="w-[30%]  max-[768px]:w-full  bg-white p-[30px] rounded-lg animate__rotateInUpLeft  animate__animated wow  ">
                <div className="flex items-center justify-center gap-4 ">
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                  <div className="text-[#738ea5] text-[30px]">
                    <GiBowTieRibbon />
                  </div>
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                </div>
                <div>
                    <p className="text-[25px] py-3 text-center text-[#002642] font-semibold">Decorations</p>
                    <p className="text-[16px]  text-center text-[#848892]">Transform any space into a stunning venue with our decoration services. From weddings to corporate events, our team will create a magical atmosphere tailored to your theme and style.</p>
                </div>
              </div>
            </div>
            <div className="flex max-[1024px]:flex-wrap max-[1024px]:gap-3 justify-between mt-5">
              <div className="w-[30%]  max-[768px]:w-full bg-white p-[30px] rounded-lg animate__rotateInUpLeft  animate__animated wow  ">
                <div className="flex items-center justify-center gap-4 ">
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                  <div className="text-[#738ea5] text-[30px]">
                    <LiaMicrophoneAltSolid />
                  </div>
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                </div>
                <div>
                    <p className="text-[25px] py-3 text-center text-[#002642] font-semibold">Anchor</p>
                    <p className="text-[16px]  text-center text-[#848892]">Ensure your event runs smoothly with our experienced anchors. Our professional hosts will engage your audience, maintain the flow of events, and add a touch of charm to any occasion.</p>
                </div>
              </div>
              <div className="w-[30%]  max-[768px]:w-full bg-white p-[30px] rounded-lg animate__rotateInUpLeft  animate__animated wow  ">
                <div className="flex items-center justify-center gap-4 ">
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                  <div className="text-[#738ea5] text-[30px]">
                    <MdPlace />
                  </div>
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                </div>
                <div>
                    <p className="text-[25px] py-3 text-center text-[#002642] font-semibold">Place</p>
                    <p className="text-[16px]  text-center text-[#848892]">Discover the perfect venue for your event with our venue selection services. We offer a variety of stunning locations that will provide the ideal backdrop for your special occasion.</p>
                </div>
              </div>
              <div className="w-[30%]  max-[768px]:w-full bg-white p-[30px] rounded-lg animate__rotateInUpLeft  animate__animated wow  ">
                <div className="flex items-center justify-center gap-4 ">
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                  <div className="text-[#738ea5] text-[30px]">
                    <MdCardGiftcard />
                  </div>
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                </div>
                <div>
                    <p className="text-[25px] py-3 text-center text-[#002642] font-semibold">Invitation Card</p>
                    <p className="text-[16px]  text-center text-[#848892]">Make a lasting impression with our custom invitation cards. From elegant designs to personalized messages, our invitations set the tone for your event and excite your guests.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
