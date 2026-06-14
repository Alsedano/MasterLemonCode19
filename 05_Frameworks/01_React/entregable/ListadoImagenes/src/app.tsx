import React from "react";
import { SceneRouter } from "./router";
import "@/global-css/styles.css";
import { ShoppingCartContainer } from "./pods/shoppingCart";
import { AppLayout } from "./layouts";
import { ShoppingProvider } from "./core";

export const App = () => {
  return (
    <>
      <AppLayout>
        <ShoppingProvider>
          <AppRouter />
          <ShoppingCartContainer />
        </ShoppingProvider>
      </AppLayout>
    </>
  );
};

export const AppRouter: React.FC = () => {
  return <SceneRouter />;
};
