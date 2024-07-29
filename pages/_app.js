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
import Script from "next/script";

const handleRouteChange = (url) => {
  window.gtag('config', 'G-K143Q5RWTR', {
    page_path: url,
  });
};

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  useEffect(() => {
    const handleStart = (url) => {
      if (url !== router.pathname) {
        setLoading(true);
      }
    };

    const handleComplete = (url) => {
      if (url === router.pathname) {
        setTimeout(() => setLoading(false), 100); // Add a delay if desired
      } else {
        setLoading(false);
      }
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  }, [router]);


  useEffect(() => { 
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
  <>
   <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-K143Q5RWTR`}
        strategy="afterInteractive"
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K143Q5RWTR', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
  {loading ? <Loader /> :
  <Component {...pageProps} />}
  {/* <Component {...pageProps} /> */}
  </>);
}
