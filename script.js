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
  }
  console.log(wordLetters)
}
createWord()

document.querySelectorAll('.letters').forEach(function (letter) {
  letter.classList.add('blank')
})

function checkLetters () {
  inputs.forEach(function (input) {
    input.addEventListener('click', function () {
      let inputGuess = input.value
      input.setAttribute('class', 'clicked')
      wordLetters.forEach(function (letter) {
        if (inputGuess === letter) {
          document.querySelectorAll('.letters').forEach(function (letter) {
            letter.classList.remove('.blank')
          })
          matches++
          checkWin()
          console.log(letter, matches)
        }
        else {
          hangman()
        }
      })
    })
  })
}
checkLetters()

function checkWin () {
  if (matches === wordLetters.length) {
    document.querySelector('.guesses').innerHTML = 'WINNER!!! <br> Would you like to play again?'
    reset()
  }
}
function hangman () {
  switch (misses) {
    case 1:
      document.querySelector('.noose').classList.add('hung')
      guessNumber.innerHTML -= 1
      break
    case 2:
      document.querySelector('.head').classList.add('headhung')
      guessNumber.innerHTML -= 1
      break
    case 3:
      document.querySelector('.torso').classList.add('hung')
      guessNumber.innerHTML -= 1
      break
    case 4:
      document.querySelector('.leftArm').classList.add('hung')
      guessNumber.innerHTML -= 1
      break
    case 5:
      document.querySelector('.rightArm').classList.add('hung')
      guessNumber.innerHTML -= 1
      break
    case 6:
      document.querySelector('.leftLeg').classList.add('hung')
      guessNumber.innerHTML -= 1
      break
    case 7:
      document.querySelector('.rightLeg').classList.add('hung')
      document.querySelector('.guesses').innerHTML = 'YOU LOSE! <br> Would you like to play again?'
   // reset()
  }
}

//   if (misses === 1) {
//     document.querySelector('.noose').classList.add('hung')
//     guessNumber.innerHTML -= 1
//   } else if (misses === 2) {
//     document.querySelector('.head').classList.add('headhung')
//     guessNumber.innerHTML -= 1
//   } else if (misses === 3) {
//     document.querySelector('.torso').classList.add('hung')
//     guessNumber.innerHTML -= 1
//   } else if (misses === 4) {
//     document.querySelector('.leftArm').classList.add('hung')
//     guessNumber.innerHTML -= 1
//   } else if (misses === 5) {
//     document.querySelector('.rightArm').classList.add('hung')
//     guessNumber.innerHTML -= 1
//   } else if (misses === 6) {
//     document.querySelector('.leftLeg').classList.add('hung')
//     guessNumber.innerHTML -= 1
//   } else if (misses === 7) {
//     document.querySelector('.rightLeg').classList.add('hung')
//     document.querySelector('.guesses').innerHTML = 'YOU LOSE! <br> Would you like to play again?'
//    // reset()
//   }
// }

// // function reset () {
// //   document.querySelectorAll('.man').forEach(function () {

// //   })
// //   createWord()
// // }