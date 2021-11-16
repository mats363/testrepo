
const message = `Hej`;


let textBox = document.getElementById("textBox");
//textBox.insertAdjacentHTML("afterbegin", message);

let fName = prompt("Hej vad heter du?");
let lName = prompt("I efternamn då?");
let userName = fName + "" + lName;

textBox.insertAdjacentHTML("afterbegin", "<div class=''>" + userName + "</div>" );