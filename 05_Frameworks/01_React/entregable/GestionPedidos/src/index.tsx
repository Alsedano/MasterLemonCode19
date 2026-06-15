import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./global-css/styles.scss";

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(<App />);
