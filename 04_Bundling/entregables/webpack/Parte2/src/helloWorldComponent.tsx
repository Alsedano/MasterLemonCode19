import React from "react";
import * as classes from "./helloWorldStyles.scss";
import logoImg from "./content/logo.png";

export const HelloWorldComponent: React.FC = () => {
  return (
    <div>
      <img src={logoImg} alt="logo_Lemoncode" />
      <h1 className={classes.titulo}>Hola mundo</h1>
      <p>Api server is {process.env.API_BASE}</p>
    </div>
  );
};

console.log(`Api base: ${process.env.API_BASE}`);
