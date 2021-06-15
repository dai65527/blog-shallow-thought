import { Post } from "../entity/post"

export default interface PostRepository {
  fetchAllPosts(): Promise<Post[]>
  fetchPostById(id: string): Promise<Post>
}
