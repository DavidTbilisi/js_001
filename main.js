

let answer = prompt("how old are you?");

if (answer < 18) {
    alert("You are a minor.");
}
else if (answer >= 18 && answer < 65) {
    alert("You are an adult.");
}
else {
    alert("You are a senior citizen.");
}
