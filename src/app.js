import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {

  let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
  let action = ['ate ', 'peed ', 'crushed ', 'broke '];
  let what = ['my homework ', 'my phone ', 'the car '];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

  let whoRandom = getRandomNumber(who);
  let actionRandom = getRandomNumber(action);
  let whatRandom = getRandomNumber(what);
  let whenRandom = getRandomNumber(when);

  let randomExcuse = whoRandom + "" + actionRandom + "" + whatRandom + "" + whenRandom;

  let randomSentence = document.getElementById("excuse");
  randomSentence.innerHTML = randomExcuse;
};

function getRandomNumber(Random) {

  return Random[Math.floor(Math.random() * Random.length)];

};

// console.log("Hello Rigo from the console!");



