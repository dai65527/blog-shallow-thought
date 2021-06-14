import { Post, getPostData, getAllPostIds } from "../../libs/posts";
import { GetStaticPaths, GetStaticProps } from "next";
import { utcStringToDateString } from "../../libs/dates"

export default function PostArticle({ postData }: {postData: Post}) {
  return (
    <>
      <h1>{postData.title}</h1>
      <h3>{utcStringToDateString(postData.date)}</h3>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml}} />
    </>
  )
}

// export async function getStaticPaths() {
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths, // Next.JS will prerender all pages specified in paths
    fallback: false,
  };
};

// export async function getStaticProps({ params }) {
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
