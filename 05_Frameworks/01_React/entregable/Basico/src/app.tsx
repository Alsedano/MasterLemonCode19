import React from "react";
import { AuthProvider } from "@/scenes/auth.provider";
import { OrganizationProvider } from "./scenes/search.provider";
import { AppRouter2 } from "./router";

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
      <AppRouter2 />
    </OrganizationProvider>
  );
};
