import { AppProps } from "next/app";
import Layout from "../layouts/Layout";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  )
}

export default MyApp;
