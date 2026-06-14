import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { switchRoutes } from "./routes";
import { ListScene } from "@/scenes";
import { mockDataKitties, mockDataPuppies } from "@/mock/mockData";

export const SceneRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path={switchRoutes.listKitties}
          element={<ListScene data={mockDataKitties} />}
        />
        <Route
          path={switchRoutes.listPuppies}
          element={<ListScene data={mockDataPuppies} />}
        />

        <Route path="*" element={<Navigate to={switchRoutes.listKitties} />} />
      </Routes>
    </Router>
  );
};
