const subButton = document.querySelector(".submitButton");
//let input = document.querySelector(".directInput").value;
subButton.addEventListener("click", function () {
  let input = document.querySelector(".directInput").value;
  let far = document.querySelector("#fahrenheit");
  let cel = document.querySelector("#celcius");
  let result = "";
  if (far.checked === true && cel.checked === false) {
    result = (input - 30) * (5 / 9);
    //(32°F − 32) × 5/9
  }
  if (cel.checked === true && far.checked === false) {
    result = input * (9 / 5) + 32;
    // (0°C × 9/5) + 32
  }
  newText = document.createElement("p");
  let parent = document.querySelector(".crimsonRed");
  newText.innerText = result;
  parent.append(newText);
});
const clearButton = document.querySelector(".clearButton");
clearButton.addEventListener("click", function () {
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
  let gone = document.querySelector(".crimsonRed");
  removeAllChildNodes(gone);
  input = document.querySelector(".directInput").value = " ";
});

// const button = document.getElementById("submit-twood")
// button.addEventListener('click', function(){
//   let textField = document.getElementById("twood-input").value;
//   //let userInput = document.querySelector(".twood");
//   //userInput.innerText = textField;
//   newText = document.createElement("div");
//   let parent = document.querySelector(".twoods-container");
//   newText.className = "twood"
//   newText.innerText = textField;
//   parent.append(newText);
// });

// // var message = setTimeout(function(){
// //   var test = document.querySelector(".cutoff");
// //   test.classList.remove("hidden");
// // }, 1000)
