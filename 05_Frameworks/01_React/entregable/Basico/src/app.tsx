import React from "react";
import { SceneRouter } from "./router";
import { OrganizationProvider } from "./pods/search/search.provider";
import "@/global-css/styles.css";
import { AuthProvider } from "./pods/login/login.provider";

export const App = () => {
  return <AppRouter />;
};

export const AppRouter: React.FC = () => {
  return (
    <AuthProvider>
      <OrganizationProvider>
        <SceneRouter />
      </OrganizationProvider>
    </AuthProvider>
  );
};
