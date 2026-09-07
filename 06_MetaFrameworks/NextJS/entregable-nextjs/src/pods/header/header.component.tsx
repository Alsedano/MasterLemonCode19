import { routeConstants } from '#core/constants';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export const Header: React.FC = () => {
  return (
    <div className="flex h-10 flex-row items-center justify-between bg-sky-400 px-2.5 py-2.5">
      <Link href={routeConstants.houseList}>
        <Image
          src="/home-logo.png"
          className="w-10"
          alt="Home logo"
          width={10}
          height={10}
        />
      </Link>
      <h1 className="text-xl font-semibold text-white">Rent a house</h1>
      <div></div>
    </div>
  );
};
