import { makeAutoObservable } from 'mobx';
import { fetchAllMovies, fetchMoviesBySearch } from '@/services/getMovies';

export type MovieType = {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
};

class MoviesStore {
  movies: MovieType[] = [];
  loading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getAllMovies = async () => {
    this.loading = true;
    try {
      const data = await fetchAllMovies();
      this.movies = data?.Search;
    } catch (e) {
      throw e;
    } finally {
      this.loading = false;
    }
  };

  getMoviesBySearch = async (search: string) => {
    this.loading = true;
    try {
      const data = await fetchMoviesBySearch(search);
      this.movies = data?.Search;
    } catch (e) {
      throw e;
    } finally {
      this.loading = false;
    }
  };
}

export default new MoviesStore();
