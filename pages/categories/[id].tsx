import { GetStaticPaths, GetStaticProps } from "next";
import "tailwindcss/tailwind.css";
import PostAPIRepository from "../../modules/api/post";
import PostService from "../../modules/service/post";
import CategoryAPIRepository from "../../modules/api/category";
import CategoryService from "../../modules/service/category";
import { Category } from "../../modules/entity/category";
import { Post } from "../../modules/entity/post";
import IndexTitle from "../../layouts/IndexTitle";
import PostLink from "../../components/PostLink";

export default function CategoryPosts({
  categoryData,
  postsData,
}: {
  categoryData: Category;
  postsData: Post[];
}) {
  return (
    <>
      <IndexTitle>Category: {categoryData.name}</IndexTitle>
      <div>
        <ul>
          {postsData.map((post) => (
            <PostLink post={post} />
          ))}
        </ul>
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categoryService = new CategoryService(
    new CategoryAPIRepository(),
    new PostAPIRepository(),
  );
  const categories = await categoryService.getAllCategories();
  const paths = await categories.map((category) => {
    return {
      params: {
        id: category.id,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postRepo = new PostAPIRepository();
  const postService = new PostService(postRepo);
  const categoryService = new CategoryService(
    new CategoryAPIRepository(),
    postRepo,
  );

  const categoryData = await categoryService.getCategoryById(params.id as string);
  const postsData = await postService.getPostsByCategoryId(params.id as string);
  return {
    props: {
      categoryData,
      postsData,
    },
  };
};
