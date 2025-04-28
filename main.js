

let btn = document.querySelector("#myButton")

function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1
}

btn.addEventListener("click", function() {
    let randomNumber = getRandomNumber()
    let result = document.querySelector("#result")
    result.innerHTML = "Random Number: " + randomNumber
    

})

