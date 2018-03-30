# Hangman-Project-1
This is a game where the user must guess the letters of a 'secret word' within a set number of tries (currently 7). If the user guesses the word within the number of tries, they are declared the winner and given the option to play again. If the user is unable to guess the word, they are declared the loser, shown the answer and given the option to play again. Each missed guess adds an element to the 'hangman.'
## Motivation
I chose 'Hangman' because I thought it would be a challenging and fun option for my web development class project. The JavaScript theme was a natural extention of my headspace when working on the project. 
## Tech used
This app was built with:    
HTML    
CSS   
JavaScript
## Code example
This is the key portion of the game logic where the user input is compared to the letter values of the 'secret word' and evaluated as match or miss.  
```js
function checkLetters () {
  inputs.forEach(function (input) {
    input.addEventListener('click', function () {
      let inputGuess = input.value
      input.classList.add('clicked')
      if (wordLetters.includes(inputGuess) === true) {
        let guessedLetter = document.getElementsByClassName(inputGuess)
        Array.from(guessedLetter).forEach(letter => {
          letter.classList.remove('blank')
          matches++
        })
        checkWin()
      } else {
        misses++
        hangman()
      }
    })
  })
}
```
## Installation
Clone the repository to your computer and open the index.html file in the terminal to launch the game. 

## Credits
With all due apologies to [Saul Bass](https://en.wikipedia.org/wiki/Saul_Bass), my inspiration for the theme of this project was to achieve a feel somewhat akin to the movie poster for the Alfred Hitchcock movie [Vertigo](https://en.wikipedia.org/wiki/Saul_Bass#/media/File:Vertigomovie_restoration.jpg). 
