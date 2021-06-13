import { GetStaticProps } from "next"
import { Props } from "react";
import { getSortedPostsData, Posts } from "../libs/posts";

// export async function getStaticProps() {
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  console.log(allPostsData)
  return {
    props: {
      allPostsData,
    },
  };
};

// export default function Home({allPostsData}:Props) {
export default function Home({
  allPostsData,
}: {
  allPostsData: Posts[];
  // allPostsData: { date: string; title: string; id: string }[];
}) {
  console.log(allPostsData)
  return (
    <>
      <h1>HOGE FUGA</h1>
      <section>
        <ul>
          {allPostsData.map((post) => (
            <li>
              <h3>{post.title}</h3>
              <p>{post.date}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
