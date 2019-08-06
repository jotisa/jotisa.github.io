// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.
myDog.bark = "woof";

var ladrido = myDog.bark;
var mostrar = document.getElementById("js_mostrado");
mostrar.innerText = ladrido;