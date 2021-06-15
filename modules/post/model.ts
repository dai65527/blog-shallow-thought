import { Category } from "../category/model";
import { DateString } from "../utils/time"

export type Post = {
  id: string;
  title: string;
  contentHtml: string;
  categories: Category[];
  createdAt: DateString;
  updatedAt: DateString;
};
