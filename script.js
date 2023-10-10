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

//generate a random number from 1 to 6:
const firstRandomNum = Math.floor(Math,random() * 6) + 1;

// images/dice1.png upto images/dice6.png
const firstDiceImage = 'sources/dice' + firstRandomNum + '.png';

document.querySelectorAll('img')[0].setAttribute('src', firstDiceImage);

//generate a random number from 1 to 6 (for dice2):
const secondRandomNum = Math.floor(Math,random() * 6) + 1;

// images/dice1.png upto images/dice6.png
const secondDiceImage = 'sources/dice' + secondRandomNum + '.png';

document.querySelectorAll('img')[1].setAttribute('src', secondDiceImage);
