console.log('Hello, front end');



var myFahrenheit = document.querySelector("#fahrenheit");
var myCelcius = document.querySelector("#celcius")
var mySubmit = document.querySelector("#button1")
var myClear = document.querySelector("#button2")


myFahrenheit.addEventListener("click", function(){
    const cTemp = (document.querySelector("#degrees").value - 32) * 5 / 9;
    document.querySelector(".result").innerText = cTemp
    document.querySelector("#degrees").value= "Cheers"
})

myCelcius.addEventListener("click", function(){
    const fTemp = document.querySelector("#degrees").value * 9 / 5 + 32;
    document.querySelector(".result").innerText = fTemp
    document.querySelector("#degrees").value= "Cheers"
})

myClear.addEventListener("click", function(){
    document.querySelector("#degrees").value=""
    document.querySelector(".result").innerText = ""
})



 


// function cToF(celsius) 
// {
//   var cTemp = celsius;
//   var cToFahr = cTemp * 9 / 5 + 32;
//   var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fToC(fahrenheit) 
// {
//   var fTemp = fahrenheit;
//   var fToCel = (fTemp - 32) * 5 / 9;
//   var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
//     console.log(message);
// } 
// cToF(40);
// fToC(45);