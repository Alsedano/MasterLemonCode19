import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LoginPage } from "./login";
import { ListPage } from "./list";
import { DetailPage } from "./detail";
import { OrganizationProvider } from "./search.provider";
import { AuthProvider } from "./auth.provider";

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/list"
          element={
            <OrganizationProvider>
              <ListPage />
            </OrganizationProvider>
          }
        />
        <Route
          path="/detail/:id"
          element={
            <OrganizationProvider>
              <DetailPage />
            </OrganizationProvider>
          }
        />
        <Route path="*" element={<Navigate to="/list" />} />
      </Routes>
    </Router>
  );
};
