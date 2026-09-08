import * as React from 'react';
import { AppLayout } from '#layouts';
import { CharacterCollectionContainer } from '#pods/character-collection';
import { SearchContainer } from '#pods/search';

export const CharacterCollectionScene = () => (
  <AppLayout>
    <SearchContainer />
    <CharacterCollectionContainer />
  </AppLayout>
);
