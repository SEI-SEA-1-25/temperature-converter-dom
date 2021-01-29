//setting my button var to the submit buttom 
const button = document.getElementById("submit");
console.log(button);

//creating awareness for when button is clicked
//function gets executed to apply conversion upon submit
//number is float therefore we round
button.addEventListener("click", function () {
    const userInput = document.getElementById("input").value;

    if( document.getElementById("fahrenheit").checked = true){
        document.getElementById("celsius").checked = false;
        let conversion = (userInput - 32) * (5/9);
        let finalConv = Math.round(conversion);
        document.getElementById("output").innerText = finalConv;
        console.log(conversion);
    }else if(document.getElementById("celsius").checked = true){
        document.getElementById("fahrenheit").checked = false;
        let conversion = (userInput * (9/5)) + 32;
        let finalConv = Math.round(conversion);
        document.getElementById("output").innerText = finalConv;
        console.log(conversion);
    }else{
        let selectionError = document.getElementById("error");
        selectionError.innerText = "Please select a starting coversion point!"
    }
    
    let conversion = (userInput - 32) * (5/9);

    let finalConv = Math.round(conversion);
    
    // if(finalConv <= 0){
    //     document.getElementById("output").style.color = "blue";
    // }else if (finalCon >= 32 ){
    //     document.getElementById("output").style.color = "red";
    // }else {
    //     document.getElementById("output").style.color = "black";
    // }
    
    document.getElementById("output").innerText = finalConv;
    console.log(conversion);
  });

//setting up clear button value to variable button2
  const button2 = document.getElementById("clear");

  //function to set value to user input to empty value 
  //as well as the output and radio buttons
  function clearInput (){
    const userInput = document.getElementById("input").value = '';
    document.getElementById("output").innerText = '';
    document.getElementById("fahrenheit").checked = false;
    document.getElementById("celsius").checked = false;
  }

  //creating awareness for when button is clicked
  button2.addEventListener("click", clearInput);


//   //create variable to set radio button value
//   let fahrenheit = document.getElementById("fahrenheit");
//   console.log(fahrenheit);

//   //function for converting fahrenheit to celsius
//   function conversionF (){
//     const userInput = document.getElementById("input").value;
//     let conversion = (userInput - 32) * (5/9);
//     let finalConv = Math.round(conversion);
//     document.getElementById("output").innerText = finalConv;
//     console.log(conversion);
//   }

//   //creating awareness for when radio button is clicked
//   fahrenheit.addEventListener("click",conversionF);


//   //creating var to equal celsius radio button
//   let celsius = document.getElementById("celsius");
//   console.log(celsius);

//   //function for converting celsius to fahrenheit
//   function conversionC (){
//     const userInput = document.getElementById("input").value;
//     let conversion = (userInput * (9/5)) + 32;
//     let finalConv = Math.round(conversion);
//     document.getElementById("output").innerText = finalConv;
//     console.log(conversion);
//   }

//   //creating awareness for when radio button is clicked
//   celsius.addEventListener("click",conversionC);






