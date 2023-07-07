'use client';

import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import MoviesStore, { MovieType } from '@/store/MoviesStore';
import Link from 'next/link';

const MoviesList = () => {
  const { loading, movies, getAllMovies } = MoviesStore;

  useEffect(() => {
    getAllMovies();
  }, [getAllMovies]);

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {movies?.map((movi: MovieType) => (
            <li key={movi.imdbID}>
              <Link href={`/movies/${movi.imdbID}`}>{movi.Title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default observer(MoviesList);
