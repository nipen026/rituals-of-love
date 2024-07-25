import Image from "next/image";
import Slider from "react-slick";
import { IoMdImages } from "react-icons/io";
import { MdRoomService } from "react-icons/md";
import { GiBowTieRibbon } from "react-icons/gi";
import { LiaMicrophoneAltSolid } from "react-icons/lia";
import { MdPlace } from "react-icons/md";
import { MdCardGiftcard } from "react-icons/md";

const Provide = () => {
  const DataJson = [
    {
      image: "/assets/images/img-1.jpg",
      title: "Place",
      icon: <MdPlace />,
    },
    {
      image: "/assets/images/img-2.jpg",
      title: "Fine Dining",
      icon: <MdRoomService />,
    },
    {
      image: "/assets/images/img-3.jpg",
      title: "Invitation Card",
      icon: <MdCardGiftcard />,
    },
    {
      image: "/assets/images/img-1.jpg",
      title: "Photography",
      icon: <IoMdImages />,
    },
    {
      image: "/assets/images/img-2.jpg",
      title: "Decorations",
      icon: <GiBowTieRibbon />,
    },
    {
      image: "/assets/images/img-3.jpg",
      title: "Anchor",
      icon: <LiaMicrophoneAltSolid />,
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };
  return (
    <>
      <div className="container">
      <Slider {...settings}>
        {DataJson.map((items, index) => {
          return (
            <>
              <div key={index} className="mx-2 relative h-[350px] bg-[#edf3f8] p-3 rounded-lg">
                <Image
                  src={items.image}
                  width={"300"}
                  height={"200"}
                  className="object-cover w-full h-full"
                  alt="provide-1"
                />
                <div className="w-[80%] absolute top-[35%] left-[10%] bg-[rgba(255,255,255,0.8)] p-5 rounded-lg">
                  <div className="flex items-center justify-center gap-4 ">
                    <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                    <div className="text-[#738ea5] text-[30px]">
                      {items.icon}
                    </div>
                    <div className="w-[40px] h-[1px] bg-[#738ea5]"></div>
                  </div>
                  <div>
                    <p className="text-[20px] py-3 text-center text-[#002642] font-semibold">
                      {items.title}
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        </Slider>
      </div>
    </>
  );
};

export default Provide;
