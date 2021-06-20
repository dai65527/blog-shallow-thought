import Link from "next/dist/client/link";
import "tailwindcss/tailwind.css";

export default function SiteHeader() {
  return (
    <>
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
    </>
  );
}
