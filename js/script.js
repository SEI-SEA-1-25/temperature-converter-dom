///////////////////// Faren to Cal //////////////

function farToCal(a) {
  let b = (a - 32) * 0.5556;
  b = Math.round(b);
  console.log(b);
}

// farToCal(50);
///////////////////// Cal to Faren //////////////
function calToFar(a) {
  let b = a * 1.8 + 32;
  b = Math.round(b);
  console.log(b);
}

// calToFar(30);
////////////////////////////////////////

const fButton = document.querySelector(".farenB");
const cButton = document.querySelector(".celB");

fButton.addEventListener("click", function (a) {
  alert("Are you sure you want to know this?");
  a = document.querySelector("#textArea").value;

  let b = a * 1.8 + 32;
  b = Math.round(b);
  // console.log(b);
  document.querySelector(".convert").innerText = `${b}°F`;
});
/////////////////////////////////////////
cButton.addEventListener("click", function (a) {
  alert("Are you sure you want to know this?");
  a = document.querySelector("#textArea").value;

  let b = (a - 32) * 0.5556;
  b = Math.round(b);
  document.querySelector(".convert").innerText = `${b}°C`;
});

/////////////Clear Button
const clearB = document.getElementById("clearButton");

clearB.addEventListener("click", function () {
  alert("Wait, What, Why?");
  document.querySelector(".convert").innerText = " ";
  document.querySelector("#textArea").value = " ";
});
