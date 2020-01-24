const buttons = document.querySelectorAll(".btn.btn-secondary");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", loadGames);
}
