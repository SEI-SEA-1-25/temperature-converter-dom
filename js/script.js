const submitButton = document.querySelector("#submit")

let scale = false;
let temp = false;


function convertTemperature(){

    if(scale === "f"){
        return((temp-32)*(5/9));
    } else if (scale === "c"){
        return((temp*1.8) + 32);
    } else if (scale === false && temp === false){
        alert("Please select a unit and input a value, homie!");
    }   else if (scale === false){
        alert("Please select a scale homie")
    } else if( temp === false){
        alert("Please input a value, homie!")
    }

}


const buttonToGetText = document.querySelector("#tempInput");
console.log(buttonToGetText.value)

const outputElement = document.querySelector("#output");

function displayConversion(){

    temp = parseFloat(buttonToGetText.value);
    outputElement.innerText = convertTemperature(temp);
}

submitButton.addEventListener("click",displayConversion);


function clearValue(){

}

const clearButton = document.querySelector('#claritin');

function clearTheValue(){
    buttonToGetText.value = "";
}

clearButton.addEventListener("click",clearTheValue);


function changeScaleToF(){
    scale = "f";
}

function changeScaleToC(){
    scale = "c";
}

const radioF = document.querySelector("#f");
const radioC = document.querySelector("#c");

radioF.addEventListener("click",changeScaleToF);
radioC.addEventListener("click",changeScaleToC);