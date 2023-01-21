let rand = Math.floor(Math.random() * 100 + 1)
let counter = 0;
let score = 0;
const checkButton = document.querySelector('#check-button')

checkButton.addEventListener("click", function(){
    counter++;
    document.getElementById("user-try").innerHTML = counter
    document.getElementById("user-score").innerHTML = score
})

function play() {
    let message;
    let userNubmer = document.getElementById("user-number").value;

    if (userNubmer > rand) {
        message = "You're number is too big";
    } else if (userNubmer == rand) {
        message = "Congratulations! You guess the number";

            if (counter == 0) {
                score += 10;
            } else if (counter < 3) {
                score += 5
            } else if (counter <= 5) {
                score += 2
            } else {
                score += 1
            }

        setTimeout(() => { 
            document.getElementById("system-message").innerHTML = "3..."
         }, 2000);
         setTimeout(() => { 
            document.getElementById("system-message").innerHTML = "2..."
         }, 3000);
         setTimeout(() => { 
            document.getElementById("system-message").innerHTML = "1..."
            document.getElementById("user-number").value = "";
         }, 4000);
        setTimeout(() => { playAgain() }, 5000);
    } else {
        message = "You're number is too small";
    }

    document.getElementById("system-message").innerHTML = message
 
}

function playAgain() {
    rand = Math.floor(Math.random() * 100 + 1)

    counter = 0;
    document.getElementById("user-try").innerHTML = counter

    play()

    document.getElementById("system-message").innerHTML = "Enter you're number"
}