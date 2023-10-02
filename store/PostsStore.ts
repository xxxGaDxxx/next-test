import { makeAutoObservable } from 'mobx';
import { fetchAllPosts, fetchPostsBySearch } from '@/services/getPosts';

export type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};
class PostsStore {
  posts: PostType[] = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getAllPosts = async () => {
    this.loading = true;
    try {
      this.posts = await fetchAllPosts();
    } catch (e) {
      throw e;
    } finally {
      this.loading = false;
    }
  };

  getPostsBySearch = async (search: string) => {
    this.loading = true;
    try {
      this.posts = await fetchPostsBySearch(search);
    } catch (e) {
      throw e;
    } finally {
      this.loading = false;
    }
  };
}

export default new PostsStore();
