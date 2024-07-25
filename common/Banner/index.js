import Slider from "react-slick";
const Banner = (props) => {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1500,
    cssEase: "linear",
    arrows:false
  };
  return (
    <>
      <Slider {...settings}>
        <div className="w-full h-[calc(100vh-70px)] bg-[url('../public/assets/images/slide-1.jpg')] bg-cover bg-center">
          <div>
            <h1 className={`text-[50px] text-center pt-[30px] font-cursive`}>
              {props.title}
            </h1>
            <p className="text-[18px] text-center my-4 font-[500]">
              Let’s Make Your Day Memorable.Your Successful Wedding is Our Job.
            </p>
          </div>
        </div>
        <div className="w-full h-[calc(100vh-70px)] bg-[url('../public/assets/images/slide-2.jpg')] bg-cover bg-center">
          <div>
            <h1 className="text-[50px] text-center pt-[30px] font-cursive">
            {props.title}
            </h1>
            <p className="text-[18px] text-center my-4 font-[500]">
              Let’s Make Your Day Memorable.Your Successful Wedding is Our Job.
            </p>
          </div>
        </div>
        <div className="w-full h-[calc(100vh-70px)] bg-[url('../public/assets/images/slide-3.jpg')] bg-cover bg-center">
          <div>
            <h1 className="text-[50px] text-center pt-[30px] font-cursive">
            {props.title}
            </h1>
            <p className="text-[18px] text-center my-4 font-[500]">
              Let’s Make Your Day Memorable.Your Successful Wedding is Our Job.
            </p>
          </div>
        </div>
      </Slider>
    </>
  );
};

export default Banner;
