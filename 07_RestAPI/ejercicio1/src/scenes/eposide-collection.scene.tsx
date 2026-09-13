import * as React from 'react';
import { AppLayout } from '#layouts';
import { SearchContainer } from '#pods/search';
import { EpisodeCollectionContainer } from '#pods/episode-collection/episode-collection.container.js';

export const EpisodeCollectionScene = () => (
  <AppLayout>
    <SearchContainer />
    <EpisodeCollectionContainer />
  </AppLayout>
);
