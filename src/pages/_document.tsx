import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-K4BZTP6YKK"
        />
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-K4BZTP6YKK');`,
          }}
        />
        <Script
          id="schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org/",
                "@type": "Person",
                "name": "Rodrigo Yokota",
                "url": "https://yokota.dev",
                "image": "https://yokota.dev/images/rodrigo-yokota.webp",
                "sameAs": [
                  "https://www.facebook.com/ryok90",
                  "https://twitter.com/ryok90",
                  "https://www.instagram.com/rodrigo.yokota/",
                  "https://www.youtube.com/@rodrigo.yokota",
                  "https://www.linkedin.com/in/rodrigo-yokota/",
                  "https://github.com/ryok90",
                  "https://yokota.dev"
                ],
                "jobTitle": "Software Engineer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Groundbreaker"
                }
              }`,
          }}
        />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Rodrigo Yokota - Software engineer specialized on full-stack web development and cloud architecture with experience on multiplatform mobile app development."
        />
        <meta
          name="twitter:card"
          content="Rodrigo Yokota - Software engineer specialized on full-stack web development and cloud architecture with experience on multiplatform mobile app development."
        />
        <meta
          name="og:title"
          property="og:title"
          content="Rodrigo Yokota - Full-stack Software Engineer - Javascript | Node.js"
        />
        <meta property="og:site_name" content="Rodrigo Yokota" />
        <meta property="og:url" content="https://yokota.dev" />
        <meta
          name="keywords"
          content="rodrigo yokota, software engineer, web development, software development, software, computer science, developper, programming, coding, programmer, coder, javascript, typescript, react, nodejs, aws, frontend, backend, full-stack, information technology, clean architecture, cloud providers"
        />
        <meta
          name="theme-color"
          content="#121212"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="canonical" href="https://yokota.dev" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/images/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
