const genreLinks = document.querySelectorAll(".genres a");

function loadPage() {
    const genre = this.dataset.genre;
    const pageToReload = "index.html?genres=" + genre;

    document.location.href = pageToReload;
}

genreLinks.forEach(link => {
    link.addEventListener("click", loadPage);
});
