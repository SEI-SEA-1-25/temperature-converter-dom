console.log('Hello, front end');


let tempValue = document.querySelector('.tempValue').value;
let submitButton = document.querySelector('.submitBut');

submitButton.onclick = function submitFunct() {
    let degreeResult = 0;
    let fahren = document.querySelector('.fahrenheit');
    let cels = document.querySelector('.celsius');
    if (fahren.checked === true && cels.checked === false) {
        degreeResult = (tempValue -32) / 1.8;
    } else if (cels.checked === true && fahren.checked === false){
        degreeResult = (tempValue * 18) + 32;
    }
    let degreeResultNew = document.createElement('p');
    let inputResult = document.querySelector('.inputResult');
    degreeResultNew.append(inputResult);
}
// submitFunct();

 let switchColor = function () {
    let inputResult = document.querySelector('.inputResult');
    if (degreeResult >= 0) {
    inputResult.classList.toggle(resultInputRed);
 } else {
    inputResult.classList.toggle(resultInputBlue);
 }
}
switchColor();