import * as React from 'react';
import { AppLayout } from '#layouts';
import { SearchContainer } from '#pods/search';
import { CollectionContainer } from '#pods/collections/collection.container';

interface Props {
  selectedTab: number;
}

export const CollectionScene = ({ selectedTab }) => (
  <AppLayout>
    <SearchContainer />
    <CollectionContainer selectedTab={selectedTab} />
  </AppLayout>
);
