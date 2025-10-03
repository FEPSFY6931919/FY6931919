// Get a reference to the button element
var button = document.getElementById("colorButton");
// Function to change the button color
function changeColor() {
// Generate a random color (hexadecimal)
var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
// Set the button's background color to the random color
button.style.backgroundColor = randomColor;
}
// Add a click event listener to the button
button.addEventListener("click", changeColor);

var text = document.getElementById("input1");

function print_text(){
    console.log(text.value);
}
var choice = false;


function hide_button() {
    if (choice == true){
        document.getElementById("input1").style.display = "none";
    }
    else {
        document.getElementById("input1").style.display = "inline";
    }
    choice = !choice;
}

button.addEventListener("click", hide_button);