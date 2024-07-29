import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>
          Rituals of Love | Wedding Planners in Surat | Expert Wedding Planning
          Services
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Rituals of Love" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.rituals-of-love.in" />
        <meta
          name="description"
          content="Rituals of Love offers expert wedding planning services in Surat. Our experienced wedding planners will help you create the perfect wedding, from venue selection to coordination. Contact us today!"
        />
        <meta
          name="keywords"
          content="Rituals of Love, wedding planning Surat, wedding planners Surat, Surat wedding services, wedding coordination, wedding venues Surat, wedding decorations, wedding catering Surat"
        />
        <meta
          property="og:title"
          content="Rituals of Love | Wedding Planners in Surat | Expert Wedding Planning Services"
        />
        <meta
          property="og:description"
          content="Rituals of Love offers expert wedding planning services in Surat. Our experienced wedding planners will help you create the perfect wedding, from venue selection to coordination. Contact us today!"
        />
        <meta property="og:url" content="https://www.rituals-of-love.in" />
        <meta
          property="og:image"
          content="https://www.ritualsoflove.com/images/wedding-planning.jpg"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rituals of Love | Wedding Planners in Surat | Expert Wedding Planning Services"
        />
        <meta
          name="twitter:description"
          content="Rituals of Love offers expert wedding planning services in Surat. Our experienced wedding planners will help you create the perfect wedding, from venue selection to coordination. Contact us today!"
        />
        <meta
          name="twitter:image"
          content="https://www.rituals-of-love.com/images/wedding-planning.jpg"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rituals of Love",
              "url": "https://www.rituals-of-love.cin",
              "logo": "https://www.rituals-of-love.in/_next/image?url=%2Fassets%2Fimages%2Fmain-logo.png&w=128&q=75",
              "sameAs": [
                "https://www.facebook.com/ritualsoflove",
                "https://www.instagram.com/ritualsoflove",
                "https://www.twitter.com/ritualsoflove"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+918469838559",
                "contactType": "Customer Service"
              }
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
      </body>
    </Html>
  );
}
