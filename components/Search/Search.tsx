'use client';

import { ChangeEvent, FormEvent, useState } from 'react';

type SearchProps = {
  handleSubmitSearch: (search: string) => void;
};

const Search = ({ handleSubmitSearch }: SearchProps) => {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmitSearch(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="search" value={search} onChange={onChangeSearch} />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
