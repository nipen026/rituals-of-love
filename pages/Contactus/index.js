import Banner from "@/common/Banner";
import Header from "@/common/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from "@/common/ContactForm";
import Footer from "@/common/Footer";
const ConatactUs = () =>{
    return(
        <>
        <div className="overflow-hidden">
        <Header/>
        <Banner title="Contact Our teams"/>
        <ContactForm/>
        <Footer/>
        </div>
        </>
    )
}

export default ConatactUs;