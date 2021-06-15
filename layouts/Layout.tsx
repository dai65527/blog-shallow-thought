import Head from "next/head";
import "tailwindcss/tailwind.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Shallow Thought</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <header>
        <h1>Shallow Thought</h1>
        <p>
          dnakanoの最も気軽な備忘録です。
        </p>
      </header>

      <hr/>

      <main>{children}</main>

      <hr/>

      <footer>
        <p>Shallow Thought</p>
        <p>&copy; 2021 Daiki Nakano</p>
      </footer>
    </>
  );
}
