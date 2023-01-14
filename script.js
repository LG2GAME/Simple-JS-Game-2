let rand = Math.floor(Math.random() * 100 + 1)
let counter = 0;
let score = 0;

const button = document.querySelector('#button')

button.addEventListener("click", function(){
    counter++;
    document.getElementById("user-try").innerHTML = counter

    
    if (counter == 1) {
        score = 10;
    } else if (counter < 3) {
        score = 5
    } else if (counter < 6) {
        score = 2
    } else {
        score = 1
    }

    document.getElementById("user-score").innerHTML = score
})

function play() {
    let message;
    let userNubmer = document.getElementById("user-number").value;

    if (userNubmer > rand) {
        message = "You're number is too big";
    } else if (userNubmer == rand) {
        message = "Congratulations! You guess the number";
    } else {
        message = "You're number is too small";
    }

    document.getElementById("system-message").innerHTML = message
}

