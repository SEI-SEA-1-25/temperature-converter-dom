const submit = document.querySelector('#submit')
const clear = document.querySelector('#clear')
var input = document.querySelector('#textInput')
var display = document.querySelector('.display')
const radioF= document.querySelector('#F')
const radioC = document.querySelector('#C')

let result = 0



submit.addEventListener('click', () => {
  if(radioF.checked === true && radioC.checked === false){
    fahrenheitToCelsius()
  
  }
  if(radioC.checked === true && radioF.checked === false) {
    celsiusToFahrenheit()
    
  }
})
clear.addEventListener('click', () => {
  display.style.background = ''
  input.value = ''
  display.innerHTML = ''
})


function fahrenheitToCelsius() {
  var result = (input.value - 32) / 1.8
  display.innerHTML = result + ' °C'

  if (result >= 100){
    display.style.background = 'red'
  }
  else {
    display.style.background = 'blue'
  }
}

function celsiusToFahrenheit() {
  result = (input.value * 1.8) + 32
  display.innerHTML = result + ' °F'
  
  if (result >= 37){
    display.style.background = 'red'
  }
  else {
    display.style.background = 'blue'
  }
}

