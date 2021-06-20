import CategoryRepository from "../repository/category";
import PostRepository from "../repository/post";

import { Category } from "../entity/category";
import { WithCount } from "../utils/type";

export default class CategoryService {
  constructor(
    private categoryRepo: CategoryRepository,
    private postRepo: PostRepository,
  ) {}

  async getAllCategories(): Promise<Category[]> {
    const categories = await this.categoryRepo.fetchAllCategories();

    // sort by id
    categories.sort((a, b) => {
      if (a.id < b.id) {
        return -1;
      } else if (a.id == b.id) {
        return 0;
      } else {
        return 1;
      }
    });

    return categories;
  }

  async getAllCategoriesWithCount(): Promise<WithCount<Category>[]> {
    const posts = await this.postRepo.fetchAllPosts();
    const categories = await this.getAllCategories();
    const categoriesWithCount: WithCount<Category>[] = categories.map(category => {
      var count = 0;
      for (const post of posts) {
        for (const postCategory of post.categories) {
          if (postCategory.id == category.id) {
            count++;
            break;
          }
        }
      }
      return {
        ...category,
        count,
      }
    })
    return categoriesWithCount;
  }
}
