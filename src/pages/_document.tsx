import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en" itemScope itemType="http://schema.org/WebPage">
      <Head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-EYT1QRFKV1"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-EYT1QRFKV1');
          `}
        </Script>
        <Script
          id="schema"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              {
                "@context": "https://schema.org/",
                "@type": "WebSite",
                "name": "Rodrigo Yokota - Software Engineer",
                "alternateName": "RYSE",
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
                "jobTitle": "Senior Software Engineer",
                "worksFor": {
                  "@type": "Organization",
                  "name": "Vaullti"
                }
              }`,
          }}
        />

        {/* Google / Search Engine Tags */}
        <meta
          property="og:site_name"
          content="Rodrigo Yokota - Software Engineer"
        />
        <meta
          itemProp="name"
          content="Rodrigo Yokota - Full-stack Software Engineer - Javascript | Node.js"
        />
        <meta
          itemProp="description"
          content="Rodrigo Yokota - Software engineer specialized on full-stack web development and cloud architecture with experience on multiplatform mobile app development."
        />
        <meta
          itemProp="image"
          content="https://yokota.dev/images/rodrigo-yokota.webp"
        />
        <meta
          name="description"
          content="Rodrigo Yokota - Software engineer specialized on full-stack web development and cloud architecture with experience on multiplatform mobile app development."
        />

        {/* Facebook Meta Tags */}
        <meta property="og:url" content="https://yokota.dev" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Rodrigo Yokota - Full-stack Software Engineer - Javascript | Node.js"
        />
        <meta
          property="og:description"
          content="Rodrigo Yokota - Software engineer specialized on full-stack web development and cloud architecture with experience on multiplatform mobile app development."
        />
        <meta
          property="og:image"
          content="https://yokota.dev/images/rodrigo-yokota.webp"
        />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Rodrigo Yokota - Full-stack Software Engineer - Javascript | Node.js"
        />
        <meta
          name="twitter:description"
          content="Rodrigo Yokota - Software engineer specialized on full-stack web development and cloud architecture with experience on multiplatform mobile app development."
        />
        <meta
          name="twitter:image"
          content="https://yokota.dev/images/rodrigo-yokota.webp"
        />

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
