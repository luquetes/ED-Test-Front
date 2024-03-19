'use client';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useState } from 'react';

type Props = {
    placeholder: string;
}

const ProductSearch = ({ placeholder }: Props) => {
  const [searchValue, setSearchValue] = useState('');
  const [sortValue, setSortValue] = useState('');
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    if (searchValue) {
      params.set('title', searchValue);
    } else {
      params.delete('title');
    }
    if (sortValue) {
      const sortBy = sortValue.split(':')[0];
      const order = sortValue.split(':')[1];
      params.set('sortBy', sortBy);
      params.set('order', order);
    } else {
      params.delete('sortBy');
      params.delete('order');
    }
    replace(`${pathname}?${params.toString()}`);
  }, [pathname, replace, searchParams, searchValue, sortValue]);

  return (
    <div className="join">
      <input
        className="input input-bordered w-full max-w-xs join-item"
        placeholder={placeholder}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
        defaultValue={searchParams.get('query')?.toString()}
      />
      <select className="select select-bordered join-item" onChange={(e) => setSortValue(e.target.value)}>
        <option disabled selected>Sort by</option>
        <option value="title:asc">Alphabetically(A-Z)</option>
        <option value="title:desc">Alphabetically(Z-A)</option>
        <option value="price:asc">Price: Low to High</option>
        <option value="price:desc">Price: High to Low</option>
      </select>
      <button type="button" onClick={handleSearch} className="btn join-item rounded-r-full">Search</button>
    </div>
  );
};

export default ProductSearch;
