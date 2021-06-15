import Link from "next/link";
import { GetStaticProps } from "next";

import { utcStringToDateString } from "../libs/dates";
import PostRepository from "../modules/repository/post";
import { PostAPIRepository } from "../modules/api/post";
import { Post } from "../modules/entity/post";
import CategoryLink from "../components/CategoryLink"

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
      <h1 className="my-5 text-md font-medium">Recent Posts</h1>
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
                {post.categories.map(category => (
                  <CategoryLink category={category} />
                ))}
              </div>
              <div className="flex flex-row text-sm">
                <p className="">{`created:${utcStringToDateString(post.createdAt)}`}</p>
                <p className="ml-1">{`updated:${utcStringToDateString(post.updatedAt)}`}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
