const button = document.getElementById("submit");
console.log(button);

button.addEventListener("click", function () {
    const userInput = document.getElementById("input").value;
    let conversion = (userInput - 32) * (5/9);
    let finalConv = Math.round(conversion);
    document.getElementById("output").innerText = finalConv;
    console.log(conversion);
  });

  const button2 = document.getElementById("clear");

  function clearInput (){
    const userInput = document.getElementById("input").value = '';
    document.getElementById("output").innerText = '';
  }

  button2.addEventListener("click", clearInput);




