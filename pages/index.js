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

export default function Home() {
  return (
    <main className={""}>
      <Header />
      <Banner title={'Planning Your Everlasting Memories'}/>
      <Description />
      <Services />
      <Celebrate />
      <Footer/>
    </main>
  );
}
