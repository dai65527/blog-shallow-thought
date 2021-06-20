import { GetStaticProps } from "next";

import IndexTitle from "../../layouts/IndexTitle";
import CategoryAPIRepository from "../../modules/api/category";
import PostAPIRepository from "../../modules/api/post";
import CategoryService from "../../modules/service/category";
import { WithCount } from "../../modules/utils/type";
import { Category } from "../../modules/entity/category";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const categoryService = new CategoryService(
    new CategoryAPIRepository(),
    new PostAPIRepository(),
  );
  const allCategoriesData = await categoryService.getAllCategoriesWithCount();

  return {
    props: {
      allCategoriesData,
    },
  };
};

export default function CategoriesIndex({
  allCategoriesData,
}: {
  allCategoriesData: WithCount<Category>[];
}) {
  return (
    <>
      <IndexTitle>Categories</IndexTitle>
      <section>
        <ul>{allCategoriesData.map((category) => (
          <li className="list-disc list-inside my-1">
            <Link href={`/categories/${category.id}`}>
              <a className="hover:underline">
                <span className="text-lg font-semibold">{category.name}</span>
              </a>
            </Link>
            <span className="ml-3">{category.count} posts</span>
          </li>
        ))}</ul>
      </section>
    </>
  );
}
