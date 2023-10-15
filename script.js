/**
 * Rules:
1- The game has 2 players, playing in rounds.
2- In each turn, a player rolls 2 dice as many times as he
wishes.
3- Each result will get added to his round’s score.
4- But if the player rolls a double six all his round’s score
gets lost.
5- After that, it's the next player’s turn.
6- A player can choose to ‘Hold’, which means that his
round’s score gets added to his global score.
7- After that, it's the next player's turn.
8- The first player to reach 100 points wins.
9- Add an input field where players can set the winning
score to change the predefined score of 100.
10- Players can create a new game whenever they want to.
-------------------------------
>>> Extra:
1. Add how many times the player has won the game
2. Add local storage so our data will be persistent.
3. Add an AI to compete against
4. if you get 6 and 6 hold your event listeners for 1
second and display a message that you got 6 and 6.
Can be a funny gif or anything you can think of.
5. Add background music and sound effects.
6. Any other additions are welcome. Go crazy!
*/
let scores;
let roundScore;
let activePlayer;
let gamePlaying;
let winningScore;

// Initialize the game
function init(){
    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlayer = true;
    winningScore = 100; // Default winning score
    
    document.querySelector('#score1').textContent = '0';
    document.querySelector('#score2').textContent = '0';
document.querySelector('#current1').textContent = '0';
document.querySelector('#current2').textContent = '0';
document.querySelector('.dice').style.display = 'none';
document.querySelector('.winning-score').value = '';

 // Event listeners for buttons
document.querySelector('.btn-new').addEventListener('click', rollDice);
document.querySelector('.btn-roll').addEventListener('click', holdScore);
document.querySelector('.btn-hold').addEventListener('click', initGame);

    // Event listener for changing the winning score
document.querySelector('.winning-score').addEventListener('input', function () {
    winningScore = parseInt(this.value) || 100; // Set a default value if input is empty
});
}

// function t roll the dice
function rollDice() {
    if (gamePlaying) {
        // Generate random dice numbers
        const dice1 = Mat.floor(Math.random() * 6) +1;
        const dice2 = Mat.floor(Math.random() * 6) +1;

        // Display the dice images
        const diceIMG1 = document.querySelector('#dice1');
        const diceIMG2 = document.querySelector('#dice2');
        diceIMG1.style.display = 'block';
        diceIMG2.style.display = 'block';
        diceIMG1.src = 'dice' + dice1 + '.png';
        diceIMG2.src = 'dice' + dice2 + '.png';

        // Update round score if both dice are not 6
        if (dice1 !== 6 || dice2 !== 6) {
            roundScore += dice1 + dice2;
            document.querySelector('.score' + activePlayer).textContent = roundScore;
        } else {
            // If both dice are 6, player loses round score are true
            roundScore = 0;
            document.querySelector('.score' + activePlayer).textContent = roundScore;
            switchPlayer();
        }
        
    }
}

// Function to hold the score
function holdScore() {
if (gamePlaying) {
    // Add round score to total score
    scores[activePlayer] += roundScore;
    document.querySelector('.current' + activePlayer).textContent = scores[activePlayer];

    // Check if player won
    if (scores[activePlayer] >= winningScore) {
        document.querySelector('.winning-score').value = ''; // Reset the winning score input
        document.querySelector('player' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        gamePlaying = false; 
    } else {
        // Switch to the next player
        switchPlayer();
    }
}
}
// Function to switch to the next player
function switchPlayer() {
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer =0);
    roundScore = 0;

    // Update UI to show active player
    document.querySelector('.score1').textContent = '0';
    document.querySelector('.score2').textContent = '0';

    // Toggle active player class for styling
    document.querySelector('.player1').classList.toggle('active');
    document.querySelector('.player2').classList.toggle('active');
}

// Function to initialize a new game
function initGame () {
    init();
}

//Event listener for changing the winning score
document.querySelector('winning-score').addEventListener('input', function() {
    winningScore = parseInt(this.value) || 100; // Set a default if input is empty
});

//Initialize the game when the page loads
init();