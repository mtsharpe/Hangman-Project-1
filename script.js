let words = ['ARRAY', 'EVENT', 'VARIABLE', 'OBJECT', 'METHOD', 'FUNCTION', 'VALUE', 'STRING', 'BOOLEAN', 'TRUTHY', 'CONSOLE', 'HOISTING', 'LOOPS', 'MODULUS', 'CLASSES', 'PROMPT', 'CONDITION', 'CONCATENATE']
let secretWord = words[Math.floor(Math.random() * words.length)]
let letter = secretWord.split('')

let inputs = document.querySelectorAll('.buttons')
let guessNumber = document.querySelector('.countdown')

for (i = 0; i <letter.length; i++) {
  let letters = document.createElement('div')
  letters.className += 'letters'
  document.querySelector('.word').appendChild(letters)
  letters.innerHTML = letter[i]
}
console.log(letter)

inputs.forEach(function (input) {
  input.addEventListener('click', function () {
    let inputGuess = input.value
    guessNumber.innerHTML -= 1
    console.log(inputGuess)
  })
})
