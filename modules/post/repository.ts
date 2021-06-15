import { Post } from "./model"

export default interface PostRepository {
  fetchAllPosts(): Promise<Post[]>
  fetchPostById(id: string): Promise<Post>
}
