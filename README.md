
![Header Image](https://github.com/DiogoPoletti/Tic-Tac-Toe-Game/blob/main/Documentation/HeaderImage2.png)

# Tic-Tac-Toe Game
## Description
A classic Tic-Tac-Toe game that uses the FullStack knowledge on CSS, HTML, JavaScript, BootStrap and DOM to create a intuitive and responsive game. The objective of this game is to score 3 X or O with the in a row from any direction. It is multiplayer game with maximum 2 players per match.

## Screenshot
![Game Running](https://github.com/DiogoPoletti/Tic-Tac-Toe-Game/blob/main/Documentation/Tic-Tac-Toe.gif)

## What have I learnt
Creating this game enabled me to practice a few aspects:
* Get familiar with DOM methods and funcitons.
* Engage multiple laguages in a project.
* Get familiar with conditions and loops.
* Use BootStrap 3/4 in a simple web browser game.

## Code highlight
This block of code was able to check each table row and column and assign either X or O for the table square based on the clicks in the square. This was the core function in order to the game run as it will impact directly each player's strategy.

```
//Create a function that will check the square maker
function maker() {
    if(this.textContent === ''){
        this.textContent = 'X';
    } else if(this.textContent === 'X') {
            this.textContent = 'O';
    } else {
        this.textContent = '';
    }
}
```


> This is a companion project to Python 3.8 Full Stack Masterclass, check out the full course at www.udemy.com


![Footer Image](https://github.com/DiogoPoletti/Tic-Tac-Toe-Game/blob/main/Documentation/FooterImage.png)
