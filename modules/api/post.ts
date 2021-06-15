import PostRepository from "../repository/post";
import { createClient } from "microcms-js-sdk";
import { Post } from "../entity/post";
import { APIConfig } from "./config";
import { APIResponseList } from "./types";
import { CategoryAPIResponse } from "./category";
import { stringify } from "remark";

export type PostAPIResponse = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  body: string;
  category: CategoryAPIResponse[];
};

export class PostAPIRepository implements PostRepository {
  async fetchAllPosts(): Promise<Post[]> {
    const client = createClient({
      serviceDomain: APIConfig.microCMSServiceDomain,
      apiKey: APIConfig.microCMSApiKey,
    });

    // get number of posts
    const preRes = await client.get<APIResponseList<PostAPIResponse>>({
      endpoint: "post",
      queries: {
        limit: 0,
      },
    });
    const totalCount = preRes.totalCount;

    // get number of posts
    const res = await client.get<APIResponseList<PostAPIResponse>>({
      endpoint: "post",
      queries: {
        limit: totalCount,
      },
    });

    // create Post array
    var posts: Post[] = [];
    posts = res.contents.map((content) => {
      return {
        id: content.id,
        title: content.title,
        contentHtml: content.body,
        createdAt: content.publishedAt,
        updatedAt: content.updatedAt,
        categories: content.category.map((cat) => {
          return {
            id: cat.id,
            name: cat.name,
          };
        }),
      };
    });

    return posts;
  }

  async fetchPostById(id: string): Promise<Post> {
    const client = createClient({
      serviceDomain: APIConfig.microCMSServiceDomain,
      apiKey: APIConfig.microCMSApiKey,
    });

    const res = await client.get<PostAPIResponse>({
      endpoint: "post",
      contentId: id,
    });

    return {
      id: res.id,
      title: res.title,
      contentHtml: res.body,
      createdAt: res.publishedAt,
      updatedAt: res.updatedAt,
      categories: res.category.map((cat) => {
        return {
          id: cat.id,
          name: cat.name,
        };
      }),
    };
  }
}
