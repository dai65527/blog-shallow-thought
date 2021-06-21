import App, { AppProps } from "next/app";

import Layout from "../layouts/Layout";
import CategoryAPIRepository from "../modules/api/category";
import PostAPIRepository from "../modules/api/post";
import CategoryService from "../modules/service/category";
import "tailwindcss/tailwind.css";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout allCategoriesData={pageProps.allCategoriesData}>
      <Component {...pageProps} />
    </Layout>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const categoryService = new CategoryService(
    new CategoryAPIRepository(),
    new PostAPIRepository(),
  );
  const allCategoriesData = await categoryService.getAllCategoriesWithCount();

  appProps.pageProps = { ...appProps.pageProps, allCategoriesData };
  return { ...appProps };
};
