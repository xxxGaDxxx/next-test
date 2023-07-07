export const fetchAllMovies = async () => {
  const response = await fetch('/api/movies', {
    next: {
      revalidate: 60,
    },
  } as RequestInit);

  if (!response.ok) throw new Error('Unable to fetch posts.');

  return response.json();
};

export const fetchMoviesBySearch = async (search: string) => {
  const response = await fetch(`/api/movies?s=${encodeURIComponent(search || '*')}`);

  if (!response.ok) throw new Error('Unable to fetch posts.');

  return response.json();
};
