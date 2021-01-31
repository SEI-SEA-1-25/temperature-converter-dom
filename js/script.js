// Collecting input from frontend "temp.html"

let form = document.querySelector("form");
let finput = document.querySelector("#yourtemp");


//Calculating the temperature

function temperature() {
    form.addEventListener("submit", function(e){
    e.preventDefault();
    console.log(finput.value);
    console.log(Math.floor((finput.value - 32) * .5556));
});
    return Math.floor((finput.value - 32) * .5556)

}



//Displaying on the frontend "temp.html"

function celDisplay(){
    return document.querySelector("#celcius_display").textContent = `Temperature in Celcius is: ${temperature()} °C`;
}



