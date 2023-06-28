'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import PostsStore from '@/store/PostsStore';
import { observer } from 'mobx-react-lite';

const PostsSearch = () => {
  const { getPostsBySearch } = PostsStore;
  const [search, setSearch] = useState('');

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await getPostsBySearch(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="search" value={search} onChange={onChangeSearch} />
      <button type="submit">Search</button>
    </form>
  );
};

export default observer(PostsSearch);
