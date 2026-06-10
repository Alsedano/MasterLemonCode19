import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { routes, switchRoutes } from "./routes";
import { DetailScene, ListRickMortyScene, ListScene } from "@/scenes";
import { DetailRickMortyScene } from "@/scenes/detailRM.scene";

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
        <Route path={switchRoutes.listRM} element={<ListRickMortyScene />} />
        <Route path="*" element={<Navigate to={routes.list} />} />
      </Routes>
    </Router>
  );
};
