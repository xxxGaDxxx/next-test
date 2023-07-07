'use client';

import PostsStore from '@/store/PostsStore';
import { observer } from 'mobx-react-lite';
import Search from '@/components/Search/Search';

const PostsSearch = () => {
  const { getPostsBySearch } = PostsStore;

  const handleSubmitSearch = async (search: string) => {
    await getPostsBySearch(search);
  };

  return (
    <>
      <Search handleSubmitSearch={handleSubmitSearch} />
    </>
  );
};

export default observer(PostsSearch);
