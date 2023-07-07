import { Metadata } from 'next';
import Image from 'next/image';
const API_KEY = process.env.OMDB_SECRET;

async function getDataMovies(id: string) {
  const response = await fetch(`http://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);

  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params: { id } }: Props): Promise<Metadata> {
  const post = await getDataMovies(id);
  return {
    title: post.title,
  };
}

export default async function Post({ params: { id } }: Props) {
  const movie = await getDataMovies(id);

  return (
    <>
      <h1>{movie.Title}</h1>
      <Image src={movie.Poster} alt={movie.Title} width={300} height={450} />
    </>
  );
}
