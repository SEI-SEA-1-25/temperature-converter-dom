
document.querySelector("#submitbtn").addEventListener("click", () => {
    var userInput = document.querySelector("#userInput").value;
    
    var result = 0;
    var fbtn = document.querySelector("#farenheit_btn").checked;
    var cbtn = document.querySelector("#celcius_btn").checked;
    if (fbtn === true) {
        result = (5 * (userInput - 32)) / 9;
    } else if (cbtn === true) {
        result = (9 * userInput + (32 * 5)) / 5;
    } else {
        alert("Please choose one!!!");
    }

   

    var displayResult = document.getElementById("displayID");
    displayResult.innerHTML = result;
    
});

document.getElementById("clearbtn").onclick = function() {
    document.getElementById("userInput").value = ''; 
    document.getElementById("farenheit_btn").checked = false;
    document.getElementById("celcius_btn").checked = false;
    document.getElementById("displayID").innerHTML = '';
    
 };




// function radioCheck() {
    //     if (document.querySelector("#farenheit_btn").checked) {
    //         document.querySelector("#celcius_btn").style.display = 'block';
    //     }
    //     else {
    //         document.querySelector("#celcius_btn").style.display = 'none';
    //     }
    // console.log(radiocheck());
    // }





    // var customerName = prompt("Please enter your name", "");
    // if (customerName!= null) {
    //     document.getElementById("#userInput").innerHTML =
    //     "Hello " + customerName + "! How are you today?";
    // }





// document.querySelector(".btnSelect1").addEventListener('')

