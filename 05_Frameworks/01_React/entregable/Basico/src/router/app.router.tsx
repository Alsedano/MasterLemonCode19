import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ListPage, DetailPage } from "@/scenes";
import { switchRoutes } from "./routes";

export const AppRouter2: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={switchRoutes.list} element={<ListPage />} />
        <Route path={switchRoutes.detail} element={<DetailPage />} />
        <Route path="*" element={<Navigate to={switchRoutes.root} />} />
      </Routes>
    </Router>
  );
};
