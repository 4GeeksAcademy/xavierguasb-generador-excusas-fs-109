import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
let action = ['ate ', 'peed ', 'crushed ', 'broke '];
let what = ['my homework ', 'my phone ', 'the car '];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

let whoR = obtenerNumeroAleatorio(who);
let actionR = obtenerNumeroAleatorio(action);
let whatR = obtenerNumeroAleatorio(what);
let whenR = obtenerNumeroAleatorio(when);

let randomsentence = whoR + "" + actionR + "" + whatR + "" + whenR;

  // document.getElementById("excuse").innerHTML = randomsentence ();

let resultado = document.getElementById("excuse");
resultado.innerHTML = randomsentence;
  };

function obtenerNumeroAleatorio (aleatorio){

  return aleatorio[Math.floor(Math.random() * aleatorio.length)];

};


// function excusas () {

  // let who = ['The dog ', 'My grandma ', 'The mailman ', 'My bird '];
  // let action = ['ate ', 'peed ', 'crushed ', 'broke '];
  // let what = ['my homework ', 'my phone ', 'the car '];
  // let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

//   let whoR = who[Math.floor(Math.random() * who.length)];
//   let actionR = action[Math.floor(Math.random() * action.length)];
//   let whatR = what[Math.floor(Math.random() * what.length)];
//   let whenR = when[Math.floor(Math.random() * when.length)];

// return whoR + "" + actionR + "" + whatR + "" + whenR;

// };





  console.log("Hello Rigo from the console!");



