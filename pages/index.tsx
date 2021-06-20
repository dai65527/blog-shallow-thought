import Link from "next/link";
import { GetStaticProps } from "next";

import PostRepository from "../modules/repository/post";
import PostAPIRepository from "../modules/api/post";
import { Post } from "../modules/entity/post";
import IndexTitle from "../layouts/IndexTitle";
import PostLink from "../components/PostLink";

export const getStaticProps: GetStaticProps = async () => {
  const repo: PostRepository = new PostAPIRepository();
  const allPostsData = await repo.fetchAllPosts();

  return {
    props: {
      allPostsData,
    },
  };
};

export default function Home({ allPostsData }: { allPostsData: Post[] }) {
  return (
    <>
      <IndexTitle>Recent Posts</IndexTitle>
      <section>
        <ul>
          {allPostsData.map((post) => (
            <PostLink post={post} />
          ))}
        </ul>
      </section>
    </>
  );
}
