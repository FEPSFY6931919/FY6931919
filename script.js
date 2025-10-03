var button = document.getElementById("colorButton");

var text = document.getElementById("input1");

var choice = true;

function output_text() {
    window.alert("Entered " + text.value)
}

button.addEventListener("click", output_text);