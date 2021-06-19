import Link from "next/link";
import { GetStaticProps } from "next";

import PostRepository from "../modules/repository/post";
import { PostAPIRepository } from "../modules/api/post";
import { Post } from "../modules/entity/post";
import CategoryLink from "../components/CategoryLink";
import DateInfo from "../components/DateInfo";
import IndexTitle from "../layouts/IndexTitle";

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
            <li key={post.id} className="mb-6">
              <Link href={`/posts/${post.id}`}>
                <a>
                  <h3 className="text-2xl hover:underline">{post.title}</h3>
                </a>
              </Link>
              <div className="flex flex-row mt-2">
                {post.categories.map((category) => (
                  <CategoryLink category={category} />
                ))}
              </div>
              <DateInfo createdAt={post.createdAt} updatedAt={post.updatedAt} />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
