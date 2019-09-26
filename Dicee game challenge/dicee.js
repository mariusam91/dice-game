var randomNumber1 = Math.floor(Math.random()*6)+1;

var randomNumber2 = Math.floor(Math.random()*6)+1;

var player1 = document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
var player2 = document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 is a winner!";
}

else if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerText = "We have a draw!";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 is a winner!";
} else {}
