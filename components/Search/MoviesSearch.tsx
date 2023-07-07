'use client';

import { observer } from 'mobx-react-lite';
import Search from '@/components/Search/Search';
import MoviesStore from '@/store/MoviesStore';

const MoviesSearch = () => {
  const { getMoviesBySearch } = MoviesStore;

  const handleSubmitSearch = async (search: string) => {
    await getMoviesBySearch(search);
  };

  return (
    <>
      <Search handleSubmitSearch={handleSubmitSearch} />
    </>
  );
};

export default observer(MoviesSearch);
