import Banner from "@/common/Banner";
import Header from "@/common/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutBanner from "@/components/AboutBanner";
import Provide from "@/components/Provide";
import Pricing from "@/components/Pricing";
import Footer from "@/common/Footer";
import { useEffect } from "react";
import WhyChoose from "@/components/WhyChoose";
import Head from "next/head";
const About = () =>{
    useEffect(() => {
        const initWOW = async () => {
          if (typeof window !== 'undefined') {
            const WOW = (await import('wowjs')).WOW;
            new WOW().init();
          }
        };
    
        initWOW();
      }, []);
    return(
        <>
        <Head>
          <title>About Us – The Best Wedding Planner in India</title>
          <meta name="description" content="Learn about Rituals of love, the best wedding planners in India. Our experienced team crafts unforgettable weddings tailored to your unique love story."></meta>
          <meta
          name="keywords"
          content="day memorable ,About our service , planning process , pricing , customized wedding packeges , Basic packeges , standard packeges , personalize , Rituals of love"
        />
        </Head>
        <div className="overflow-hidden">
        <Header/>
        <Banner title="About Our Services"/>
        <AboutBanner/>
        <WhyChoose/>
        <Provide/>
        <Pricing/>
        <Footer/>
        </div>
        </>
    )
}

export default About;