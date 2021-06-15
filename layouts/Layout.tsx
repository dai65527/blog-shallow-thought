import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Shallow Thought</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <header>
        <h1>Shallow Thoughts</h1>
        <p>
          dnakanoの最も気軽な備忘録です。
        </p>
      </header>

      <hr/>

      <main>{children}</main>

      <hr/>

      <footer>
        <p>&copy; 2021 Daiki Nakano</p>
      </footer>
    </>
  );
}
