import Link from "next/dist/client/link";

import { Category } from "../modules/entity/category";
import { WithCount } from "../modules/utils/type";

export default function SideBarCategories({
  allCategoriesData,
}: {
  allCategoriesData: WithCount<Category>[];
}) {
  return (
    <>
      <h4 className="mt-3 font-bold">Categories</h4>
      <ul className="ml-3 list-disc list-inside">
        {allCategoriesData.map((category) => (
          <li className="my-1">
            <Link href={`/categories/${category.id}`}>
              <a className="hover:underline">
                <span className="">{`${category.name} (${category.count})`}</span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
