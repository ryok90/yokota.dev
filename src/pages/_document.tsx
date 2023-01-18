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
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag() { dataLayer.push(arguments); }
          gtag('js', new Date());
          gtag('config', 'G-K4BZTP6YKK');`,
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
          content="Rodrigo Yokota - Software Engineer"
        />
        <meta property="og:site_name" content="Rodrigo Yokota" />
        <meta property="og:url" content="https://yokota.dev" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="rodrigo yokota, software engineer, web development, software development, software, computer science,
          programming, coding, programmer, coder, javascript, typescript, react, nodejs, aws, frontend, backend, fullstack, information technology"
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
