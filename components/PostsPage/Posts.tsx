'use client';

import Link from 'next/link';
import PostsStore from '@/store/PostsStore';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

const Posts = () => {
  const { posts, loading, getAllPosts } = PostsStore;

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default observer(Posts);
