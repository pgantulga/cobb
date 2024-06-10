import "@/styles/globals.css";
import Layout from "@/components/layout";
import { Fragment } from "react";
import Head from "next/head";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics-script">
        {
          `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
        `
        }

      </Script>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}

