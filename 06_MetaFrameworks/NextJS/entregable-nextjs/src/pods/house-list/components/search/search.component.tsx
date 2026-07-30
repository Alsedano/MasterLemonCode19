import React, { useRef } from 'react';

export const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [textSearch, setTextSearch] = React.useState('');

  /*   const filterByName = (val: string) => {
    setTextSearch(val);
    navigate({
      to: '/houses',
      search: (prev) => ({ ...prev, filter: val }),
    });
  }; */

  return (
    <form className="flex w-md items-center rounded-full border border-gray-300 bg-white px-3 py-2 shadow-sm">
      <input
        ref={inputRef}
        defaultValue={textSearch}
        className="ml-1 flex-1 border-none bg-transparent outline-none"
        placeholder="Search"
      />
      <button
        type="button"
        className="rounded-full p-2 text-gray-600 hover:bg-gray-100"
        aria-label="search"
        /* onClick={() => filterByName(inputRef.current?.value || '')} */
      >
        <img src="/icons8-search.png" className="size-4" />
      </button>
    </form>
  );
};
