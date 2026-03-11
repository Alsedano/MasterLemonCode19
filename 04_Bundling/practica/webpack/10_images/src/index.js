// Usemos algunas características de ES6
import { getAvg } from './averageService.js';
import logoImg from './content/logo_1.png';
import "./mystyles.scss";

const scores = [90, 75, 60, 99, 94, 30];
const averageScore = getAvg(scores);
const messageToDisplay = `average score ${averageScore}`;

const messageElement = document.createElement("p");
messageElement.textContent = messageToDisplay;
document.body.appendChild(messageElement);

const img = document.createElement('img');
img.src = logoImg;
document.getElementById('imgContainer').appendChild(img);