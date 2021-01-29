//console.log('Hello, front end');

const submitButton = document.getElementById("submitButton");
const clearButton = document.getElementById("clear");





submitButton.addEventListener('click', function(){
    let tempF = document.getElementById("entry-field").value;
    let tempC = (tempF-32) * 5/9;
    console.log(tempC);
    document.querySelector("#result").append(tempC);
})

//console.log(tempF);

clearButton.addEventListener('click', function(){
    // let entryField = document.getElementById("entry-field").value;
    let nullValue = document.remove("entry-field").value
    //document.querySelector("#entry-field").append(nullValue);
    console.log(nullValue)
    // console.log(entryField);

})

