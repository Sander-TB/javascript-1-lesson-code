const buttons = document.querySelectorAll(".btn.btn-secondary");

for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", loadGames);
    buttons[i].addEventListener("click", handleActiveClass);
}

function handleActiveClass(event) {

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove("active");
    }

    event.target.classList.add("active");
}

const timeoutContainer = document.querySelector("div.timeout");
const timeoutButton = document.querySelector("button.timeout");

timeoutButton.addEventListener("click", updateDivAfterClick);

function updateDivAfterClick() {
    timeoutContainer.innerText = "";
    timeoutContainer.classList.add("loader");

    setTimeout(function() {
        timeoutContainer.innerText = "Loaded";
        timeoutContainer.classList.remove("loader");
    }, 3000);
}