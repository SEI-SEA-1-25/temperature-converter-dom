console.log('Hello, front end');

// ATTEMPT 1 
// const convertTemp = (degree) => {
//     var x;
//     if (degree === "f") {
//         x = (document.getElementById("f").value -32) * 5 / 9;
//         document.getElementById("c").value = Math.round(x);
//     } else {
//         x = document.getElementById("c").value * 9 / 5 + 32;
//         document.getElementById("f").value = Math.round(x);    
//     }}

//ATTEMPT 2
// document.getElementById("f").value -32 * 5 / 9;
// document.getElementById("c").value = Math.round(x);
// document.getElementById("c").value * 9 / 5 + 32;
// document.getElementById("f").value = Math.round(x);

// const tempConvert = () => {

// }



const tempConvert = () => {
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;

    if (fahrenheit !== '') {
        celsius = (parseFloat(fahrenheit) - 32) / 1.8;
    } else {
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    }

    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);

}


function clearForm() {
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
} 

document.getElementById('submit').onclick = tempConvert;

  