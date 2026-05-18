import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { switchRoutes } from "./routes";
import { DetailPage, ListScene } from "@/scenes";

export const AppRouter2: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.list} element={<ListScene />} />
        <Route path={switchRoutes.detail} element={<DetailPage />} />
        <Route path="*" element={<Navigate to={switchRoutes.list} />} />
      </Routes>
    </Router>
  );
};
