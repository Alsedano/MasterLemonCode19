import logoImg from "./content/logo.png";
import config from "./env-config";
import "./myStyles.scss";

const img = document.createElement("img");
img.src = logoImg;
document.getElementById("root").appendChild(img);

const title = document.createElement("h1");
title.innerText = "Hola mundo"
title.className = "titulo";
document.getElementById("root").appendChild(title);

const parag = document.createElement("p");
parag.innerText = `Api server is ${config.API_BASE}`
document.getElementById("root").appendChild(parag);

console.log(`Api server is ${config.API_BASE}`);