/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

score = [0, 0];
roundScore = 0;
activePlayer = 0;

document.getElementById("score-0").textContent = 0;
document.getElementById("score-1").textContent = 0;
document.getElementById("current-0").textContent = 0;
document.getElementById("current-0").textContent = 0;

document.querySelector(".dice").style.display = "none";

document.querySelector(".btn-roll").addEventListener("click", function () {
  // generate random number

  dice = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".dice").style.display = "block";
  document.querySelector(".dice").src = "dice-" + dice + ".png";

  document.getElementById("current-" + activePlayer).textContent = dice;

  if (dice != 1) {
    roundScore += dice;
    document.getElementById("score-" + activePlayer).textContent = roundScore;
    score[activePlayer] = roundScore;
  } else {
    // roundScore = 0;
    nextPlayer();
  }

  // document.querySelector(".dice").style.display = "none";
});

document.querySelector(".btn-hold").addEventListener("click", function () {
  if (score[activePlayer] >= 20) {
    document.getElementById("name-" + activePlayer).textContent = "Winner!";
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.add("winner");
    document
      .querySelector(".player-" + activePlayer + "-panel")
      .classList.remove("active");
    document.querySelector(".dice").style.display = "none";
  } else {
    nextPlayer();
  }
});

function nextPlayer() {
  activePlayer = activePlayer === 0 ? 1 : 0;

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");
}
