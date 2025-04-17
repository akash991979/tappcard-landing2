import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-N0Q2SC1MHD"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-N0Q2SC1MHD');
            `,
          }}
        />
        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org",
                "@type": "WebPage",
                "name": "Beta Sign-Up",
                "description": "Join the future of professional connections",
                "url": "https://tappcard.io",
                "potentialAction": {
                  "@type": "RegisterAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://tappcard.io/api/beta-signup",
                    "httpMethod": "POST",
                    "encodingType": "application/json"
                  },
                  "object": {
                    "@type": "PropertyValueSpecification",
                    "valueName": "email",
                    "valueRequired": true,
                    "valuePattern": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$"
                  }
                }
              }
            `,
          }}
        />
        <meta charSet="utf-8" />
        <meta name="description" content="TappCard - Your digital business card solution" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 