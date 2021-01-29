
const btn = document.querySelector('#btn');
// click button
btn.onclick = function () {
    const selector = document.querySelectorAll('input[name="temp"]');
    let selectedValue;
    for (const a of selector) {
        if (a.checked) {
            selectedValue = a.value;
            break;
        }
    }
    alert(selectedValue);

function cToF() {
    var c = document.getElementById("tempinput").value;
  return (c * 9 / 5) + 32;
}

function fToC() {
    var f = document.getElementById("tempinput").value;
  return (f - 32) * 5 / 9;
}
