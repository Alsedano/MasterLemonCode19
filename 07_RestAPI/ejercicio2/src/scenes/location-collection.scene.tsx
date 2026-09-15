import * as React from 'react';
import { AppLayout } from '#layouts';
import { SearchContainer } from '#pods/search';
import { LocationCollectionContainer } from '#pods/location-collection';

export const LocationCollectionScene = () => (
  <AppLayout>
    <SearchContainer />
    <LocationCollectionContainer />
  </AppLayout>
);
