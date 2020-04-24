// counterTextBox
// startCounterButton

let counterTextBox = document.getElementById("counterTextBox")
let startCounterButton = document.getElementById("startCounterButton")

let counterHeading = document.getElementById("counterHeading")

startCounterButton.addEventListener("click", function() {

    let value = counterTextBox.value
    console.log(value)
     // display counter on screen counting down from 20 
        // start the count down timer using set interval 
    let id = setInterval(function() {
        console.log("tick")

        // change the background of the body to green 
        document.body.style.background = "green"

        // display the count down on the screen 
        counterHeading.innerHTML = value
        // assign the new value subtracting one
        value = value - 1

        if (value < 0) {
            document.body.style.background = "red"
            // Stop the interval
            clearInterval(id)
            // console.log("LESS THEN ZERO")
        }


    }, 1000);

})