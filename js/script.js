console.log('Hello, front end');

function mySubmit() {
    document.getElementById("myForm").submit()
  
}

const subButton = document.querySelector(".submitButton");
subButton.addEventListener("click", function(e) {
    e.preventDefault()
    let input = document.querySelector(".directInput").value;
    let far = document.querySelector("#fahrenheit")
    let cel = document.querySelector("#celcius")
    let result = ''
        if (far.checked === true && cel.checked === false) {
            result = (input - 30) / 2 
        }
        if (cel.checked === true && far.checked === false){
            result  = (input + 30) * 2
        } console.log(result)
})
