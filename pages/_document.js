import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Rituals of Love" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rituals-of-love.in" />

        <meta
          property="og:title"
          content="Rituals of Love | Wedding Planners in india | Best Wedding Planners India"
        />
        <meta
          property="og:description"
          content="Trusted as the best wedding planners in India, Rituals of love turns your wedding dreams into reality with comprehensive planning and creative design."
        />
        <meta property="og:url" content="https://www.rituals-of-love.in" />
        <meta
          property="og:image"
          content="https://www.ritualsoflove.com/images/wedding-planning.jpg"
        />
        <meta property="og:type" content="website" />
        {/* <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rituals of Love | Wedding Planners in india | Best Wedding Planner"
        />
        <meta
          name="twitter:description"
          content="Best of the wedding planner in india!"
        />
        <meta
          name="twitter:image"
          content="https://www.rituals-of-love.com/images/wedding-planning.jpg"
        /> */}
        {/* <meta name="twitter:site" content="@your_twitter_handle" /> */}
        <meta
          name="twitter:title"
          content="Best Wedding Planners in India - Rituals of love"
        />
        <meta
          name="twitter:description"
          content="Experience the expertise of the best wedding planners in India. At Rituals of love, we create unforgettable weddings with personalized planning and meticulous attention to detail."
        />

        <script type="application/ld+json">
          {`
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "Event Planning Consultation",
  "startDate": "2024-08-01T10:00:00+00:00",
  "endDate": "2024-08-01T11:00:00+00:00",
  "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
  "eventStatus": "https://schema.org/EventScheduled",
  "location": {
    "@type": "Place",
    "name": "Rituals of love",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "co-working space , vesu",
      "addressLocality": "Surat",
      "addressRegion": "GJ",
      "postalCode": "395001",
      "addressCountry": "IN"
    }
  },
  "description": "Schedule a consultation with the best wedding planners in India to discuss your dream wedding.",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "INR",
    "price": "Free",
    "url": "https://www.rituals-of-love.in/Contactus"
  }
`}
        </script>

        {/* <!-- Google tag (gtag.js) --> */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-K143Q5RWTR`}
        ></script>
        <script
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
        ></script>
        
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1125041155228455');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript><img height="1" width="1" style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1125041155228455&ev=PageView&noscript=1"
        /></noscript>
      </body>
    </Html>
  );
}
