import Head from "next/head";
import Link from "next/link";

import SiteHeader from "../components/SiteHeader";
import SideBarProfile from "../components/SideBarProfile";
import "tailwindcss/tailwind.css";
import SideBarCategories from "../components/SideBarCategories";
import { Category } from "../modules/entity/category";
import { WithCount } from "../modules/utils/type";

export default function Layout({
  children,
  allCategoriesData,
}: {
  children: React.ReactNode;
  allCategoriesData: WithCount<Category>[];
}) {
  return (
    <>
      <Head>
        <title>Shallow Thought</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <SiteHeader />

      <main className="grid grid-cols-12 mx-auto max-w-screen-md xl:max-w-screen-lg px-3 py-5">
        <article className="col-span-12 sm:col-span-9">{children}</article>
        <aside className="col-span-12 sm:col-span-3 sm:mt-16 sm:pl-3">
          <SideBarProfile />
          <SideBarCategories allCategoriesData={allCategoriesData} />
        </aside>
      </main>

      <hr />

      <footer>
        <div className="mx-auto mt-3 mb-5 max-w-screen-md xl:max-w-screen-lg">
          <Link href="/">
            <a>Shallow Thought</a>
          </Link>
          <p>&copy; 2021 Daiki Nakano</p>
        </div>
      </footer>
    </>
  );
}
