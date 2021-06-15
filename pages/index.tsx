import Link from "next/link";
import { GetStaticProps } from "next";

import { utcStringToDateString } from "../libs/dates";
import PostRepository from "../modules/post/repository";
import { PostAPIRepository } from "../modules/api/post";
import { Post } from "../modules/post/model";

// export async function getStaticProps() {
export const getStaticProps: GetStaticProps = async () => {
  const repo: PostRepository = new PostAPIRepository();
  const allPostsData = await repo.fetchAllPosts();

  console.log(allPostsData);
  return {
    props: {
      allPostsData,
    },
  };
};

// export default function Home({allPostsData}:Props) {
export default function Home({ allPostsData }: { allPostsData: Post[] }) {
  console.log(allPostsData);
  return (
    <>
      <h1>Posts</h1>
      <section>
        <ul>
          {allPostsData.map((post) => (
            <li>
              <Link href={`/posts/${post.id}`}>
                <a>
                  <h3>{post.title}</h3>
                  <p>{utcStringToDateString(post.createdAt)}</p>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
