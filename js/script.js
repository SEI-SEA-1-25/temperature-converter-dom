document.querySelector('#submit').addEventListener('click', function () {
  const inputTemp =  document.querySelector('input').value
  

  const outputTemp = (inputTemp - 32) / 1.8

  document.querySelector('.display').innerText = outputTemp

})