'use client';
import React, { useRef } from 'react';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export const Search: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const filterByName = (val: string) => {
    const params = new URLSearchParams(searchParams);
    if (val) {
      params.set('filter', val);
    } else {
      params.delete('filter');
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <form className="flex w-md items-center rounded-full border border-gray-300 bg-white px-3 py-2 shadow-sm">
      <input
        ref={inputRef}
        defaultValue={searchParams.get('filter')?.toString()}
        className="ml-1 flex-1 border-none bg-transparent outline-none"
        placeholder="Search"
      />
      <button
        type="button"
        className="rounded-full p-2 text-gray-600 hover:bg-gray-100"
        aria-label="search"
        onClick={() => filterByName(inputRef.current?.value || '')}
      >
        <Image
          src="/icons8-search.png"
          className="size-4"
          alt="icon search"
          width={4}
          height={4}
        />
      </button>
    </form>
  );
};
