// collecting input from frontend "temp.html"

let finput = document.querySelector("#yourtemp").value;
// let ftemp = finput.value;

// converting form input to celcius
let cel = function(ftemp){
    let celcius = Math.floor((ftemp - 32) * .5556);
    return celcius;
}

//Displaying on the frontend "temp.html"
function celDisplay(){
    document.querySelector("#celcius").innerHTML = `Temperature in Celcius is: ${finput}`;
}

// console.log(cel(50)) -- works!!


