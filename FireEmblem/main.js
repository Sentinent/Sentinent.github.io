"use strict";

const things = [
    "Sucks", "Blows", "is a dumb reroll game", "is for losers", "is terrible", "is garbage", "Stinks", "is a sorry excuse for a game", "is literally worse than Enigma", "deserves to be deleted", "is only played because of Nowi", "is for idiots who can't play real games"
];

var elem = document.getElementById("desc");

document.addEventListener("click", function () {
    elem.innerHTML = things[Math.floor(Math.random() * things.length)];
    
    elem.classList.remove("animate");
    void elem.offsetWidth;
    elem.classList.add("animate");
});