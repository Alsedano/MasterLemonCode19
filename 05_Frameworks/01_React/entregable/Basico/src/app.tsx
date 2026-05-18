import React from "react";
import { AuthProvider } from "@/pods/login/login.provider";
import { AppRouter2 } from "./router";
import { OrganizationProvider } from "./pods/search/search.provider";

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
