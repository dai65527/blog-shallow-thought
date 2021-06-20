import PostRepository from "../repository/post";

import { Post } from "../entity/post";

export default class PostService {
  constructor(private postRepository: PostRepository) {}

  async getAllPosts(): Promise<Post[]> {
    return this.postRepository.fetchAllPosts();
  }

  async getPostById(id: string): Promise<Post> {
    return this.postRepository.fetchPostById(id);
  }

  async getPostsByCategoryId(categoryId: string): Promise<Post[]> {
    const allPosts = await this.getAllPosts();
    const posts = allPosts.filter((post) => {
      for (const category of post.categories) {
        if (category.id == categoryId) {
          return true;
        }
      }
    });
    return posts;
  }
}
