import React from "react";
import * as classes from "./helloWorldStyles.scss";

export const HelloWorldComponent: React.FC = () => {
  return (
    <div>
      <img
        src="./content/logo.png"
        alt="logo_Lemoncode"
      />
      <h1 className={classes.titulo}>Hola mundo</h1>
    </div>
  );
};
