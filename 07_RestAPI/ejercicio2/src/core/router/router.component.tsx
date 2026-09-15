import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterScene, CollectionScene, EpisodeScene } from '#scenes';
import { SearchProvider } from '#pods/search/search.provider';
import { LocationScene } from '#scenes/location.scene.js';
import { EpisodeCollectionScene } from '#scenes/eposide-collection.scene.js';
import { LocationCollectionScene } from '#scenes/location-collection.scene.js';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.characterCollection}
          element={
            <SearchProvider>
              <CollectionScene selectedTab={0} />
            </SearchProvider>
          }
        />
        <Route
          path={switchRoutes.locationCollection}
          element={
            <SearchProvider>
              <CollectionScene selectedTab={1} />
            </SearchProvider>
          }
        />
        <Route
          path={switchRoutes.episodeCollection}
          element={
            <SearchProvider>
              <CollectionScene selectedTab={2} />
            </SearchProvider>
          }
        />
        <Route
          path={switchRoutes.createCharacter}
          element={<CharacterScene isReadOnly={false} />}
        />
        <Route
          path={switchRoutes.characterDetail}
          element={<CharacterScene isReadOnly={true} />}
        />
        <Route
          path={switchRoutes.editCharacter}
          element={<CharacterScene isReadOnly={false} />}
        />
        <Route
          path={switchRoutes.root}
          element={<Navigate to={switchRoutes.characterCollection} />}
        />
        <Route
          path={switchRoutes.locationDetail}
          element={<LocationScene isReadOnly={true} />}
        />
        <Route
          path={switchRoutes.episodeDetail}
          element={<EpisodeScene isReadOnly={true} />}
        />
      </Routes>
    </HashRouter>
  );
};
