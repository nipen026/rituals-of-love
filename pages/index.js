import Header from "@/common/Header";
import Banner from "@/common/Banner";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Description from "@/components/Description";
import Services from "@/components/Services";
import Celebrate from "@/components/Celebrate";
import Footer from "@/common/Footer";
import { useEffect } from "react";
import WhatsAppButton from "@/common/WhatsAppButton";
import Head from "next/head";

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
        <title>Best Wedding Planners in India – Rituals of love</title>
        <meta
          name="description"
          content="Discover the best wedding planners in India with Rituals of love. We create unforgettable weddings with personalized planning and meticulous attention to detail."
        />
        <meta
          name="keywords"
          content="Planning your everlasting memories, day memorable , Rituals of love , Photography , Fine Dining , Decorations , Anchor , Place , Invitation Card , Lets Celebrate"
        />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3875385789969723"
          crossorigin="anonymous"
        ></script>
      </Head>
      <main className={"overflow-hidden"}>
        <WhatsAppButton />
        <Header />
        <Banner
          title={"Planning Your Everlasting Memories with Rituals of love"}
        />
        <Description />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3875385789969723"
          crossorigin="anonymous"
        ></script>
        <ins
          class="adsbygoogle"
          style="display:block"
          data-ad-client="ca-pub-3875385789969723"
          data-ad-slot="6305940620"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        <Services />
        <Celebrate />
        <Footer />
      </main>
    </>
  );
}
