"use strict";

const things = [
    "Sucks", "Blows", "is a dumb reroll game", "is for losers", "is terrible", "is garbage", "Stinks", "is a sorry excuse for a game", "is literally worse than Enigma", "deserves to be deleted", "is only played because of Nowi"
];

const elem = document.getElementById("desc");
var lastChoice = undefined;

document.addEventListener("click", function () {
    var choice = things[Math.floor(Math.random() * things.length)];
    while (choice === lastChoice) {
        choice = things[Math.floor(Math.random() * things.length)];
    }
    lastChoice = choice;
    
    elem.innerHTML = choice;
    
    elem.classList.remove("animate");
    void elem.offsetWidth;
    elem.classList.add("animate");
});