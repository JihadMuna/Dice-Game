//  Rules:
// 1- The game has 2 players, playing in rounds.
// 2- In each turn, a player rolls 2 dice as many times as he
// wishes.
// 3- Each result will get added to his round’s score.
// 4- But if the player rolls a double six all his round’s score
// gets lost.
// 5- After that, it's the next player’s turn.
// 6- A player can choose to ‘Hold’, which means that his
// round’s score gets added to his global score.
// 7- After that, it's the next player's turn.
// 8- The first player to reach 100 points wins.
// 9- Add an input field where players can set the winning
// score to change the predefined score of 100.
// 10- Players can create a new game whenever they want to.
let scores, roundScore, activePlayer, gamePlaying, winningScore;

// Initialize the game
function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;
  winningScore = parseInt(document.getElementById('winning-score').value);

  document.getElementById('score1').textContent = '0';
  document.getElementById('score2').textContent = '0';
  document.getElementById('current1').textContent = '0';
  document.getElementById('current2').textContent = '0';
  document.getElementById('name1').textContent = 'Player 1';
  document.getElementById('name2').textContent = 'Player 2';

  hideDice();
  enableWinningScoreInput(true);
}

// Roll the dice
document.getElementById('btn-roll').addEventListener('click', () => {
  if (gamePlaying) {
    const dice1 = Math.floor(Math.random() * 6) + 1;
    const dice2 = Math.floor(Math.random() * 6) + 1;

    displayDice([dice1, dice2]);

    if (dice1 !== 6 || dice2 !== 6) {
      roundScore += dice1 + dice2;
      document.getElementById(`current${activePlayer + 1}`).textContent = roundScore;
    } else {
      scores[activePlayer] = 0;
      document.getElementById(`score${activePlayer + 1}`).textContent = '0';
      switchPlayer();
    }
  }
});

// Hold the score
document.getElementById('btn-hold').addEventListener('click', () => {
  if (gamePlaying) {
    scores[activePlayer] += roundScore;
    document.getElementById(`score${activePlayer + 1}`).textContent = scores[activePlayer];

    if (scores[activePlayer] >= winningScore) {
      gamePlaying = false;
      document.getElementById(`name${activePlayer + 1}`).textContent = `Player ${activePlayer + 1} Wins!`;
      hideDice();
    } else {
      switchPlayer();
    }
  }
});

// Start a new game
document.getElementById('btn-new').addEventListener('click', init);

// Initialize the game when the page loads
init();

// Switch to the other player's turn
function switchPlayer() {
  activePlayer = 1 - activePlayer;
  roundScore = 0;

  document.getElementById('current1').textContent = '0';
  document.getElementById('current2').textContent = '0';

  document.getElementById('player1').classList.toggle('player-active');
  document.getElementById('player2').classList.toggle('player-active');
}

// Hide the dice images
function hideDice() {
  document.getElementById('dice1').style.display = 'none';
  document.getElementById('dice2').style.display = 'none';
}

// Display the dice images based on the rolled values
function displayDice(diceValues) {
  document.getElementById('dice1').style.display = 'block';
  document.getElementById('dice2').style.display = 'block';
  document.getElementById('dice1').src = `sources/dice${diceValues[0]}.png`;
  document.getElementById('dice2').src = `sources/dice${diceValues[1]}.png`;
}

// Enable or disable the winning score input
function enableWinningScoreInput(enable) {
  const input = document.getElementById('winning-score');
  input.disabled = !enable;
  input.style.backgroundColor = enable ? 'white' : 'lightgray';
}
