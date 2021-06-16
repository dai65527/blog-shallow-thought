import { GetStaticPaths, GetStaticProps } from "next";
import cheerio from "cheerio";
import hljs from "highlight.js";
import { PostAPIRepository } from "../../modules/api/post";
import { Post } from "../../modules/entity/post";
import CategoryLink from "../../components/CategoryLink";
import DateInfo from "../../components/DateInfo";
import "highlight.js/styles/base16/monokai.css";
import "tailwindcss/tailwind.css";

export default function PostArticle({ postData }: { postData: Post }) {
  return (
    <>
      <div className="my-5">
        <h1 className="text-2xl font-bold my-5">{postData.title}</h1>
        <div className="flex flex-row my-1">
          {postData.categories.map((category) => {
            return <CategoryLink category={category} />;
          })}
        </div>
        <DateInfo
          createdAt={postData.createdAt}
          updatedAt={postData.updatedAt}
        />
      </div>

      <hr className="mx-5" />

      <article className="py-5">
        <div
          className="post"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const repo = new PostAPIRepository();
  const posts = await repo.fetchAllPosts();
  const paths = posts.map((post) => {
    return {
      params: {
        id: post.id,
      },
    };
  });
  return {
    paths, // Next.JS will prerender all pages specified in paths
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const repo = new PostAPIRepository();
  const postData = await repo.fetchPostById(params.id as string);

  // add syntax highlight to post html
  // https://blog.microcms.io/syntax-highlighting-on-server-side/
  const $ = cheerio.load(postData.contentHtml);
  $("code").addClass("px-1 bg-gray-200");
  $("pre code").addClass("text-sm");
  $("pre code").addClass("rounded-md");
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });
  postData.contentHtml = $.html();

  return {
    props: {
      postData,
    },
  };
};
