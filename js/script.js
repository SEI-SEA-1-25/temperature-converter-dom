// console.log('Hello, front end');
//Fahrenheit to Celsius
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.querySelector('#outputCelsius').innerText = (valNum - 32) / 1.8;
}
//Fahrenheit to Kelvin
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.querySelector('#Kelvin').innerText = ((valNum - 32) / 1.8) + 273.15;
}

//Celsius to Fahrenheit
function temperatureConverter2(valNum) {
    valNum = parseFloat(valNum);
    document.querySelector('#outputFahrenheit').innerText = (valNum * 1.8) + 32;
}

//Celsius to Kelvin
function temperatureConverter2(valNum) {
    valNum = parseFloat(valNum);
    document.querySelector('#KelvinC').innerText = (valNum + 273.15);
}
//Kelvin to Celsius
function temperatureConverter3(valNum) {
    valNum = parseFloat(valNum);
    document.querySelector('#outputCelsiusK').innerText = (valNum - 273.15);
}

//Kelvin to Fahrenheit
function temperatureConverter3(valNum) {
    valNum = parseFloat(valNum);
    document.querySelector('#outputFahrenheitK').innerText = ((valNum - 273.15) * 1.8) + 32;
}


document.querySelectorAll('button')