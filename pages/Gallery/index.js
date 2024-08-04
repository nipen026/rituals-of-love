import Banner from "@/common/Banner";
import Header from "@/common/Header";
import GalleryPics from "@/components/GalleryPics";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "@/common/Footer";
import { useEffect } from "react";
import Head from "next/head";
import WhatsAppButton from "@/common/WhatsAppButton";
const Gallery = () => {
  useEffect(() => {
    const initWOW = async () => {
      if (typeof window !== "undefined") {
        const WOW = (await import("wowjs")).WOW;
        new WOW().init();
      }
    };

    initWOW();
  }, []);
  return (
    <>
      <Head>
        <title>Captured Moments – Weddings Planned by Rituals of love</title>
        <meta
          name="description"
          content="Explore our gallery showcasing beautiful weddings planned by Rituals of love, the best wedding planners in India. See our stunning work and happy couples."
        ></meta>
        <meta
          name="keywords"
          content="day memorable,our sweet memories , Rituals of love , gallery , our gallery"
        ></meta>
      </Head>
      <div className="overflow-hidden">
        <WhatsAppButton />
        <Header />
        <Banner title="Our Sweet Moments" />
        <GalleryPics />
        <Footer />
      </div>
    </>
  );
};
export default Gallery;
