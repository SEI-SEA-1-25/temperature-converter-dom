console.log('Hello, front end');
let degreeResult = 0;
let fahren;
let cels;
let submitButton = document.querySelector('.submitBut');
let divResult = document.querySelector('.divResult');

submitButton.addEventListener('click', function() {
    let tempValue = document.querySelector('.tempValue').value;
    fahren = document.querySelector('.fahrenheit');
    cels = document.querySelector('.celsius');
    if (fahren.checked === true && cels.checked === false) {
        degreeResult = (tempValue -32) / 1.8;
    } else if (cels.checked === true && fahren.checked === false){
        degreeResult = (tempValue * 18) + 32;
    }

    divResult.innerText = degreeResult;
})

document.querySelector('.clearBut').addEventListener('click', function (){
    divResult.innerText = '';
    document.querySelector('.tempValue').value = '';
   
})


 let switchColor = function () {
    // divResult = document.querySelector('.divResult');
    if (degreeResult >= 0) {
        divResult.classList.toggle('.resultDivRed');
        console.log(divResult.classList)
 } else {
    divResult.classList.toggle('.resultDivBlue');
 }
}
switchColor();
