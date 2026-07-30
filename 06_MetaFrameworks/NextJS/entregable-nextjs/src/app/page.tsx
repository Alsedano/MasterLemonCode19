import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { routeConstants } from '#core/constants';

export const metadata: Metadata = {
  title: 'Rent a house - Home',
};

const RootPage = () => {
  return (
    <>
      <h2>Hello from Nextjs</h2>
      <Link href="/houses">Navigate to house list</Link>
    </>
  );
};

export default RootPage;
