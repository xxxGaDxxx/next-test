import { Metadata } from 'next';
import MoviesSearch from '@/components/Search/MoviesSearch';
import MoviesList from '@/components/MoviesPage/MoviesList';

export const metadata: Metadata = {
  title: 'Movies | Next App',
};

export default function Movies() {
  return (
    <>
      <h1>Movies pages</h1>
      <MoviesSearch />
      <MoviesList />
    </>
  );
}
