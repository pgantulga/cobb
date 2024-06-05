import "@/styles/globals.css";
import Layout from "@/components/layout";
import { Fragment } from "react";
import Head from 'next/head';


export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  )
}
