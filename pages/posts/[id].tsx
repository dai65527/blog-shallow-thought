import Head from "next/head";
import { Post, getPostData, getAllPostIds } from "../../libs/posts";
import { GetStaticPaths, GetStaticProps } from "next";

export default function PostArticle({ postData }: {postData: Post}) {
  const date = new Date(postData.date)
  const dateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`

  return (
    <>
      <h1>{postData.title}</h1>
      <h3>{dateString}</h3>
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
