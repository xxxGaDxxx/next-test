import { Metadata } from 'next';
import Posts from '@/components/PostsPage/Posts';
import PostsSearch from '../../components/Search/PostsSearch';

export const metadata: Metadata = {
  title: 'Blog | Next App',
};

export default function Blog() {
  return (
    <>
      <h1>Blog pages</h1>
      <PostsSearch />
      <Posts />
    </>
  );
}
