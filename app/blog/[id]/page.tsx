import { Metadata } from 'next';
import { fetchAllPosts, fetchPostById } from '@/services/getPosts';
import { PostType } from '@/store/PostsStore';

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const posts: PostType[] = await fetchAllPosts();

  return posts.map((post) => ({
    slug: post.id.toString(),
  }));
}

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const post = await fetchPostById(id);
  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await fetchPostById(id);

  return (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  );
}
