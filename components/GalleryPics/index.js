import Image from "next/image";

const GalleryPics = () => {
  return (
    <>
      <div className="mt-5">
        <p className="text-[20px] text-center text-[#738ea5]">Gallery</p>
        <h2 className="text-[40px] max-[1024px]:text-[26px] text-center py-5 font-bold text-[#002642]">
          OUR GALLERY
        </h2>
      </div>
      <div className="flex justify-center items-center gap-[30px]">
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
      <div className="container py-[30px]">
        <div className="flex max-lg:flex-wrap  gap-4  my-5">
          <div className="w-[25%] max-lg:w-[45%] max-md:w-full gap-4">
            <div className="my-3 animate__flipInY animate__animated wow">
              <img
                className="h-auto max-w-full object-cover  rounded-lg"
                src="/assets/images/sahil-1.jpg"
                alt="event planner in india"
                loading="true"
              />
            </div>
            <div className="h-[200px] max-xl:w-[300px] max-[1024px]:w-full my-3 animate__flipInY animate__animated wow">
              <img
                className="h-full w-full max-w-full object-cover rounded-lg"
                src="/assets/images/sahil-2.jpg"
                alt="event planner in india"
                loading="true"
              />
            </div>
            <div className="animate__flipInY animate__animated wow">
              <img
                className="h-auto max-w-full object-cover rounded-lg"
                src="/assets/images/sahil-3.jpg"
                alt="event planner in india"
                loading="true"
              />
            </div>
          </div>
          <div className="w-[25%] max-lg:w-[45%] max-md:w-full gap-4">
            <div className="h-[200px] max-[1024px]:w-full my-3 animate__flipInY animate__animated wow">
              <img
                className="w-full object-cover h-full rounded-lg"
                src="/assets/images/harshil-1.JPG"
                alt="event planner in india"
                loading="true"
              />
            </div>
            <div className="h-[400px] my-3 animate__flipInY animate__animated wow">
              <img
                className="h-full object-cover max-w-full rounded-lg"
                src="/assets/images/harshil-3.JPG"
                alt="event planner in india"
                loading="true"
              />
            </div>
            <div className="h-[300px] w-full animate__flipInY animate__animated wow">
              <img
                className=" object-cover h-full  max-w-full rounded-lg"
                src="/assets/images/harshil-2.JPG"
                alt="event planner in india"
                loading="true"
              />
            </div>
          </div>
          <div className="w-[25%] max-lg:w-[45%] max-md:w-full gap-4">
            <div className="my-3 animate__flipInY animate__animated wow">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/images/dharmik-1.JPG"
                alt="event planner in india"
                loading="true"
              />
            </div>
            <div className="my-3 animate__flipInY animate__animated wow">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/images/dharmik-3.JPG"
                alt="event planner in india"
                loading="true"
              />
            </div>
            <div className="animate__flipInY animate__animated wow">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/images/dharmik-2.JPG"
                alt="event planner in india"
                loading="true"
              />
            </div>
          </div>
          <div className="w-[25%] max-lg:w-[45%] max-md:w-full gap-4">
            <div className="my-3 animate__flipInY animate__animated wow">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/images/vatsal-1.JPG"
                alt="event planner in india"
                loading="true"
              />
            </div>
            <div className="my-3 animate__flipInY animate__animated wow">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/images/vatsal-2.jpeg"
                alt="event planner in india"
                loading="true"
              />
            </div>
            <div className="animate__flipInY animate__animated wow">
              <img
                className="h-auto max-w-full rounded-lg"
                src="/assets/images/vatsal-3.jpeg"
                alt="event planner in india"
                loading="true"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default GalleryPics;
