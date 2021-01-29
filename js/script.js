console.log('Hello, front end');
document.querySelector('#submit-degree').addEventListener('click', ()) =>{ 
    const newInput = document.querySelector('#degree-input').value
    document.querySelector('#degree-input').value = ''
    const display = document.createElement('div')
    document.querySelector('.input-container').append(display)
    display.classList.add('degree')
    display.innerText = newInput
  }
 
  