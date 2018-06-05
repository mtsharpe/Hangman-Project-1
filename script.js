// Chooses random word from array of choices and splits word into indiviudal letters
let words = ['ARRAY', 'EVENT', 'VARIABLE', 'OBJECT', 'METHOD', 'FUNCTION', 'VALUE', 'STRING', 'BOOLEAN', 'TRUTHY', 'CONSOLE',
'HOISTING', 'LOOPS', 'MODULUS', 'CLASSES', 'PROMPT', 'CONDITION', 'CONCATENATE', 'SYNTAX', 'GITHUB', 'NULL', 'UNDEFINED', 'NODE', 'ARGUMENT', 'SCOPE', 'OPERATOR', 'PARAMETER']

let secretWord, wordLetters

let makeSecretWord = () => {
  secretWord = words[Math.floor(Math.random() * words.length)]
  wordLetters = secretWord.split('')
}
makeSecretWord()
// Variables for creating letter input buttons, keeping track of number of guesses left and the number of matched and missed guesses
let inputs = document.querySelectorAll('.buttons')
let guessNumber = document.querySelector('.countdown')

let matches = 0
let misses = 0

// Creates letters as children of parent element word
function createWord () {
  for (i = 0; i < wordLetters.length; i++) {
    let letters = document.createElement('div')
    letters.classList.add('letters')
    document.querySelector('.word').appendChild(letters)
    letters.innerHTML = wordLetters[i]
    letters.classList.add(wordLetters[i], 'blank')
  }
  console.log(wordLetters)
}
createWord()

// Gets value of user input and compares value to letters contained in random word
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

checkLetters()

// Checks condition for win
function checkWin () {
  if (matches === wordLetters.length) {
    document.querySelector('.win').classList.remove('hidden')
    document.querySelector('.reset').classList.remove('hidden')
    document.querySelector('.hint').classList.add('hidden')
    document.querySelector('.guesses').classList.add('hidden')
  }
}
// Adds to hangman on each missed guess and decrements number of guesses left
function hangman () {
  if (misses === 1) {
    document.querySelector('.head').classList.remove('hidden')
    guessNumber.innerHTML--
  } else if (misses === 2) {
    document.querySelector('.torso').classList.remove('hidden')
    guessNumber.innerHTML--
  } else if (misses === 3) {
    document.querySelector('.leftArm').classList.remove('hidden')
    guessNumber.innerHTML--
  } else if (misses === 4) {
    document.querySelector('.rightArm').classList.remove('hidden')
    guessNumber.innerHTML--
  } else if (misses === 5) {
    document.querySelector('.leftLeg').classList.remove('hidden')
    guessNumber.innerHTML--
  } else if (misses === 6) {
    document.querySelector('.rightLeg').classList.remove('hidden')
    guessNumber.innerHTML--
    document.querySelector('.lastmiss').innerHTML = 'miss'
  } else if (misses === 7) {
    document.querySelector('.noose').classList.add('hung')
    document.querySelector('.lose').classList.remove('hidden')
    document.querySelector('.reset').classList.remove('hidden')
    document.querySelector('.guesses').classList.add('hidden')
    document.querySelector('.hint').classList.add('hidden')
    document.querySelector('.answer').classList.remove('hidden')
    Array.from(document.querySelectorAll('.word div')).forEach(letter => letter.classList.remove('blank'))
  }
}

// Resets game and variables
function reset () {
  Array.from(document.querySelectorAll('.man')).forEach(limb => limb.classList.add('hidden'))
  document.querySelector('.noose').classList.remove('hung')
  document.querySelector('.guesses').classList.remove('hidden')
  document.querySelector('.hint').classList.remove('hidden')
  document.querySelector('.lose').classList.add('hidden')
  document.querySelector('.reset').classList.add('hidden')
  document.querySelector('.win').classList.add('hidden')
  document.querySelector('.answer').classList.add('hidden')
  Array.from(inputs).forEach(input => {
    input.classList.remove('clicked')
  })
  document.querySelector('.word').innerHTML = ''
  document.querySelector('.lastmiss').innerHTML = 'misses'
  makeSecretWord()
  createWord()
  matches = 0
  misses = 0
  guessNumber.innerHTML = 7
}

document.querySelector('.reset').addEventListener('click', reset)
