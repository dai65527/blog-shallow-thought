import Link from "next/link"
import { GetStaticProps } from "next"
import { getSortedPostsData, Post } from "../libs/posts";
import { utcStringToDateString } from "../libs/dates";

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
  allPostsData: Post[];
}) {
  console.log(allPostsData)
  return (
    <>
      <h1>記事一覧</h1>
      <section>
        <ul>
          {allPostsData.map((post) => (
            <li>
              <Link href={`/posts/${post.id}`}>
                <a>
                  <h3>{post.title}</h3>
                  <p>{utcStringToDateString(post.date)}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
