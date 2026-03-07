// Usemos algunas características de ES6
import { getAvg } from './averageService.js';
import "./mystyles.css";

const scores = [90, 75, 60, 99, 94, 30];
const averageScore = getAvg(scores);
const messageToDisplay = `average score ${averageScore}`;

const messageElement = document.createElement("p");
messageElement.textContent = messageToDisplay;
document.body.appendChild(messageElement);