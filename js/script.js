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
            result = (input - 32) / 1.8 
        }
        if (cel.checked === true && far.checked === false){
            result  = (input * 1.8) + 32
        } console.log(result)

        newText = document.createElement("p");
    let parent = document.querySelector(".crimsonRed");
    newText.innerText = result;
    parent.append(newText);
})
