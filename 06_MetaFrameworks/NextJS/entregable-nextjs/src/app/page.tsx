import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { routeConstants } from '#core/constants';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Rent a house - Home',
};

const RootPage = () => {
  redirect(routeConstants.houseList);
};

export default RootPage;
