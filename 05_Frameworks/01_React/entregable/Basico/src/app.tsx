import React from "react";
import { AuthProvider } from "@/pods/login/login.provider";
import { SceneRouter } from "./router";
import { OrganizationProvider } from "./pods/search/search.provider";
import "@/global-css/styles.css";

export const App = () => {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
};

export const AppRouter: React.FC = () => {
  return (
    <OrganizationProvider>
      <SceneRouter />
    </OrganizationProvider>
  );
};
