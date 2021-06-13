import { AppProps } from "next/app";
import Layout from "../layouts/Layout";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component />
    </Layout>
  )
}

export default MyApp;
