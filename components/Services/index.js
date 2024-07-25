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
      <div className="my-[50px]">
        <div className="container">
          <div className="bg-[#edf3f8] p-[50px]">
            <div>
              <p className="text-[20px] text-center text-[#738ea5] animate__animated wow   animate__zoomIn">
                Our Services
              </p>
              <h2 className="text-[40px] text-center py-5 font-bold text-[#002642] animate__animated wow   animate__zoomIn">
                WHAT WE CAN DO
              </h2>
            </div>
            <div className="flex justify-center items-center gap-[30px] animate__animated wow   animate__zoomIn">
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
            <div className="flex justify-between mt-5">
              <div className="w-[30%] bg-white p-[30px] rounded-lg animate__rotateInUpLeft  animate__animated wow  ">
                <div className="flex items-center justify-center gap-4 ">
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                  <div className="text-[#738ea5] text-[30px]">
                    <IoMdImages />
                  </div>
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                </div>
                <div>
                    <p className="text-[25px] py-3 text-center text-[#002642] font-semibold">Photography</p>
                    <p className="text-[16px]  text-center text-[#848892]">Quis ipsome suspendisse ultrices gravid. Risus commod viverra maescums.</p>
                </div>
              </div>
              <div className="w-[30%] bg-white p-[30px] rounded-lg animate__rotateInUpLeft  animate__animated wow  ">
                <div className="flex items-center justify-center gap-4 ">
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                  <div className="text-[#738ea5] text-[30px]">
                    <MdRoomService />
                  </div>
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                </div>
                <div>
                    <p className="text-[25px] py-3 text-center text-[#002642] font-semibold">Fine Dining</p>
                    <p className="text-[16px]  text-center text-[#848892]">Quis ipsome suspendisse ultrices gravid. Risus commod viverra maescums.</p>
                </div>
              </div>
              <div className="w-[30%] bg-white p-[30px] rounded-lg animate__rotateInUpLeft  animate__animated wow  ">
                <div className="flex items-center justify-center gap-4 ">
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                  <div className="text-[#738ea5] text-[30px]">
                    <GiBowTieRibbon />
                  </div>
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                </div>
                <div>
                    <p className="text-[25px] py-3 text-center text-[#002642] font-semibold">Decorations</p>
                    <p className="text-[16px]  text-center text-[#848892]">Quis ipsome suspendisse ultrices gravid. Risus commod viverra maescums.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <div className="w-[30%] bg-white p-[30px] rounded-lg animate__rotateInUpLeft  animate__animated wow  ">
                <div className="flex items-center justify-center gap-4 ">
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                  <div className="text-[#738ea5] text-[30px]">
                    <LiaMicrophoneAltSolid />
                  </div>
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                </div>
                <div>
                    <p className="text-[25px] py-3 text-center text-[#002642] font-semibold">Anchor</p>
                    <p className="text-[16px]  text-center text-[#848892]">Quis ipsome suspendisse ultrices gravid. Risus commod viverra maescums.</p>
                </div>
              </div>
              <div className="w-[30%] bg-white p-[30px] rounded-lg animate__rotateInUpLeft  animate__animated wow  ">
                <div className="flex items-center justify-center gap-4 ">
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                  <div className="text-[#738ea5] text-[30px]">
                    <MdPlace />
                  </div>
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                </div>
                <div>
                    <p className="text-[25px] py-3 text-center text-[#002642] font-semibold">Place</p>
                    <p className="text-[16px]  text-center text-[#848892]">Quis ipsome suspendisse ultrices gravid. Risus commod viverra maescums.</p>
                </div>
              </div>
              <div className="w-[30%] bg-white p-[30px] rounded-lg animate__rotateInUpLeft  animate__animated wow  ">
                <div className="flex items-center justify-center gap-4 ">
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                  <div className="text-[#738ea5] text-[30px]">
                    <MdCardGiftcard />
                  </div>
                  <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                </div>
                <div>
                    <p className="text-[25px] py-3 text-center text-[#002642] font-semibold">Invitation Card</p>
                    <p className="text-[16px]  text-center text-[#848892]">Quis ipsome suspendisse ultrices gravid. Risus commod viverra maescums.</p>
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
