import Banner from "@/common/Banner";
import Header from "@/common/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from "@/common/ContactForm";
import Footer from "@/common/Footer";
const ConatactUs = () =>{
    return(
        <>
        <Header/>
        <Banner title="Contact Our teams"/>
        <ContactForm/>
        <Footer/>
        </>
    )
}

export default ConatactUs;