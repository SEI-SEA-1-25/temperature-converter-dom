// console.log('Hello, front end');

//Steps to script out:
//1. click in text box and text disappears

// let enterFirstValue = document.querySelector("#temp").value = ""

function textFieldClick () {
    document.querySelector("#temp").value = ""
}

document.querySelector("#temp").addEventListener("click", textFieldClick);

document.querySelector("#clear").addEventListener("click", clearClick);
//
//When Convert button is clicked
//1. Get value from radio buttons.

// let radios = document.querySelector("input[name=radiotemp]:checked");
// let radioValue = radios ? radios.value : "";

//2. Get value from text field.

// let numberToConvert = document.querySelector("#temp").value;

//3. Convert to correct unit of measurement.
// function farenFormula() {
//     numberToConvert * (9 / 5 + 32);
// }
// function celFormula() {
//     (numberToConvert-32) / 1.8;
// }
// function convertClick() {
//     let numberToConvert = document.querySelector("#temp").value;
//     let radios = document.querySelector("input[name=radiotemp]:checked");
//     let radioValue = radios ? radios.value : "";
//     if (radios == "#farenheit") {
//         document.querySelector("#temp").innerText = numberToConvert * (9 / 5 + 32);
//     }else if (radios == "#celsius") {
//         document.querySelector("#temp").innerText = (numberToConvert-32) / 1.8;
//     }else {
//         console.log(radioValue)
//     }
// }
document.querySelector("#convert").addEventListener("click", convertClick);


// let textFieldValue = document.querySelector("#temp").value;
// let newTemp = (textFieldValue - 32) / 1.8;
// let divParent = document.querySelector(".answerbox");


function convertClick() {
    let textFieldValue = document.querySelector("#temp").value;
    let newTemp = (textFieldValue - 32) / 1.8;
    let divParent = document.querySelector(".answerbox");
    divParent.innerText = newTemp + "°C";
    // console.log(newTemp)
}

function clearClick() {
    document.querySelector("#temp").value = ""
    document.querySelector(".answerbox").innerText = ""
}

// console.log(newTemp)
// let newTemp = (textFieldValue-32) / 1.8;
// console.log(newTemp);

// function convertClick() {
//     let numberToConvert = document.querySelector("#temp").value;
//     document.querySelector("#temp").innerText = ((numberToConvert-32) / 1.8);
// }

// document.querySelector("#convert").addEventListener("click", convertClick);
//4. Put new value back in text field.
//5. Put ice background for sub-freezing
//6. Put fire for 100 and up


//When Clear button is clicked
//1.Replace value with Enter Temperature
//
//
//
//
//