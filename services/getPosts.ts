export const fetchAllPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60,
    },
  } as RequestInit);

  if (!response.ok) throw new Error('Unable to fetch posts.');
  return response.json();
};

export const fetchPostById = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

  if (!response.ok) throw new Error('Unable to fetch post.');

  return response.json();
};

export const fetchPostsBySearch = async (search: string) => {
  const response = await fetch(`/api/posts?q=${search}`);

  if (!response.ok) throw new Error('Unable to fetch posts.');

  return response.json();
};
