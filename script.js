let player1Score = Math.floor(Math.random() * 6) + 1;
let player2Score = Math.floor(Math.random() * 6) + 1;

let player1ImagePath = "./images/dice" + player1Score + ".png";
let player2ImagePath = "./images/dice" + player2Score + ".png";

console.log(player1ImagePath);
console.log(player2ImagePath);

let img1 = document.querySelectorAll("img")[0]
img1.setAttribute("src", player1ImagePath);
let img2 = document.querySelectorAll("img")[1]
img2.setAttribute("src", player2ImagePath);

let winnerDeclaration = "";
if (player1Score == player2Score) winnerDeclaration = "DRAW!";
else if (player1Score > player2Score) winnerDeclaration = "🚩Player 1 WINS!🏳️";
else winnerDeclaration = "🏳️Player 2 WINS!🚩";


document.querySelector("h1").innerHTML = winnerDeclaration;