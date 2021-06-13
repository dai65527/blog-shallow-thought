import Head from "next/head";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Shallow Thoughts</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <header>
        <h1>Welcome to My Site</h1>
        <p>
          Hi, my name is Daiki Nakano. I'm a student at 42tokyo learning
          software engineering.
        </p>
      </header>

      <main>{children}</main>

      <footer>
        footer
      </footer>
    </>
  );
}
