import Image from "next/image";
import { Cedarville_Cursive } from "next/font/google";
import Header from "@/common/Header";
import Banner from "@/common/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Description from "@/components/Description";
import Services from "@/components/Services";
import Celebrate from "@/components/Celebrate";
import Footer from "@/common/Footer";
import { useEffect } from "react";

export default function Home() {
  // useEffect(() => {
  //   const init  = async () => {
  //     if (typeof window !== 'undefined') {
  //       const   = (await import(' js')). ;
  //       new  ().init();
  //     }
  //   };

  //   init ();
  // }, []);
  useEffect(() => {
    const initWOW = async () => {
      if (typeof window !== 'undefined') {
        const WOW = (await import('wowjs')).WOW;
        new WOW().init();
      }
    };

    initWOW();
  }, []);
  return (
    <main className={"overflow-hidden"}>
      <Header />
      <Banner title={'Planning Your Everlasting Memories'}/>
      <Description />
      <Services />
      <Celebrate />
      <Footer/>
    </main>
  );
}
