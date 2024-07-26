import "@/styles/globals.css"
import "@/styles/fonts.css";
import '@/styles/loader.css';
import '@/styles/sidebar.css';
import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css/animate.min.css';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "@/common/Loader";


export default function App({ Component, pageProps }) {
  // const router = useRouter();
  // const [loading, setLoading] = useState(false);
  // useEffect(() => {
  //   const handleStart = (url) => (url !== router.asPath) && setLoading(true);
  //   const handleComplete = (url) => (url === router.asPath) && setTimeout(() => setLoading(false), 100); // Add a delay if desired

  //   router.events.on('routeChangeStart', handleStart);
  //   router.events.on('routeChangeComplete', handleComplete);
  //   router.events.on('routeChangeError', handleComplete);

  //   return () => {
  //     router.events.off('routeChangeStart', handleStart);
  //     router.events.off('routeChangeComplete', handleComplete);
  //     router.events.off('routeChangeError', handleComplete);
  //   };
  // }, [router]);

  useEffect(() => { 
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
  <>
  {/* {loading ? <Loader /> :
  <Component {...pageProps} />} */}
  <Component {...pageProps} />
  </>);
}
