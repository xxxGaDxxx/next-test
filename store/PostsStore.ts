import { makeAutoObservable } from 'mobx';
import { fetchAllPosts, fetchPostsBySearch } from '@/services/getPosts';

class PostsStore {
  posts = [];
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
