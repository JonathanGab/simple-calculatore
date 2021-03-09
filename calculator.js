const playerName = prompt("What's your name?");
const randomNumber = Math.floor(Math.random() * 100) + 1;

while(true) {
const playerNumber = parseInt(prompt("What's your choose?"));

if (playerNumber > randomNumber) {
    alert("it's less!");
} else if  (playerNumber < randomNumber) {
alert("it's more!");
} else if (playerNumber === randomNumber) {
alert(playerName + " win!");
break;
 }
}


