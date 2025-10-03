var button = document.getElementById("Button");

var paragraph = document.getElementById("paragraph");

var text = document.getElementById("input1");

var choice = true;

function random_number() {
    paragraph.textContent = Math.floor(Math.random() * 10) + 1;
}

button.addEventListener("click", random_number);