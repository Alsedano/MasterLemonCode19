import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import { switchRoutes } from './routes';
import { CharacterCollectionScene, CharacterScene } from '#scenes';

export const RouterComponent: React.FunctionComponent = () => {
  return (
    <HashRouter>
      <Routes>
        <Route
          path={switchRoutes.characterCollection}
          element={<CharacterCollectionScene />}
        />
        <Route
          path={switchRoutes.createCharacter}
          element={<CharacterScene isReadOnly={false} />}
        />
        <Route
          path={switchRoutes.detail}
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
      </Routes>
    </HashRouter>
  );
};
