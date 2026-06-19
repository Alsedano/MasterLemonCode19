import React from "react";
import { SearchProvider } from "./pods/search/search.provider";
import "@/global-css/styles.css";
import { AuthProvider } from "./pods/login/login.provider";
import { AppScene } from "./scenes/app.scene";
import { SceneRouter } from "./router";

export const App = () => {
  return <AppRouter />;
};

export const AppRouter: React.FC = () => {
  return (
    <AuthProvider>
      <SearchProvider>
        <AppScene>
          <SceneRouter />
        </AppScene>
      </SearchProvider>
    </AuthProvider>
  );
};
