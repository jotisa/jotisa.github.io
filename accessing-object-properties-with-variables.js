var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};
var playerNumber = 16;       // Change this Line
var player = testObj[playerNumber];   // Change this Line
var mostrar = document.getElementById("js_mostrado");
mostrar.innerText = player;