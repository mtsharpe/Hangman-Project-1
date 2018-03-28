let words = ['ARRAY', 'EVENT', 'VARIABLE', 'OBJECT', 'METHOD', 'FUNCTION', 'VALUE', 'STRING', 'BOOLEAN', 'TRUTHY', 'CONSOLE',
'HOISTING', 'LOOPS', 'MODULUS', 'CLASSES', 'PROMPT', 'CONDITION', 'CONCATENATE', 'SYNTAX', 'GITHUB', 'NULL', 'UNDEFINED']
let secretWord = words[Math.floor(Math.random() * words.length)]
let wordLetters = secretWord.split('')

let inputs = document.querySelectorAll('.buttons')
let guessNumber = document.querySelector('.countdown')

let matches = 0
let misses = 0


function createWord () {
  for (i = 0; i < wordLetters.length; i++) {
    let letters = document.createElement('div')
    letters.className += 'letters'
    document.querySelector('.word').appendChild(letters)
    letters.innerHTML = wordLetters[i]
  }
  console.log(wordLetters)
}
createWord()

function checkLetters () {
  inputs.forEach(function (input) {
    input.addEventListener('click', function () {
      let inputGuess = input.value
      input.setAttribute('class', 'clicked')
      wordLetters.forEach(function (letter) {
        if (inputGuess === letter) {
          matches++
          checkWin()
          console.log(letter, matches)
        }
      })
      if (inputGuess != wordLetters.letter) {
        hangman()
      }
    })
  })
}
checkLetters()

document.querySelectorAll('.letters').forEach(function (letter) {
  letter.classList.add('blank')
})

function checkWin () {
  if (matches === wordLetters.length) {
    document.querySelector('.guesses').innerHTML = 'WINNER!!!'
    reset()
  }
}

function hangman () {
  misses
  if (misses === 1) {
    document.querySelector('.noose').classList.add('hung')
    guessNumber.innerHTML -= 1
  } else if (misses === 2) {
    document.querySelector('.head').classList.add('headhung')
  } else if (misses === 3) {
    document.querySelector('.torso').classList.add('hung')
  } else if (misses === 4) {
    document.querySelector('.leftArm').classList.add('hung')
  } else if (misses === 5) {
    document.querySelector('.rightArm').classList.add('hung')
  } else if (misses === 6) {
    document.querySelector('.leftLeg').classList.add('hung')
  } else if (misses === 7) {
    document.querySelector('.rightLeg').classList.add('hung')
    document.querySelector('.guesses').innerHTML = 'YOU LOSE!'
    reset()
  }
}

function reset () {}