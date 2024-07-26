import Banner from "@/common/Banner";
import Header from "@/common/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AboutBanner from "@/components/AboutBanner";
import Provide from "@/components/Provide";
import Pricing from "@/components/Pricing";
import Footer from "@/common/Footer";
import { useEffect } from "react";
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
        <div className="overflow-hidden">
        <Header/>
        <Banner title="About Our Services"/>
        <AboutBanner/>
        <Provide/>
        <Pricing/>
        <Footer/>
        </div>
        </>
    )
}

export default About;