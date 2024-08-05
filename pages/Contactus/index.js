import Banner from "@/common/Banner";
import Header from "@/common/Header";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactForm from "@/common/ContactForm";
import Footer from "@/common/Footer";
import Head from "next/head";
import WhatsAppButton from "@/common/WhatsAppButton";
import Pricing from "@/components/Pricing";
const ConatactUs = () => {
  return (
    <>
      <Head>
        <title>
          Contact Rituals of love – Your Trusted Wedding Planner in India
        </title>
        <meta
          name="description"
          content="Get in touch with Rituals of love, the best wedding planners in India. Start planning your dream wedding with our expert team today."
        ></meta>
          <meta
          name="keywords"
          content="day memorable ,contact our team , contact us , plan , wedding date , Rituals of love"
        />
      </Head>
      <div className="overflow-hidden">
        <WhatsAppButton/>
        <Header />
        <Banner title="Contact Our teams" />
        <ContactForm />
        <Pricing/>
        <Footer />
      </div>
    </>
  );
};

export default ConatactUs;
