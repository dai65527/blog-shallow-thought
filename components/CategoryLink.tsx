import Link from "next/link";
import React from "react";
import "tailwindcss/tailwind.css";
import { Category } from "../modules/entity/category";

export default function CategoryLink({ category }: { category: Category }) {
  return (
    <Link href={`/categories/${category.id}`}>
      <a className="block px-1 border-solid border rounded-md border-black hover:bg-gray-100 text-sm mr-1">
        {category.name}
      </a>
    </Link>
  );
}
