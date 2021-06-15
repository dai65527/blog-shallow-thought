import Head from "next/head";
import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Shallow Thought</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <header>
        <div className="mx-auto my-10 max-w-screen-md xl:max-w-screen-lg px-3">
          <Link href="/">
            <a>
              <h1 className="my-3 text-4xl">Shallow Thought</h1>
            </a>
          </Link>
          <p className="">dnakanoの最も気軽な技術メモ・備忘録です。</p>
        </div>
      </header>

      <hr />

      <main className="grid grid-cols-12 mx-auto max-w-screen-md xl:max-w-screen-lg px-3 py-5">
        <article className="col-span-9">{children}</article>
        <aside className="col-span-3">
          <p>Profile</p>
          <p>Categories</p>
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
