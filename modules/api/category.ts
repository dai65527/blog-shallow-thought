import CategoryRepository from "../repository/category";
import { createClient } from "microcms-js-sdk";
import { Category } from "../entity/category";
import { APIConfig } from "./config";
import { APIResponseList } from "./types";
import loadConfig from "next/dist/next-server/server/config";

export type CategoryAPIResponse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  name: string;
};

export default class CategoryAPIRepository implements CategoryRepository {
  async fetchAllCategories(): Promise<Category[]> {
    const client = createClient({
      serviceDomain: APIConfig.microCMSServiceDomain,
      apiKey: APIConfig.microCMSApiKey,
    });

    // get number of categories
    const preRes = await client.get<APIResponseList<CategoryAPIResponse>>({
      endpoint: "category",
      queries: {
        limit: 0,
      },
    });
    const totalCount = preRes.totalCount;

    // get all categories
    const res = await client.get<APIResponseList<CategoryAPIResponse>>({
      endpoint: "category",
      queries: {
        limit: totalCount,
      },
    });

    // create category array
    var categories: Category[] = [];
    categories = res.contents.map((content) => {
      return {
        id: content.id,
        name: content.name,
      };
    });

    return categories;
  }

  // fetch category data by id
  async fetchCategoryById(id :string): Promise<Category> {
    const client = createClient({
      serviceDomain: APIConfig.microCMSServiceDomain,
      apiKey: APIConfig.microCMSApiKey,
    });

    const res = await client.get<CategoryAPIResponse>({
      endpoint: "category",
      contentId: id,
    });

    return {
      id: res.id,
      name: res.name,
    }
  }
}
