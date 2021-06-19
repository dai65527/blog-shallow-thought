import { Category } from "../entity/category"

export default interface CategoryRepository {
  fetchAllCategories(): Promise<Category[]>;
  fetchCategoryById(id: string): Promise<Category>;
}
