import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { routes, switchRoutes } from "./routes";
import { DetailScene, ListScene } from "@/scenes";
import { GITHUB } from "@/common/constants";
import { DetailRickMortyScene } from "@/scenes/detail.sceneRM";

export const SceneRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.list} element={<ListScene />} />
        <Route path={switchRoutes.detail} element={<DetailScene />} />
        <Route
          path={switchRoutes.detailRM}
          element={<DetailRickMortyScene />}
        />
        <Route path={switchRoutes.list} element={<ListScene />} />
        <Route path="*" element={<Navigate to={routes.list(GITHUB)} />} />
      </Routes>
    </Router>
  );
};
