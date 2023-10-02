import { NextResponse } from 'next/server';
import { PostType } from '@/store/PostsStore';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');

  let currentPosts = await fetch(`https://jsonplaceholder.typicode.com/posts`).then((res) =>
    res.json(),
  );

  if (query) {
    currentPosts = currentPosts.filter((post: PostType) =>
      post.title.toLowerCase().includes(query.toLowerCase()),
    );
  }

  return NextResponse.json(currentPosts);
}

export async function POST(req: Request) {
  const body = await req.json();

  return NextResponse.json({ body });
}
