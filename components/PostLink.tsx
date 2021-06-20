import Link from "next/link";

import { Post } from "../modules/entity/post";
import CategoryLink from "../components/CategoryLink";
import DateInfo from "../components/DateInfo";

export default function PostLink({ post }: { post: Post }) {
  return (
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
  );
}
