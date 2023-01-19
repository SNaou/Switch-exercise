'use strict';

console.log("Please tell us your favourite animal:");
console.log("Choose one of: dog, cat, fish, hamster, horse or bunny");
const favouriteAnimal = prompt("");


// Write your code here
switch (favouriteAnimal) {
  case "dog":
  case "cat":
  case "hamster":
  case "horse":
  case "bunny":
    
    console.log("My favourite animal has hair.");
    break;
  default:
    console.log("My favourite animal does not have hair.");
}

switch (favouriteAnimal) {
  case "dog":
  case "cat":
  case "hamster":
  case "fish":
  case "bunny":
    
    console.log("My favourite animal fits in a car.");
    break;
  default:
    console.log("My favourite animal does not fit in a car.");
}

switch (favouriteAnimal) {
  case "dog":
  case "fish":
  case "horse": 
    
    console.log("My favourite animal likes to swim.");
    break;
  default:
    console.log("My favourite animal does not like to swim.");
}