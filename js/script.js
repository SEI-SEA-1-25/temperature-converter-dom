// console.log('Hello, front end');
// document.querySelector('#submit-degree').addEventListener('click', ()) =>{ 
//     const newInput = document.querySelector('#degree-input').value
//     document.querySelector('#degree-input').value = ''
//     const display = document.createElement('div')
//     document.querySelector('.input-container').append(display)
//     display.classList.add('degree')
//     display.innerText = newInput
//   }
 
document.querySelector("#submit").addEventListener('click', function () {
    const tempInput = document.querySelector('input').value
    const tempOutput = (tempInput - 32) / 1.8
    docuemnt.querySelector('.display').innerText = tempOutput
    console.log('hi')
})

docuemnt.querySelector('#clear').addEventListener('click', function () {
    document.querySelector('input').value = ''
    document.querySelector('display').innerText = 'Answer will appear here'
})