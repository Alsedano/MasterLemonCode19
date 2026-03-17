import "./helloWorldStyles.scss";
import logoImg from "./content/logo.png";
import config from "./env-config";

export const HelloWorldComponent: React.FC = () => {
  return (
    <div>
      <img src={logoImg} alt="logo_Lemoncode" />
      <h1 className="titulo">Hola mundo</h1>
      <p>Api server is {config.API_BASE}</p>
    </div>
  );
};

console.log(`Api server is ${config.API_BASE}`);

//const compError: number = "error";