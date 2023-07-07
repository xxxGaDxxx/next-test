import { NextResponse } from 'next/server';

const API_KEY = process.env.OMDB_SECRET;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('s');

  const movies = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`).then((res) =>
    res.json(),
  );

  return NextResponse.json(movies);
}
