import * as React from 'react';
import { AppLayout } from '#layouts';
import { SearchContainer } from '#pods/search';
import { CollectionContainer } from '#pods/collections/collection.container';

export const CollectionScene = () => (
  <AppLayout>
    <SearchContainer />
    <CollectionContainer />
  </AppLayout>
);
