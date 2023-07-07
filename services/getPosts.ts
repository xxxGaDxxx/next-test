export const fetchAllPosts = async () => {
  const response = await fetch('/api/posts', {
    next: {
      revalidate: 60,
    },
  } as RequestInit);

  if (!response.ok) throw new Error('Unable to fetch posts.');
  return response.json();
};

export const fetchPostsBySearch = async (search: string) => {
  const response = await fetch(`/api/posts?q=${search}`);

  if (!response.ok) throw new Error('Unable to fetch posts.');

  return response.json();
};
