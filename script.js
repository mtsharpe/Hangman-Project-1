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
    letters.classList.add('letters')
    document.querySelector('.word').appendChild(letters)
    letters.innerHTML = wordLetters[i]
    letters.classList.add(wordLetters[i], 'blank')
  }
  console.log(wordLetters)
}
createWord()

function checkLetters () {
  inputs.forEach(function (input) {
    input.addEventListener('click', function () {
      let inputGuess = input.value
      input.setAttribute('class', 'clicked')
      if (wordLetters.includes(inputGuess) === true) {
        document.getElementsByClassName()
        wordLetters.slice(inputGuess)  
        matches++
        checkWin()
      } else {
        misses++
        hangman()
      }
    })
  })
}


checkLetters()

function checkWin () {
  if (matches === wordLetters.length) {
    document.querySelector('.word').innerHTML = '<h4>WINNER!!!<h4>'
  }
}

function hangman () {
  if (misses === 1) {
    document.querySelector('.noose').classList.add('hung')
    guessNumber.innerHTML--
  } else if (misses === 2) {
    document.querySelector('.head').classList.add('headhung')
    guessNumber.innerHTML--
  } else if (misses === 3) {
    document.querySelector('.torso').classList.add('hung')
    guessNumber.innerHTML--
  } else if (misses === 4) {
    document.querySelector('.leftArm').classList.add('hung')
    guessNumber.innerHTML--
  } else if (misses === 5) {
    document.querySelector('.rightArm').classList.add('hung')
    guessNumber.innerHTML--
  } else if (misses === 6) {
    document.querySelector('.leftLeg').classList.add('hung')
    guessNumber.innerHTML--
  } else if (misses === 7) {
    document.querySelector('.rightLeg').classList.add('hung')
    document.querySelector('.guesses').innerHTML = ''
    document.querySelector('.reset').classList.remove('hidden') 
  }
}

function reset () {
  document.querySelector('.noose').classList.remove('hung')
  document.querySelector('.head').classList.remove('headhung')
  document.querySelector('.torso').classList.remove('hung')
  document.querySelector('.leftArm').classList.remove('hung')
  document.querySelector('.rightArm').classList.remove('hung')
  document.querySelector('.leftLeg').classList.remove('hung')
  document.querySelector('.rightLeg').classList.remove('hung')
  document.querySelector('.guesses').innerHMTL = '<h2>You have <span class=".countdown">7</span> guesses remaining</h2>'
  inputs.forEach(function (input) {
    input.removeAttribute('clicked')
  })
  createWord()
}

document.querySelector('.reset').addEventListener('click', reset)
