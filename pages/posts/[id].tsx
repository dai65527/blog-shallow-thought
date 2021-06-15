import { GetStaticPaths, GetStaticProps } from "next";
import { utcStringToDateString } from "../../libs/dates"
import { PostAPIRepository } from "../../modules/api/post";
import { Post } from "../../modules/post/model";

export default function PostArticle({ postData }: {postData: Post}) {
  return (
    <>
      <h1>{postData.title}</h1>
      <h3>{utcStringToDateString(postData.createdAt)}</h3>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}} />
    </>
  )
}

// export async function getStaticPaths() {
export const getStaticPaths: GetStaticPaths = async () => {
  const repo = new PostAPIRepository()
  const posts = await repo.fetchAllPosts()
  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    }
  });
  return {
    paths, // Next.JS will prerender all pages specified in paths
    fallback: false,
  };
};

// export async function getStaticProps({ params }) {
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const repo = new PostAPIRepository()
  const postData = await repo.fetchPostById(params.id as string)
  console.log(postData)
  return {
    props: {
      postData,
    },
  };
};
