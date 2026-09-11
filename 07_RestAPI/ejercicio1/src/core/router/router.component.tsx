import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import {
  CharacterCollectionScene,
  CharacterScene,
  CollectionScene,
} from '#scenes';
import { SearchProvider } from '#pods/search/search.provider';
import { LocationScene } from '#scenes/location.scene.js';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.characterCollection}
          element={
            <SearchProvider>
              <CollectionScene />
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
      </Routes>
    </HashRouter>
  );
};
