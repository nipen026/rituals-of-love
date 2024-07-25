import Banner from "@/common/Banner";
import Header from "@/common/Header";
import GalleryPics from "@/components/GalleryPics";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/common/Footer";
const Gallery = () => {
  return (
    <>
    <Header/>
    <Banner title="Our Sweet Moments"/>
     <GalleryPics/>
     <Footer/>
    </>
  );
};
export default Gallery;
